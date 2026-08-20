import type { Product, CraftCategoryInfo, StoreSettings } from '../types';

export const INITIAL_SETTINGS: StoreSettings = {
  brandName: 'Woven With Dream',
  ownerName: 'Karuna',
  tagline: 'Experience the timeless elegance of the saree',
  sinceYear: '2007',
  phone: '+91 62915 25876', // Editable via Admin Panel
  email: 'karuna.wovenwithdream@gmail.com',
  whatsappNumber: '916291525876', // Configurable via Admin Panel
  instagramHandle: 'woven_with_dream',
  address: '37A Jessore Road, 2nd Floor, Nagerbazar Bus Stand (Opposite Petrol Pump), Kolkata – 700074',
  bio: '✨Experience the timeless elegance of the saree, a symbol of Indian tradition and a celebration of feminine charm with Woven With Dream by Karuna.',
  avatarUrl: '/profile_picture.jpg',
  businessHours: 'Monday - Saturday: 10:00 AM - 7:30 PM (Sunday Closed)',
  announcementText: '✨ Experience the timeless elegance of the saree with Woven With Dream by Karuna | Wholesale & Custom Orders Available',
  heroHeading: 'Where Every Weave Tells a Dream.',
  heroSubtext: '✨ Experience the timeless elegance of the saree, a symbol of Indian tradition and a celebration of feminine charm with Woven With Dream by Karuna.',
  heroImage: 'https://images.unsplash.com/photo-1606744888344-49423b812d02?auto=format&fit=crop&q=80&w=1600'
};

