import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Product, CartItem, Order, Enquiry, StoreSettings, ViewState } from '../types';
import { INITIAL_PRODUCTS, INITIAL_SETTINGS } from '../data/initialData';

interface StoreContextType {
  // Navigation & UI State
  activeView: ViewState;
  setActiveView: (view: ViewState) => void;
  selectedProduct: Product | null;
  setSelectedProduct: (product: Product | null) => void;
  quickViewProduct: Product | null;
  setQuickViewProduct: (product: Product | null) => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  navigateTo: (view: ViewState, product?: Product) => void;

  // Products
  products: Product[];
  addProduct: (product: Omit<Product, 'id' | 'createdAt'>) => void;
  updateProduct: (product: Product) => void;
  deleteProduct: (id: string) => void;

  // Cart
  cart: CartItem[];
  addToCart: (product: Product, size?: string, colour?: string, quantity?: number) => void;
  removeFromCart: (cartItemId: string) => void;
  updateCartQuantity: (cartItemId: string, quantity: number) => void;
  clearCart: () => void;
  cartSubtotal: number;
  cartCount: number;

  // Wishlist
  wishlist: string[];
  toggleWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;

  // Orders
  orders: Order[];
  createOrder: (customerInfo: any, paymentMethod: any) => Order;
  updateOrderStatus: (orderId: string, status: Order['orderStatus']) => void;

  // Enquiries
  enquiries: Enquiry[];
  submitEnquiry: (enquiryData: Omit<Enquiry, 'id' | 'createdAt' | 'status'>) => void;
  updateEnquiryStatus: (enquiryId: string, status: Enquiry['status']) => void;

