// types.ts (Optional: good for organization)
export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

// data.ts
export const products: Product[] = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack",
    price: 109.95,
    description: "Perfect pack for everyday use.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: { rate: 3.9, count: 120 }
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts",
    price: 22.3,
    description: "Slim fit, style for everyday wear.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    rating: { rate: 4.1, count: 259 }
  },
  {
    id: 3,
    title: "Organic Cotton White T-Shirt",
    price: 24.99,
    description: "Breathable, high-quality organic cotton tee.",
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500&q=80",
    rating: { rate: 4.2, count: 1100 }
  },
  {
    id: 4,
    title: "Mechanical Gaming Keyboard",
    price: 120.00,
    description: "RGB backlit keys with blue switches for tactile feedback.",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500&q=80",
    rating: { rate: 4.7, count: 890 }
  },
  {
    id: 5,
    title: "Ceramic Matte Coffee Mug",
    price: 15.50,
    description: "Dishwasher safe, 12oz ceramic mug in charcoal gray.",
    category: "Home & Kitchen",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=500&q=80",
    rating: { rate: 4.9, count: 320 }
  },
  {
    id: 6,
    title: "Professional DSLR Camera",
    price: 1450.00,
    description: "Full-frame sensor with 4K video recording capabilities.",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&q=80",
    rating: { rate: 4.9, count: 120 }
  },
  {
    id: 7,
    title: "Waterproof Hiking Boots",
    price: 135.00,
    description: "Durable boots designed for tough terrains.",
    category: "Footwear",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
    rating: { rate: 4.4, count: 650 }
  },
  {
    id: 8,
    title: "Stainless Steel Water Bottle",
    price: 22.00,
    description: "Vacuum insulated, keeps drinks cold for 24 hours.",
    category: "Outdoors",
    image: "https://images.unsplash.com/photo-1602143393494-1a2840a2f903?w=500&q=80",
    rating: { rate: 4.6, count: 2100 }
  },
  {
    id: 9,
    title: "Scented Soy Wax Candle",
    price: 18.00,
    description: "Lavender and eucalyptus scented natural soy wax.",
    category: "Home & Kitchen",
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=500&q=80",
    rating: { rate: 4.3, count: 540 }
  },
  {
    id: 10,
    title: "Leather Laptop Sleeve",
    price: 45.00,
    description: "Sleek protection for 13-inch and 15-inch laptops.",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&q=80",
    rating: { rate: 4.5, count: 180 }
  },
  {
    id: 11,
    title: "Portable Bluetooth Speaker",
    price: 59.99,
    description: "Compact design with deep bass and IPX7 waterproof rating.",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1608156639585-b3a032ef9689?w=500&q=80",
    rating: { rate: 4.7, count: 1420 }
  },
  {
    id: 12,
    title: "Yoga Mat with Carrying Strap",
    price: 35.00,
    description: "Non-slip texture for better grip during exercise.",
    category: "Fitness",
    image: "https://images.unsplash.com/photo-1599447421416-3414500d18a5?w=500&q=80",
    rating: { rate: 4.6, count: 770 }
  },
  {
    id: 13,
    title: "Electric Drip Coffee Maker",
    price: 89.00,
    description: "Programmable coffee machine with thermal carafe.",
    category: "Home & Kitchen",
    image: "https://images.unsplash.com/photo-1520970014086-2208cf4f339b?w=500&q=80",
    rating: { rate: 4.4, count: 910 }
  },
  {
    id: 14,
    title: "Polarized Retro Sunglasses",
    price: 12.99,
    description: "Classic vintage style with UV400 protection.",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&q=80",
    rating: { rate: 4.1, count: 3200 }
  },
  {
    id: 15,
    title: "Hard-shell Travel Suitcase",
    price: 160.00,
    description: "Lightweight, 360-degree spinner wheels for easy travel.",
    category: "Travel",
    image: "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=500&q=80",
    rating: { rate: 4.8, count: 150 }
  }
];