export const CRAFT_CATEGORIES: CraftCategoryInfo[] = [
  {
    id: 'craft-block-print',
    name: 'Block Printing',
    tagline: 'Stamped with Character',
    description: 'Traditional wood-block motifs carefully carved and hand-stamped onto pure cotton and silk.',
    image: 'https://images.unsplash.com/photo-1606744888344-49423b812d02?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'craft-hand-paint',
    name: 'Hand Painting',
    tagline: 'Wearable Canvas Art',
    description: 'Intricate brushwork and delicate floral artistry painted by skilled Kolkata artisans directly onto fabric.',
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'craft-hand-wax',
    name: 'Hand Wax',
    tagline: 'Classic Batik Technique',
    description: 'Hot molten wax resist patterns created by hand, producing organic crackle textures and rich hues.',
    image: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'craft-kalamkari',
    name: 'Kalamkari',
    tagline: 'Pen of Tradition',
    description: 'Mythological and flora-inspired hand-painted freehand art rooted in ancient Indian textile traditions.',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'craft-dye-texture',
    name: 'Dyeing & Texturing',
    tagline: 'Rich Organic Hues',
    description: 'Vegetable dye baths, clamp texturing, tie-dye and crinkle finishing for soft, skin-friendly fabrics.',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'craft-custom-work',
    name: 'Custom / Job Work',
    tagline: 'Bespoke Textile Craft',
    description: 'Printing, dyeing, and hand painting on customer-supplied fabrics for personal orders or bulk boutique collections.',
    image: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&q=80&w=800'
  }
];

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'bahari-001',
    name: 'Tussar Silk Hand Block Printed Saree',
    slug: 'tussar-silk-hand-block-printed-saree',
    price: 4250,
    salePrice: 3890,
    images: [
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1606744888344-49423b812d02?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=1000'
    ],
    category: 'Sarees',
    craft: 'Block Printing',
    fabric: 'Pure Tussar Silk',
    colour: 'Earthy Terracotta & Indigo',
    availableColours: ['Terracotta', 'Indigo', 'Olive Green', 'Mustard Ochre'],
    sizes: ['Unstitched Saree with Blouse Piece (6.3m)'],
    stock: 12,
    description: 'Exquisite hand block-printed Tussar silk saree crafted with traditional wooden block motifs in Kolkata. Features a rich geometric pallu and delicate body motifs.',
    details: {
      fabric: '100% Pure Tussar Silk with Silk Mark',
      technique: 'Traditional Hand Wood-Block Printing',
      colour: 'Natural Indigo and Terracotta Mineral Dyes',
      washCare: 'Dry Clean Only. Avoid direct sunlight drying.',
      productionInfo: 'Hand-stamped in Nagerbazar, Kolkata studio.',
      origin: 'Kolkata, West Bengal, India'
    },
    craftStory: 'This piece carries the authentic character of hand block printing. Slight variations in colour density and block impressions are natural hallmarks of artisan craftsmanship, making every saree one-of-a-kind.',
    featured: true,
    bestSeller: true,
    handcrafted: true,
    createdAt: '2026-01-10'
  },
  {
    id: 'bahari-002',
    name: 'Hand-Painted Kalamkari Chanderi Kurti',
    slug: 'hand-painted-kalamkari-chanderi-kurti',
    price: 2450,
    salePrice: 2190,
    images: [
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=1000'
    ],
    category: 'Kurtis',
    craft: 'Kalamkari',
    fabric: 'Chanderi Silk Cotton',
    colour: 'Warm Cream & Maroon',
    availableColours: ['Warm Cream', 'Sage Green', 'Dusty Rose'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    stock: 18,
    description: 'Graceful A-line Chanderi silk kurti featuring hand-painted floral Kalamkari motifs along the neckline and sleeves.',
    details: {
      fabric: 'Chanderi Silk Cotton Blend with soft lining',
      technique: 'Freehand Kalamkari Brush Painting',
      colour: 'Natural Madder Maroon & Ochre Pigments',
      washCare: 'Gentle Hand Wash in Cold Water with Mild Shampoo',
      productionInfo: 'Painted with natural bamboo pen brushes by Kolkata artists.',
      origin: 'Kolkata, West Bengal, India'
    },
    craftStory: 'Kalamkari translates to "pen craft". Our master artisans paint each floral leaf and vine freehand. No two pieces are identical.',
    featured: true,
    newArrival: true,
    handcrafted: true,
    createdAt: '2026-02-01'
  },
  {
    id: 'bahari-003',
    name: 'Hand-Wax Batik Cotton Mulmul Fabric (per meter)',
    slug: 'hand-wax-batik-cotton-mulmul-fabric',
    price: 480,
    salePrice: 420,
    images: [
      'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&q=80&w=1000'
    ],
    category: 'Fabrics',
    craft: 'Hand Wax',
    fabric: '100% Cotton Mulmul',
    colour: 'Deep Indigo Crackle',
    availableColours: ['Deep Indigo', 'Terracotta Red', 'Forest Green'],
    sizes: ['1 Meter', '2.5 Meters', '5 Meters Bulk Length'],
    stock: 55,
    description: 'Ultra-soft Kolkata hand-wax batik mulmul cotton fabric sold per meter. Perfect for custom kurtis, dupattas, shirts, or home soft furnishings.',
    details: {
      fabric: '100s Count Premium Cotton Mulmul',
      technique: 'Hand Molten Wax Resist Batik Crackle',
      colour: 'Organic Cold Indigo Dip',
      washCare: 'Cold water wash separately for first two washes.',
      productionInfo: 'Wax cracked by hand before cold dyeing in Kolkata.',
      origin: 'Kolkata, West Bengal, India'
    },
    craftStory: 'The distinctive vein-like crackle texture is created when hot wax cools and is gently fractured by hand before dipping into organic dye vats.',
    featured: true,
    handcrafted: true,
    createdAt: '2026-01-15'
  },
  {
    id: 'bahari-004',
    name: 'Hand-Painted Floral Organza Silk Dupatta',
    slug: 'hand-painted-floral-organza-silk-dupatta',
    price: 1850,
    salePrice: 1650,
    images: [
      'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=1000'
    ],
    category: 'Dupattas',
    craft: 'Hand Painting',
    fabric: 'Sheer Pure Organza Silk',
    colour: 'Ivory with Lotus Pink',
    availableColours: ['Ivory Pink', 'Ivory Mint', 'Ivory Lavender'],
    sizes: ['Free Size (2.5m x 36")'],
    stock: 8,
    description: 'Ethereal organza silk dupatta painted with romantic Bengali lotus and vine motifs. Delicate gold metallic brush accents.',
    details: {
      fabric: '100% Sheer Organza Silk',
      technique: 'Artisan Brush Painting with Gold Dust Highlights',
      colour: 'Soft Pastel Pink, Leaf Green, Gold Dust',
      washCare: 'Dry Clean Only',
      productionInfo: 'Hand-painted stretch-frame execution in Kolkata studio.',
      origin: 'Kolkata, West Bengal, India'
    },
    craftStory: 'Hand-painted directly on stretched organza fabric using specialized water-fast textile pigments that retain the fabric crisp sheen.',
    featured: false,
    newArrival: true,
    bestSeller: true,
    handcrafted: true,
    createdAt: '2026-02-10'
  },
  {
    id: 'bahari-005',
    name: 'Ajrakh Motif Cotton Unstitched Suit Set',
    slug: 'ajrakh-motif-cotton-unstitched-suit-set',
    price: 2950,
    salePrice: 2690,
    images: [
      'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=1000'
    ],
    category: 'Ready-to-Wear',
    craft: 'Block Printing',
    fabric: 'Pure Modal Cotton',
    colour: 'Deep Crimson & Mineral Indigo',
    availableColours: ['Crimson Indigo', 'Teal Black', 'Rust Brown'],
    sizes: ['3-Piece Unstitched Set (Top 2.5m, Bottom 2.5m, Dupatta 2.4m)'],
    stock: 15,
    description: 'Complete 3-piece unstitched cotton suit set with traditional Ajrakh star motifs printed using wooden carved blocks.',
    details: {
      fabric: 'Premium Silky Modal Cotton',
      technique: 'Double-Sided Wood Block Stamping',
      colour: 'Harda, Iron Rust & Natural Indigo Dyes',
      washCare: 'Mild detergent hand wash.',
      productionInfo: 'Printed with precision symmetry by Bahari artisans.',
      origin: 'Kolkata, West Bengal, India'
    },
    craftStory: 'Ajrakh printing requires multi-stage resist printing and multiple natural dye dips to achieve its legendary depth of color.',
    featured: true,
    bestSeller: true,
    handcrafted: true,
    createdAt: '2026-01-20'
  },
  {
    id: 'bahari-006',
    name: 'Vegetable Dyed Kantha & Block Print Kurti',
    slug: 'vegetable-dyed-kantha-block-print-kurti',
    price: 2750,
    salePrice: 2490,
    images: [
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1606744888344-49423b812d02?auto=format&fit=crop&q=80&w=1000'
    ],
    category: 'Kurtis',
    craft: 'Dyeing & Texturing',
    fabric: 'Handloom Cotton Mul',
    colour: 'Muted Olive & Charcoal',
    availableColours: ['Muted Olive', 'Charcoal Grey', 'Ochre Gold'],
    sizes: ['M', 'L', 'XL', 'XXL'],
    stock: 10,
    description: 'Traditional Bengali handloom kurti combining vegetable block printing with subtle running Kantha stitch detailing along the placket.',
    details: {
      fabric: '100% Handloom Cotton',
      technique: 'Vegetable Dyeing + Wooden Block Stamp + Hand Kantha Stitch',
      colour: 'Pomegranate & Myrobalan Natural Dyes',
      washCare: 'Hand wash cold separately.',
      productionInfo: 'Crafted in collaboration with rural Bengal craftswomen.',
      origin: 'Kolkata, West Bengal, India'
    },
    craftStory: 'Kantha stitching is Bengal’s signature running stitch art, providing structural beauty and soft textured hand feel.',
    featured: false,
    newArrival: true,
    handcrafted: true,
    createdAt: '2026-02-12'
  }
];

