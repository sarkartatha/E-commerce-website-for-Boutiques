import React, { useState, useMemo } from 'react';
import { useStore } from '../../context/StoreContext';
import { ProductCard } from '../home/FeaturedProducts';
import { Filter, SlidersHorizontal, Search, RotateCcw, X } from 'lucide-react';

export const ShopPage: React.FC = () => {
  const {
    products,
    addToCart,
    toggleWishlist,
    isInWishlist,
    setQuickViewProduct,
    navigateTo,
    searchQuery,
    setSearchQuery,
    getWhatsAppLink
  } = useStore();

  // Filter States
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedCraft, setSelectedCraft] = useState<string>('All');
  const [priceMax, setPriceMax] = useState<number>(6000);
  const [sortBy, setSortBy] = useState<'featured' | 'newest' | 'price-low' | 'price-high' | 'bestselling'>('featured');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Extract unique options from products
  const categories = useMemo(() => ['All', 'Kurtis', 'Sarees', 'Fabrics', 'Dupattas', 'Ready-to-Wear'], []);
  const crafts = useMemo(() => ['All', 'Block Printing', 'Hand Painting', 'Kalamkari', 'Dyeing & Texturing'], []);

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Search Filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesDesc = product.description.toLowerCase().includes(query);
        const matchesCraft = product.craft.toLowerCase().includes(query);
        const matchesFabric = product.fabric.toLowerCase().includes(query);
        if (!matchesName && !matchesDesc && !matchesCraft && !matchesFabric) return false;
      }

      // Category Filter
      if (selectedCategory !== 'All' && product.category !== selectedCategory) return false;

      // Craft Filter
      if (selectedCraft !== 'All' && product.craft !== selectedCraft) return false;

      // Price Filter
      const effectivePrice = product.salePrice || product.price;
      if (effectivePrice > priceMax) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'newest') {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      }
      if (sortBy === 'price-low') {
        return (a.salePrice || a.price) - (b.salePrice || b.price);
      }
      if (sortBy === 'price-high') {
        return (b.salePrice || b.price) - (a.salePrice || a.price);
      }
      if (sortBy === 'bestselling') {
        return (b.bestSeller ? 1 : 0) - (a.bestSeller ? 1 : 0);
      }
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [products, searchQuery, selectedCategory, selectedCraft, priceMax, sortBy]);

  const resetFilters = () => {
    setSelectedCategory('All');
    setSelectedCraft('All');
    setPriceMax(6000);
    setSearchQuery('');
    setSortBy('featured');
  };

  return (
    <div className="bg-[#FAF6F0] min-h-screen py-10 px-4 sm:px-6 lg:px-8 text-[#1F1C1B]">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Page Banner Header */}
        <div className="bg-[#1F1C1B] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-[radial-gradient(#C89B54_1px,transparent_1px)] [background-size:24px_24px] opacity-15"></div>
          <div className="relative z-10 max-w-2xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C89B54]">
              Authentic Kolkata Storefront
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
              Handcrafted Textiles & Ethnic Wear
            </h1>
            <p className="text-xs sm:text-sm text-[#E6DDD0] leading-relaxed">
              Explore our complete collection of hand block prints, Kalamkari brushwork, batik wax silks, kurtis, sarees, and custom unstitched fabrics.
            </p>
          </div>
        </div>

        {/* Search & Mobile Filter Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-[#E6DDD0] shadow-sm">
          {/* Live Search Bar */}
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search products by name, craft, or fabric..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-[#FAF6F0] border border-[#D5C9B8] rounded-xl text-xs text-[#1F1C1B] focus:outline-none focus:border-[#8E2A2A]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
            {/* Mobile Filter Trigger */}
            <button
              onClick={() => setMobileFilterOpen(true)}
              className="lg:hidden bg-[#FAF6F0] text-[#1F1C1B] border border-[#D5C9B8] px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2"
            >
              <Filter className="w-4 h-4 text-[#8E2A2A]" /> Filters
            </button>

            {/* Sort Selector */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-[#6E645A] hidden sm:inline">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-[#FAF6F0] border border-[#D5C9B8] px-3 py-2 rounded-xl text-xs font-bold text-[#1F1C1B] focus:outline-none focus:border-[#8E2A2A]"
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest Arrivals</option>
                <option value="bestselling">Best Selling</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Main Content Layout: Sidebar + Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Desktop Filter Sidebar */}
          <aside className="hidden lg:block space-y-6 bg-white p-6 rounded-2xl border border-[#E6DDD0] shadow-sm h-fit sticky top-28">
            <div className="flex items-center justify-between border-b border-[#F0E8DD] pb-4">
              <div className="flex items-center gap-2 font-serif font-bold text-lg text-[#1F1C1B]">
                <SlidersHorizontal className="w-4 h-4 text-[#8E2A2A]" />
                <span>Filter Store</span>
              </div>
              <button
                onClick={resetFilters}
                className="text-[11px] text-[#8E2A2A] hover:underline flex items-center gap-1 font-semibold"
              >
                <RotateCcw className="w-3 h-3" /> Reset
              </button>
            </div>

            {/* Category Filter */}
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#8E2A2A]">
                Product Category
              </label>
              <div className="space-y-1">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                      selectedCategory === cat
                        ? 'bg-[#8E2A2A] text-white font-bold'
                        : 'text-[#5E564E] hover:bg-[#FAF6F0] hover:text-[#1F1C1B]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Craft Technique Filter */}
            <div className="space-y-2 pt-4 border-t border-[#F0E8DD]">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#8E2A2A]">
                Craft Technique
              </label>
              <div className="space-y-1">
                {crafts.map((cr) => (
                  <button
                    key={cr}
                    onClick={() => setSelectedCraft(cr)}
                    className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                      selectedCraft === cr
                        ? 'bg-[#8E2A2A] text-white font-bold'
                        : 'text-[#5E564E] hover:bg-[#FAF6F0] hover:text-[#1F1C1B]'
                    }`}
                  >
                    {cr}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div className="space-y-3 pt-4 border-t border-[#F0E8DD]">
              <div className="flex items-center justify-between text-xs font-bold">
                <span className="uppercase tracking-wider text-[#8E2A2A]">Max Price</span>
                <span className="text-[#8E2A2A]">₹{priceMax.toLocaleString('en-IN')}</span>
              </div>
              <input
                type="range"
                min={500}
                max={6000}
                step={250}
                value={priceMax}
                onChange={(e) => setPriceMax(Number(e.target.value))}
                className="w-full accent-[#8E2A2A]"
              />
            </div>
          </aside>

          {/* Product Grid Area (4 cols desktop, 2 cols mobile) */}
          <main className="lg:col-span-3 space-y-6">
            <div className="flex items-center justify-between text-xs text-[#6E645A]">
              <span>Showing <strong>{filteredProducts.length}</strong> handcrafted items</span>
              {selectedCategory !== 'All' && (
                <span className="bg-[#8E2A2A]/10 text-[#8E2A2A] px-2.5 py-0.5 rounded-full font-semibold">
                  Category: {selectedCategory}
                </span>
              )}
            </div>

            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-2xl p-12 text-center border border-[#E6DDD0] space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#FAF6F0] text-[#8E2A2A] flex items-center justify-center mx-auto">
                  <Search className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-xl font-bold">No products match your filters</h3>
                <p className="text-xs text-[#6E645A]">Try resetting your filter parameters or search term.</p>
                <button
                  onClick={resetFilters}
                  className="bg-[#8E2A2A] text-white px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-[#722020] transition-colors"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    addToCart={addToCart}
                    toggleWishlist={toggleWishlist}
                    isInWishlist={isInWishlist}
                    setQuickViewProduct={setQuickViewProduct}
                    navigateTo={navigateTo}
                    getWhatsAppLink={getWhatsAppLink}
                  />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Mobile Sidebar Filter Drawer */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-end">
          <div className="bg-[#FAF6F0] w-4/5 max-w-xs h-full p-6 overflow-y-auto space-y-6 shadow-2xl flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#E6DDD0]">
                <h3 className="font-serif font-bold text-lg">Filter Store</h3>
                <button onClick={() => setMobileFilterOpen(false)} className="p-1">
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Category Filter */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#8E2A2A]">
                  Category
                </label>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => { setSelectedCategory(cat); setMobileFilterOpen(false); }}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium ${
                      selectedCategory === cat ? 'bg-[#8E2A2A] text-white font-bold' : 'bg-white text-[#1F1C1B]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Craft Filter */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#8E2A2A]">
                  Craft Technique
                </label>
                {crafts.map((cr) => (
                  <button
                    key={cr}
                    onClick={() => { setSelectedCraft(cr); setMobileFilterOpen(false); }}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium ${
                      selectedCraft === cr ? 'bg-[#8E2A2A] text-white font-bold' : 'bg-white text-[#1F1C1B]'
                    }`}
                  >
                    {cr}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => { resetFilters(); setMobileFilterOpen(false); }}
              className="w-full bg-[#1F1C1B] text-white py-3 rounded-xl text-xs font-bold uppercase tracking-wider"
            >
              Reset All Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
