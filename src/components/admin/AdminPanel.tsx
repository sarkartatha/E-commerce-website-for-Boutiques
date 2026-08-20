import React, { useState } from 'react';
import { useStore } from '../../context/StoreContext';
import type { Product, StoreSettings, CategoryType, CraftType } from '../../types';
import { Settings, Package, ShoppingCart, MessageSquare, Plus, Edit2, Trash2, Save, Check } from 'lucide-react';

export const AdminPanel: React.FC = () => {
  const {
    products,
    addProduct,
    updateProduct,
    deleteProduct,
    orders,
    updateOrderStatus,
    enquiries,
    settings,
    updateSettings,
    navigateTo
  } = useStore();

  const [activeTab, setActiveTab] = useState<'products' | 'orders' | 'enquiries' | 'settings'>('products');
  
  // Product Form Modal state
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  
  // Product Form Fields
  const [productForm, setProductForm] = useState({
    name: '',
    price: 1000,
    salePrice: 900,
    category: 'Kurtis' as CategoryType,
    craft: 'Block Printing' as CraftType,
    fabric: 'Pure Cotton',
    colour: 'Terracotta Red',
    sizes: 'S, M, L, XL',
    stock: 10,
    description: '',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=800',
    featured: false,
    bestSeller: false,
    newArrival: true
  });

  // Store Settings Form state
  const [settingsForm, setSettingsForm] = useState<StoreSettings>({ ...settings });
  const [settingsSaved, setSettingsSaved] = useState(false);

  const handleOpenNewProduct = () => {
    setEditingProduct(null);
    setProductForm({
      name: '',
      price: 2500,
      salePrice: 2200,
      category: 'Kurtis',
      craft: 'Block Printing',
      fabric: 'Chanderi Silk Cotton',
      colour: 'Crimson & Cream',
      sizes: 'S, M, L, XL',
      stock: 15,
      description: 'Handcrafted block printed ethnic piece made in Nagerbazar, Kolkata.',
      image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=800',
      featured: false,
      bestSeller: false,
      newArrival: true
    });
    setIsProductModalOpen(true);
  };

  const handleOpenEditProduct = (p: Product) => {
    setEditingProduct(p);
    setProductForm({
      name: p.name,
      price: p.price,
      salePrice: p.salePrice || p.price,
      category: p.category,
      craft: p.craft,
      fabric: p.fabric,
      colour: p.colour,
      sizes: p.sizes.join(', '),
      stock: p.stock,
      description: p.description,
      image: p.images[0] || '',
      featured: !!p.featured,
      bestSeller: !!p.bestSeller,
      newArrival: !!p.newArrival
    });
    setIsProductModalOpen(true);
  };

  const handleSaveProduct = (e: React.FormEvent) => {
    e.preventDefault();
    const sizeArray = productForm.sizes.split(',').map(s => s.trim()).filter(Boolean);

    if (editingProduct) {
      updateProduct({
        ...editingProduct,
        name: productForm.name,
        price: Number(productForm.price),
        salePrice: Number(productForm.salePrice),
        category: productForm.category,
        craft: productForm.craft,
        fabric: productForm.fabric,
        colour: productForm.colour,
        sizes: sizeArray,
        stock: Number(productForm.stock),
        description: productForm.description,
        images: [productForm.image, ...editingProduct.images.slice(1)],
        featured: productForm.featured,
        bestSeller: productForm.bestSeller,
        newArrival: productForm.newArrival
      });
    } else {
      addProduct({
        name: productForm.name,
        slug: productForm.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        price: Number(productForm.price),
        salePrice: Number(productForm.salePrice),
        category: productForm.category,
        craft: productForm.craft,
        fabric: productForm.fabric,
        colour: productForm.colour,
        availableColours: [productForm.colour],
        sizes: sizeArray,
        stock: Number(productForm.stock),
        description: productForm.description,
        images: [productForm.image],
        details: {
          fabric: productForm.fabric,
          technique: productForm.craft,
          colour: productForm.colour,
          washCare: 'Gentle Hand Wash',
          productionInfo: 'Handmade in Nagerbazar, Kolkata',
          origin: 'Kolkata, India'
        },
        craftStory: 'Traditional artisan handcraft piece.',
        featured: productForm.featured,
        bestSeller: productForm.bestSeller,
        newArrival: productForm.newArrival,
        handcrafted: true
      });
    }

    setIsProductModalOpen(false);
  };

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    updateSettings(settingsForm);
    setSettingsSaved(true);
    setTimeout(() => setSettingsSaved(false), 2500);
  };

  return (
    <div className="bg-[#FAF6F0] min-h-screen py-10 px-4 sm:px-6 lg:px-8 text-[#1F1C1B]">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Admin Header Banner */}
        <div className="bg-[#1F1C1B] text-white rounded-3xl p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xl">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#C89B54] uppercase tracking-widest">
              <Settings className="w-4 h-4" />
              <span>Owner Dashboard</span>
            </div>
            <h1 className="font-serif text-3xl font-bold tracking-tight">
              Woven With Dream Admin Panel (Karuna)
            </h1>
          </div>

          <button
            onClick={() => navigateTo('home')}
            className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider"
          >
            View Live Website →
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap border-b border-[#E6DDD0] gap-4">
          <button
            onClick={() => setActiveTab('products')}
            className={`pb-3 text-xs font-bold uppercase tracking-wider flex items-center gap-2 ${
              activeTab === 'products' ? 'text-[#8E2A2A] border-b-2 border-[#8E2A2A]' : 'text-gray-500'
            }`}
          >
            <Package className="w-4 h-4" /> Manage Products ({products.length})
          </button>

          <button
            onClick={() => setActiveTab('orders')}
            className={`pb-3 text-xs font-bold uppercase tracking-wider flex items-center gap-2 ${
              activeTab === 'orders' ? 'text-[#8E2A2A] border-b-2 border-[#8E2A2A]' : 'text-gray-500'
            }`}
          >
            <ShoppingCart className="w-4 h-4" /> Orders ({orders.length})
          </button>

          <button
            onClick={() => setActiveTab('enquiries')}
            className={`pb-3 text-xs font-bold uppercase tracking-wider flex items-center gap-2 ${
              activeTab === 'enquiries' ? 'text-[#8E2A2A] border-b-2 border-[#8E2A2A]' : 'text-gray-500'
            }`}
          >
            <MessageSquare className="w-4 h-4" /> Job & Wholesale Leads ({enquiries.length})
          </button>

          <button
            onClick={() => setActiveTab('settings')}
            className={`pb-3 text-xs font-bold uppercase tracking-wider flex items-center gap-2 ${
              activeTab === 'settings' ? 'text-[#8E2A2A] border-b-2 border-[#8E2A2A]' : 'text-gray-500'
            }`}
          >
            <Settings className="w-4 h-4" /> Store Config (WhatsApp/Address)
          </button>
        </div>

        {/* TAB 1: PRODUCTS MANAGER */}
        {activeTab === 'products' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="font-serif text-2xl font-bold">Catalog Inventory</h2>
              <button
                onClick={handleOpenNewProduct}
                className="bg-[#8E2A2A] hover:bg-[#722020] text-white px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow"
              >
                <Plus className="w-4 h-4" /> Add New Product
              </button>
            </div>

            <div className="bg-white rounded-3xl border border-[#E6DDD0] overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#FAF6F0] text-[#8E2A2A] uppercase font-bold border-b border-[#E6DDD0]">
                    <tr>
                      <th className="p-4">Image & Product</th>
                      <th className="p-4">Category & Craft</th>
                      <th className="p-4">Price</th>
                      <th className="p-4">Stock</th>
                      <th className="p-4">Badges</th>
                      <th className="p-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#F0E8DD]">
                    {products.map((p) => (
                      <tr key={p.id} className="hover:bg-[#FAF6F0]/50 transition-colors">
                        <td className="p-4 flex items-center gap-3">
                          <img src={p.images[0]} alt="" className="w-12 h-14 object-cover rounded-lg bg-gray-100" />
                          <div>
                            <span className="font-serif font-bold text-sm block">{p.name}</span>
                            <span className="text-[10px] text-gray-500">{p.fabric}</span>
                          </div>
                        </td>
                        <td className="p-4 font-semibold">
                          <span className="block text-[#1F1C1B]">{p.category}</span>
                          <span className="text-[10px] text-[#8E2A2A]">{p.craft}</span>
                        </td>
                        <td className="p-4 font-bold text-[#8E2A2A]">
                          ₹{(p.salePrice || p.price).toLocaleString('en-IN')}
                        </td>
                        <td className="p-4 font-semibold">{p.stock} pcs</td>
                        <td className="p-4">
                          {p.featured && <span className="bg-amber-100 text-amber-800 text-[9px] font-bold px-2 py-0.5 rounded mr-1">Featured</span>}
                          {p.bestSeller && <span className="bg-red-100 text-red-800 text-[9px] font-bold px-2 py-0.5 rounded">Bestseller</span>}
                        </td>
                        <td className="p-4 text-right space-x-2">
                          <button
                            onClick={() => handleOpenEditProduct(p)}
                            className="p-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg"
                            title="Edit"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => deleteProduct(p.id)}
                            className="p-1.5 bg-red-100 hover:bg-red-200 text-red-700 rounded-lg"
                            title="Delete"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: ORDERS MANAGER */}
        {activeTab === 'orders' && (
          <div className="space-y-6">
            <h2 className="font-serif text-2xl font-bold">Customer Orders ({orders.length})</h2>

            {orders.length === 0 ? (
              <div className="bg-white p-12 rounded-3xl text-center border border-[#E6DDD0]">
                <p className="text-xs text-gray-500">No orders placed yet.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {orders.map((ord) => (
                  <div key={ord.id} className="bg-white p-6 rounded-3xl border border-[#E6DDD0] shadow-sm space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#F0E8DD] pb-3 text-xs gap-2">
                      <div>
                        <span className="font-bold text-sm text-[#8E2A2A]">{ord.orderNumber}</span>
                        <span className="text-gray-500 block">{ord.createdAt}</span>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="font-bold text-sm">₹{ord.totalAmount.toLocaleString('en-IN')}</span>
                        <select
                          value={ord.orderStatus}
                          onChange={(e) => updateOrderStatus(ord.id, e.target.value as any)}
                          className="bg-[#FAF6F0] border border-[#D5C9B8] px-3 py-1 rounded-xl text-xs font-bold text-[#8E2A2A]"
                        >
                          <option value="Processing">Processing</option>
                          <option value="Dispatched">Dispatched</option>
                          <option value="Delivered">Delivered</option>
                          <option value="Cancelled">Cancelled</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                      <div>
                        <strong className="block text-gray-700">Customer Details:</strong>
                        <span>{ord.customer.name} ({ord.customer.phone})</span><br />
                        <span>{ord.customer.address}, {ord.customer.city} - {ord.customer.pinCode}</span>
                      </div>
                      <div>
                        <strong className="block text-gray-700">Payment Info:</strong>
                        <span>Method: {ord.paymentMethod} ({ord.paymentStatus})</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 3: ENQUIRIES MANAGER */}
        {activeTab === 'enquiries' && (
          <div className="space-y-6">
            <h2 className="font-serif text-2xl font-bold">Custom Work & Wholesale Leads ({enquiries.length})</h2>

            {enquiries.length === 0 ? (
              <div className="bg-white p-12 rounded-3xl text-center border border-[#E6DDD0]">
                <p className="text-xs text-gray-500">No leads submitted yet.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {enquiries.map((enq) => (
                  <div key={enq.id} className="bg-white p-6 rounded-3xl border border-[#E6DDD0] shadow-sm space-y-3 text-xs">
                    <div className="flex items-center justify-between border-b border-[#F0E8DD] pb-2">
                      <span className="font-bold text-[#8E2A2A] uppercase tracking-widest">{enq.type} Enquiry</span>
                      <span className="text-gray-400">{enq.createdAt}</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <div><strong>Name:</strong> {enq.name} ({enq.phone})</div>
                      <div><strong>Email:</strong> {enq.email || 'N/A'}</div>
                      {enq.businessName && <div><strong>Business:</strong> {enq.businessName}</div>}
                      {enq.workType && <div><strong>Work Type:</strong> {enq.workType}</div>}
                    </div>

                    <p className="p-3 bg-[#FAF6F0] rounded-xl text-gray-700 italic border border-[#E6DDD0]">
                      "{enq.message}"
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 4: STORE CONFIG SETTINGS */}
        {activeTab === 'settings' && (
          <div className="bg-white p-8 rounded-3xl border border-[#E6DDD0] shadow-xl max-w-3xl mx-auto space-y-6">
            <div>
              <h2 className="font-serif text-2xl font-bold text-[#1F1C1B]">
                Configure Store & Contact Numbers
              </h2>
              <p className="text-xs text-gray-500 mt-1">
                Update phone numbers, WhatsApp credentials, Instagram handle, and address without code edits.
              </p>
            </div>

            {settingsSaved && (
              <div className="p-4 bg-emerald-100 text-emerald-800 rounded-xl text-xs font-bold flex items-center gap-2">
                <Check className="w-4 h-4" /> Settings updated successfully!
              </div>
            )}

            <form onSubmit={handleSaveSettings} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-[#1F1C1B] mb-1">WhatsApp Number (Digits only with country code) *</label>
                  <input
                    type="text"
                    required
                    value={settingsForm.whatsappNumber}
                    onChange={(e) => setSettingsForm({ ...settingsForm, whatsappNumber: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#FAF6F0] border border-[#D5C9B8] rounded-xl text-xs"
                  />
                </div>

                <div>
                  <label className="block font-bold text-[#1F1C1B] mb-1">Display Phone Number *</label>
                  <input
                    type="text"
                    required
                    value={settingsForm.phone}
                    onChange={(e) => setSettingsForm({ ...settingsForm, phone: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#FAF6F0] border border-[#D5C9B8] rounded-xl text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-[#1F1C1B] mb-1">Instagram Handle *</label>
                  <input
                    type="text"
                    required
                    value={settingsForm.instagramHandle}
                    onChange={(e) => setSettingsForm({ ...settingsForm, instagramHandle: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#FAF6F0] border border-[#D5C9B8] rounded-xl text-xs"
                  />
                </div>

                <div>
                  <label className="block font-bold text-[#1F1C1B] mb-1">Contact Email *</label>
                  <input
                    type="email"
                    required
                    value={settingsForm.email || ''}
                    onChange={(e) => setSettingsForm({ ...settingsForm, email: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#FAF6F0] border border-[#D5C9B8] rounded-xl text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-[#1F1C1B] mb-1">Full Workshop Address *</label>
                <textarea
                  rows={2}
                  required
                  value={settingsForm.address}
                  onChange={(e) => setSettingsForm({ ...settingsForm, address: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#FAF6F0] border border-[#D5C9B8] rounded-xl text-xs"
                ></textarea>
              </div>

              <div>
                <label className="block font-bold text-[#1F1C1B] mb-1">Operating Hours *</label>
                <input
                  type="text"
                  required
                  value={settingsForm.businessHours}
                  onChange={(e) => setSettingsForm({ ...settingsForm, businessHours: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#FAF6F0] border border-[#D5C9B8] rounded-xl text-xs"
                />
              </div>

              <div>
                <label className="block font-bold text-[#1F1C1B] mb-1">Top Announcement Banner Text</label>
                <input
                  type="text"
                  value={settingsForm.announcementText}
                  onChange={(e) => setSettingsForm({ ...settingsForm, announcementText: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#FAF6F0] border border-[#D5C9B8] rounded-xl text-xs"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#8E2A2A] hover:bg-[#722020] text-white py-3.5 rounded-xl font-bold uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg"
              >
                <Save className="w-4 h-4" /> Save Store Settings
              </button>
            </form>
          </div>
        )}

      </div>

      {/* Product Add/Edit Modal */}
      {isProductModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#FAF6F0] rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl border border-[#E6DDD0] my-8">
            <h3 className="font-serif text-2xl font-bold text-[#1F1C1B] mb-4">
              {editingProduct ? 'Edit Product' : 'Add New Product'}
            </h3>

            <form onSubmit={handleSaveProduct} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold mb-1">Product Name *</label>
                <input
                  type="text"
                  required
                  value={productForm.name}
                  onChange={(e) => setProductForm({ ...productForm, name: e.target.value })}
                  className="w-full px-4 py-2 bg-white border border-[#D5C9B8] rounded-xl"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold mb-1">Price (₹) *</label>
                  <input
                    type="number"
                    required
                    value={productForm.price}
                    onChange={(e) => setProductForm({ ...productForm, price: Number(e.target.value) })}
                    className="w-full px-4 py-2 bg-white border border-[#D5C9B8] rounded-xl"
                  />
                </div>
                <div>
                  <label className="block font-bold mb-1">Discount Price (₹)</label>
                  <input
                    type="number"
                    value={productForm.salePrice}
                    onChange={(e) => setProductForm({ ...productForm, salePrice: Number(e.target.value) })}
                    className="w-full px-4 py-2 bg-white border border-[#D5C9B8] rounded-xl"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold mb-1">Category *</label>
                  <select
                    value={productForm.category}
                    onChange={(e) => setProductForm({ ...productForm, category: e.target.value as any })}
                    className="w-full px-4 py-2 bg-white border border-[#D5C9B8] rounded-xl"
                  >
                    <option value="Kurtis">Kurtis</option>
                    <option value="Sarees">Sarees</option>
                    <option value="Fabrics">Fabrics</option>
                    <option value="Dupattas">Dupattas</option>
                    <option value="Ready-to-Wear">Ready-to-Wear</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold mb-1">Craft Technique *</label>
                  <select
                    value={productForm.craft}
                    onChange={(e) => setProductForm({ ...productForm, craft: e.target.value as any })}
                    className="w-full px-4 py-2 bg-white border border-[#D5C9B8] rounded-xl"
                  >
                    <option value="Block Printing">Block Printing</option>
                    <option value="Hand Painting">Hand Painting</option>
                    <option value="Hand Wax">Hand Wax</option>
                    <option value="Kalamkari">Kalamkari</option>
                    <option value="Dyeing & Texturing">Dyeing & Texturing</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold mb-1">Fabric Type *</label>
                  <input
                    type="text"
                    required
                    value={productForm.fabric}
                    onChange={(e) => setProductForm({ ...productForm, fabric: e.target.value })}
                    className="w-full px-4 py-2 bg-white border border-[#D5C9B8] rounded-xl"
                  />
                </div>

                <div>
                  <label className="block font-bold mb-1">Stock Quantity *</label>
                  <input
                    type="number"
                    required
                    value={productForm.stock}
                    onChange={(e) => setProductForm({ ...productForm, stock: Number(e.target.value) })}
                    className="w-full px-4 py-2 bg-white border border-[#D5C9B8] rounded-xl"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold mb-1">Image URL *</label>
                <input
                  type="text"
                  required
                  value={productForm.image}
                  onChange={(e) => setProductForm({ ...productForm, image: e.target.value })}
                  className="w-full px-4 py-2 bg-white border border-[#D5C9B8] rounded-xl"
                />
              </div>

              <div>
                <label className="block font-bold mb-1">Description *</label>
                <textarea
                  rows={3}
                  required
                  value={productForm.description}
                  onChange={(e) => setProductForm({ ...productForm, description: e.target.value })}
                  className="w-full px-4 py-2 bg-white border border-[#D5C9B8] rounded-xl"
                ></textarea>
              </div>

              <div className="flex gap-4 font-bold pt-2">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={productForm.featured}
                    onChange={(e) => setProductForm({ ...productForm, featured: e.target.checked })}
                  /> Featured
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={productForm.bestSeller}
                    onChange={(e) => setProductForm({ ...productForm, bestSeller: e.target.checked })}
                  /> Bestseller
                </label>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setIsProductModalOpen(false)}
                  className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-xl font-bold uppercase"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-[#8E2A2A] text-white py-3 rounded-xl font-bold uppercase shadow"
                >
                  Save Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