export const CRAFT_PROCESS_STEPS = [
  {
    step: '01',
    title: 'Fabric Selection & Washing',
    description: 'We source unbleached natural cottons, Tussar silks, and Chanderi fabrics, pre-washing them to remove starches and natural impurities.',
    image: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&q=80&w=600'
  },
  {
    step: '02',
    title: 'Hand Block Carving & Design',
    description: 'Traditional Teak wood blocks are hand-carved with Bengali floral, geometric, and classical motifs by veteran master craftsmen.',
    image: 'https://images.unsplash.com/photo-1606744888344-49423b812d02?auto=format&fit=crop&q=80&w=600'
  },
  {
    step: '03',
    title: 'Natural Dye & Pigment Prep',
    description: 'Mineral pigments, indigo, madder root, and natural binders are mixed in clay and brass dye trays to exact ancestral color formulas.',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&q=80&w=600'
  },
  {
    step: '04',
    title: 'Artisan Precision Stamping / Painting',
    description: 'The artisan aligns each block stamp or fine brushstroke with steady hands onto stretched fabric, rhythmically building patterns.',
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=600'
  },
  {
    step: '05',
    title: 'Hand Wax Batik & Dye Baths',
    description: 'For wax batik and texturing, molten paraffin and beeswax are applied, cooled, fractured, and cold-dyed for signature organic crackle.',
    image: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=600'
  },
  {
    step: '06',
    title: 'Sun Curing & Final Washing',
    description: 'Finished textiles are dried under open sunlight in Kolkata, setting the colors naturally before final quality inspection.',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=600'
  }
];