  // Store Settings
  settings: StoreSettings;
  updateSettings: (newSettings: Partial<StoreSettings>) => void;
  getWhatsAppLink: (customMessage?: string) => string;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // LocalStorage state initialization helper
  const getStored = <T,>(key: string, fallback: T): T => {
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : fallback;
    } catch (e) {
      return fallback;
    }
  };

  // State Declarations
  const [activeView, setActiveView] = useState<ViewState>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const [products, setProducts] = useState<Product[]>(() => getStored('bahari_products', INITIAL_PRODUCTS));
  const [settings, setSettings] = useState<StoreSettings>(() => {
    const stored = getStored<StoreSettings>('bahari_settings', INITIAL_SETTINGS);
    if (!stored.address || stored.address.includes('Vivekananda') || stored.address.includes('Mukundapur') || stored.address.includes('700099')) {
      return { ...stored, address: INITIAL_SETTINGS.address };
    }
    return stored;
  });
  const [cart, setCart] = useState<CartItem[]>(() => getStored('bahari_cart', []));
  const [wishlist, setWishlist] = useState<string[]>(() => getStored('bahari_wishlist', []));
  const [orders, setOrders] = useState<Order[]>(() => getStored('bahari_orders', []));
  const [enquiries, setEnquiries] = useState<Enquiry[]>(() => getStored('bahari_enquiries', []));

  // Sync state to LocalStorage
  useEffect(() => { localStorage.setItem('bahari_products', JSON.stringify(products)); }, [products]);
  useEffect(() => { localStorage.setItem('bahari_settings', JSON.stringify(settings)); }, [settings]);
  useEffect(() => { localStorage.setItem('bahari_cart', JSON.stringify(cart)); }, [cart]);
  useEffect(() => { localStorage.setItem('bahari_wishlist', JSON.stringify(wishlist)); }, [wishlist]);
  useEffect(() => { localStorage.setItem('bahari_orders', JSON.stringify(orders)); }, [orders]);
  useEffect(() => { localStorage.setItem('bahari_enquiries', JSON.stringify(enquiries)); }, [enquiries]);

  // Scroll to top on view changes
  const navigateTo = (view: ViewState, product?: Product) => {
    if (product) {
      setSelectedProduct(product);
    }
    setActiveView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Product Methods
  const addProduct = (newProdData: Omit<Product, 'id' | 'createdAt'>) => {
    const newProd: Product = {
      ...newProdData,
      id: `bahari-${Date.now().toString().slice(-5)}`,
      createdAt: new Date().toISOString().split('T')[0]
    };
    setProducts(prev => [newProd, ...prev]);
  };

  const updateProduct = (updatedProd: Product) => {
    setProducts(prev => prev.map(p => p.id === updatedProd.id ? updatedProd : p));
  };

  const deleteProduct = (id: string) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  // Cart Methods
  const addToCart = (product: Product, size?: string, colour?: string, quantity: number = 1) => {
    const selectedSize = size || product.sizes[0] || 'Standard';
    const selectedColour = colour || product.colour;
    const cartItemId = `${product.id}-${selectedSize}-${selectedColour}`;

    setCart(prev => {
      const existing = prev.find(item => item.id === cartItemId);
      if (existing) {
        return prev.map(item =>
          item.id === cartItemId ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prev, { id: cartItemId, product, selectedSize, selectedColour, quantity }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (cartItemId: string) => {
    setCart(prev => prev.filter(item => item.id !== cartItemId));
  };

  const updateCartQuantity = (cartItemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setCart(prev => prev.map(item => item.id === cartItemId ? { ...item, quantity } : item));
  };

  const clearCart = () => setCart([]);

  const cartSubtotal = cart.reduce((sum, item) => {
    const price = item.product.salePrice || item.product.price;
    return sum + price * item.quantity;
  }, 0);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Wishlist Methods
  const toggleWishlist = (productId: string) => {
    setWishlist(prev =>
      prev.includes(productId) ? prev.filter(id => id !== productId) : [...prev, productId]
    );
  };

  const isInWishlist = (productId: string) => wishlist.includes(productId);

  // Order Methods
  const createOrder = (customer: any, paymentMethod: any): Order => {
    const shippingFee = cartSubtotal > 2999 ? 0 : 150;
    const newOrder: Order = {
      id: `ord-${Date.now().toString().slice(-6)}`,
      orderNumber: `BHR-${Math.floor(100000 + Math.random() * 900000)}`,
      items: [...cart],
      subtotal: cartSubtotal,
      shippingFee,
      totalAmount: cartSubtotal + shippingFee,
      customer,
      paymentMethod,
      paymentStatus: paymentMethod === 'COD' ? 'COD' : 'Paid',
      orderStatus: 'Processing',
      createdAt: new Date().toLocaleString()
    };
    setOrders(prev => [newOrder, ...prev]);
    clearCart();
    return newOrder;
  };

  const updateOrderStatus = (orderId: string, status: Order['orderStatus']) => {
    setOrders(prev => prev.map(o => o.id === orderId ? { ...o, orderStatus: status } : o));
  };

  // Enquiry Methods
  const submitEnquiry = (enquiryData: Omit<Enquiry, 'id' | 'createdAt' | 'status'>) => {
    const newEnquiry: Enquiry = {
      ...enquiryData,
      id: `enq-${Date.now().toString().slice(-5)}`,
      status: 'New',
      createdAt: new Date().toLocaleString()
    };
    setEnquiries(prev => [newEnquiry, ...prev]);
  };

  const updateEnquiryStatus = (enquiryId: string, status: Enquiry['status']) => {
    setEnquiries(prev => prev.map(e => e.id === enquiryId ? { ...e, status } : e));
  };

  // Settings Methods
  const updateSettings = (newSettings: Partial<StoreSettings>) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
  };

  // WhatsApp Link Generator Helper
  const getWhatsAppLink = (customText?: string) => {
    const defaultMsg = `Hi Bahari Block & Hand Painting Unit! I'm interested in your handcrafted textiles. Could you please share more details?`;
    const text = encodeURIComponent(customText || defaultMsg);
    const cleanNumber = settings.whatsappNumber.replace(/[^0-9]/g, '');
    return `https://wa.me/${cleanNumber}?text=${text}`;
  };

  return (
    <StoreContext.Provider
      value={{
        activeView,
        setActiveView,
        selectedProduct,
        setSelectedProduct,
        quickViewProduct,
        setQuickViewProduct,
        isCartOpen,
        setIsCartOpen,
        searchQuery,
        setSearchQuery,
        navigateTo,

        products,
        addProduct,
        updateProduct,
        deleteProduct,

        cart,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        cartSubtotal,
        cartCount,

        wishlist,
        toggleWishlist,
        isInWishlist,

        orders,
        createOrder,
        updateOrderStatus,

        enquiries,
        submitEnquiry,
        updateEnquiryStatus,

        settings,
        updateSettings,
        getWhatsAppLink
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};
