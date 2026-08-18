# 🌸 Bahari Block & Hand Painting Unit — Premium E-Commerce Platform

> **"Beautifying Textiles Since 2007"** • Kolkata, West Bengal, India  
> Official Instagram Reference: [@bahari_block_and_hand_painting](https://instagram.com/bahari_block_and_hand_painting)

A complete, production-ready, highly responsive e-commerce web application built for **Bahari Block & Hand Painting Unit**, a traditional Indian textile and handcraft unit based in Mukundapur, Kolkata.

The platform transforms Bahari's authentic Indian heritage into a contemporary editorial storefront celebrating handcrafted wood block printing, freehand Kalamkari brushwork, hand-wax batik resist, vegetable dyeing, texturing, ready-to-wear kurtis, sarees, custom job work, and wholesale orders.

---

## 🎨 Visual Identity & Design System

- **Traditional Color Palette**: Warm Ivory (`#FAF6F0`), Terracotta Crimson (`#8E2A2A`), Deep Charcoal (`#1F1C1B`), Warm Gold (`#C89B54`), Muted Olive (`#485C4B`).
- **Typography**: `Cormorant Garamond` (Heritage Indian editorial serif) & `Plus Jakarta Sans` (Modern UI sans-serif).
- **Brand Emblem**: Authentic Bengali & English emblem (`বাহারি Bahari`).

---

## ✨ Features

### 🛒 E-Commerce & Customer Storefront
- **Editorial Hero**: Headline *"Where Every Block Tells a Story."* with quick CTA navigation.
- **Brand Heritage Intro**: Visual introduction to Bahari's Kolkata workshop since 2007.
- **Shop By Craft**: 6 core craft categories (*Block Printing, Hand Painting, Hand Wax Batik, Kalamkari, Dyeing & Texturing, Custom / Job Work*).
- **Craft Process Timeline**: Behind-the-scenes 6-stage workshop flow (*Fabric → Block Carving → Dye Prep → Stamping → Wax Batik Bath → Sun Curing*).
- **Interactive Shop (`/shop`)**:
  - Filter by Category, Craft Technique, and Price Range slider.
  - Live keyword search bar and multi-criteria sorting (*Featured, Newest, Price Low-High, Price High-Low, Bestselling*).
  - 4-column desktop / 2-column mobile responsive grid.
- **Product Detail View**:
  - Image gallery with zoom preview.
  - Variant selection (Size, Colour, Fabric), pricing, and stock status.
  - Direct CTAs: *"Add to Cart"*, *"Buy Now"*, and *"Ask about this product on WhatsApp"* with pre-filled enquiry text.
  - Tabs for Specifications, Craft Story, and *"Why Handmade Looks Different"* (explaining natural block print variations).
- **Custom / Job Work Portal (`/custom-work`)**:
  - Lead generation form for customer-supplied fabrics with reference design image uploader.
  - Direct WhatsApp consultation CTA.
- **Wholesale B2B Portal (`/wholesale`)**:
  - Dedicated bulk order enquiry form for boutiques, fashion labels, and corporate clients.
- **Our Story (`/our-story`)**:
  - Timeline detailing Kolkata workshop milestones from 2007 to present.
- **Contact Page (`/contact`)**:
  - Address in Mukundapur, Kolkata, interactive Google Maps location, and contact inquiry tabs.
- **Cart & Checkout (`/checkout`)**:
  - Slide-out cart drawer with free shipping progress bar (Threshold: ₹2,999) and cross-sell suggestions.
  - Checkout form with Indian PIN code lookup, payment gateway selector (UPI, Razorpay, COD), and printable order receipt modal.

### ⚙️ Admin Management Panel (`/admin`)
- **Product Catalog Management**: Add, edit, delete products, toggle featured/bestseller badges, set stock and prices.
- **Order Management**: Track incoming customer orders and update status (*Processing, Dispatched, Delivered, Cancelled*).
- **Leads Manager**: Review incoming custom job work and wholesale inquiries.
- **Store Configuration**: Edit WhatsApp phone number, display phone, Instagram handle, address, business hours, and top announcement text in real-time.

---

## 🛠️ Technology Stack

- **Core**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, CSS Custom Properties
- **Icons**: Lucide React Icons & Custom SVG Emblem
- **State Management**: React Context API + LocalStorage state persistence

---

## 🚀 Local Development Setup

### 1. Clone the Repository
```bash
git clone https://github.com/YOUR_USERNAME/bahari-block-hand-painting.git
cd bahari-block-hand-painting
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for Production
```bash
npm run build
```

---

## 📍 Business Location

**Bahari Block & Hand Painting Unit**  
16A Vivekananda Park, 2nd Dhal Road, Ajoy Nagar, Mukundapur, Kolkata, West Bengal 700099  
Instagram: [@bahari_block_and_hand_painting](https://instagram.com/bahari_block_and_hand_painting)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