export const INSTAGRAM_POSTS = [
  {
    id: 'ig-1',
    image: 'https://images.unsplash.com/photo-1606744888344-49423b812d02?auto=format&fit=crop&q=80&w=600',
    caption: 'Every block holds a story. Crafting timeless Tussar block prints in Nagerbazar, Kolkata. 🎨✨',
    likes: 248,
    type: 'Block Print'
  },
  {
    id: 'ig-2',
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=600',
    caption: 'Freehand Kalamkari brushwork in progress on organza silk. 🌿',
    likes: 412,
    type: 'Hand Painting'
  },
  {
    id: 'ig-3',
    image: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=600',
    caption: 'Hand wax batik crackle textures fresh out of the indigo dye bath! 💙',
    likes: 310,
    type: 'Hand Wax'
  },
  {
    id: 'ig-4',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=600',
    caption: 'New Kurti Collection alert! Handcrafted with love since 2007.',
    likes: 589,
    type: 'Kurti Collection'
  },
  {
    id: 'ig-5',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=600',
    caption: 'Happy Clients in our customized block-printed sarees. DM for job work & wholesale. 🛍️',
    likes: 195,
    type: 'Client Love'
  },
  {
    id: 'ig-6',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&q=80&w=600',
    caption: 'Vegetable dye texturing on pure cotton mulmul length. Workshop vibes in Kolkata.',
    likes: 376,
    type: 'Texturing Work'
  }
];

export const FAQS = [
  {
    question: 'Are all your products 100% handcrafted?',
    answer: 'Yes! Every item at Woven With Dream by Karuna is produced by hand using traditional block printing, freehand brush painting, hand-wax batik, or natural dyeing methods in our Nagerbazar, Kolkata studio.'
  },
  {
    question: 'Do you accept job work on customer-supplied fabrics?',
    answer: 'Absolutely. We regularly undertake job work for boutiques, designers, and retail clients who provide their own unstitched fabric rolls or garments for block printing, hand painting, batik wax, or custom dyeing.'
  },
  {
    question: 'How do I place a wholesale or bulk order?',
    answer: 'You can fill out our Wholesale Enquiry form on the website or message us directly on WhatsApp (+91 62915 25876). We provide competitive tier pricing for boutique owners, fashion labels, and exporters.'
  },
  {
    question: 'Why do hand block prints have minor color or impression variations?',
    answer: 'Unlike mass factory screen printing, hand block printing is done entirely by human hand. Micro-variations in dye intensity or block registration are proof of authentic craft and give each garment its unique soul and character.'
  },
  {
    question: 'What are your delivery timelines across India?',
    answer: 'Ready-to-ship retail products dispatch within 24–48 hours. Custom orders and job work timelines depend on quantity and technique, typically 5 to 10 business days.'
  }
];
