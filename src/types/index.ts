export type CraftType = 
  | 'Block Printing'
  | 'Hand Painting'
  | 'Hand Wax'
  | 'Kalamkari'
  | 'Dyeing & Texturing'
  | 'Custom / Job Work';

export type CategoryType = 
  | 'Kurtis'
  | 'Sarees'
  | 'Fabrics'
  | 'Ready-to-Wear'
  | 'Handcrafted Pieces'
  | 'Dupattas';

export interface ProductDetails {
  fabric: string;
  technique: string;
  colour: string;
  washCare: string;
  productionInfo: string;
  origin: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  salePrice?: number;
  images: string[];
  category: CategoryType;
  craft: CraftType;
  fabric: string;
  colour: string;
  availableColours: string[];
  sizes: string[];
  stock: number;
  description: string;
  details: ProductDetails;
  craftStory: string;
  featured?: boolean;
  newArrival?: boolean;
  bestSeller?: boolean;
  handcrafted?: boolean;
  createdAt: string;
}

export interface CraftCategoryInfo {
  id: string;
  name: CraftType;
  tagline: string;
  description: string;
  image: string;
}

export interface CartItem {
  id: string;
  product: Product;
  selectedSize: string;
  selectedColour: string;
  quantity: number;
}

export interface CustomerAddress {
  name: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  state: string;
  pinCode: string;
}

export interface Order {
  id: string;
  orderNumber: string;
  items: CartItem[];
  subtotal: number;
  shippingFee: number;
  totalAmount: number;
  customer: CustomerAddress;
  paymentMethod: 'UPI' | 'Razorpay' | 'Card' | 'Netbanking' | 'COD';
  paymentStatus: 'Paid' | 'Pending' | 'COD';
  orderStatus: 'Processing' | 'Dispatched' | 'Delivered' | 'Cancelled';
  createdAt: string;
}

export interface Enquiry {
  id: string;
  type: 'custom' | 'wholesale' | 'contact';
  name: string;
  email: string;
  phone: string;
  businessName?: string;
  city?: string;
  workType?: string;
  fabricType?: string;
  quantity?: string;
  message: string;
  referenceImage?: string;
  status: 'New' | 'In Touch' | 'Completed';
  createdAt: string;
}

export interface StoreSettings {
  brandName: string;
  tagline: string;
  sinceYear: string;
  phone: string;
  whatsappNumber: string;
  instagramHandle: string;
  address: string;
  businessHours: string;
  announcementText: string;
  heroHeading: string;
  heroSubtext: string;
  heroImage: string;
}

export type ViewState = 
  | 'home'
  | 'shop'
  | 'product-detail'
  | 'custom-work'
  | 'wholesale'
  | 'our-story'
  | 'contact'
  | 'checkout'
  | 'admin';

export interface FilterState {
  search: string;
  category: string;
  craft: string;
  fabric: string;
  colour: string;
  size: string;
  minPrice: number;
  maxPrice: number;
  sortBy: 'featured' | 'newest' | 'price-low' | 'price-high' | 'bestselling';
}
