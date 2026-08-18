import React from 'react';
import { StoreProvider, useStore } from './context/StoreContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { WhatsAppButton } from './components/common/WhatsAppButton';
import { QuickViewModal } from './components/common/QuickViewModal';
import { CartDrawer } from './components/cart/CartDrawer';

// Views
import { Hero } from './components/home/Hero';
import { BrandIntro } from './components/home/BrandIntro';
import { ShopByCraft } from './components/home/ShopByCraft';
import { CraftProcess } from './components/home/CraftProcess';
import { FeaturedProducts } from './components/home/FeaturedProducts';
import { InstagramGallery } from './components/home/InstagramGallery';
import { TrustBadges } from './components/home/TrustBadges';

import { ShopPage } from './components/shop/ShopPage';
import { ProductDetailPage } from './components/product/ProductDetailPage';
import { CustomWorkPage } from './components/customWork/CustomWorkPage';
import { WholesalePage } from './components/wholesale/WholesalePage';
import { OurStoryPage } from './components/story/OurStoryPage';
import { ContactPage } from './components/contact/ContactPage';
import { CheckoutPage } from './components/checkout/CheckoutPage';
import { AdminPanel } from './components/admin/AdminPanel';

const MainContent: React.FC = () => {
  const { activeView } = useStore();

  return (
    <main className="flex-1">
      {activeView === 'home' && (
        <>
          <Hero />
          <BrandIntro />
          <ShopByCraft />
          <CraftProcess />
          <FeaturedProducts />
          <InstagramGallery />
          <TrustBadges />
        </>
      )}

      {activeView === 'shop' && <ShopPage />}
      {activeView === 'product-detail' && <ProductDetailPage />}
      {activeView === 'custom-work' && <CustomWorkPage />}
      {activeView === 'wholesale' && <WholesalePage />}
      {activeView === 'our-story' && <OurStoryPage />}
      {activeView === 'contact' && <ContactPage />}
      {activeView === 'checkout' && <CheckoutPage />}
      {activeView === 'admin' && <AdminPanel />}
    </main>
  );
};

export function App() {
  return (
    <StoreProvider>
      <div className="min-h-screen flex flex-col bg-[#FAF6F0] font-sans selection:bg-[#8E2A2A] selection:text-white">
        <Navbar />
        <MainContent />
        <Footer />
        
        {/* Overlay Modals & Drawers */}
        <QuickViewModal />
        <CartDrawer />
        <WhatsAppButton />
      </div>
    </StoreProvider>
  );
}

export default App;
