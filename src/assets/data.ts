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

export const products: Product[] = [
  {
    id: 1,
    title: "Premium Wireless Headphones",
    price: 89.99,
    description: "High-quality sound with noise cancellation and 30-hour battery.",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
    rating: { rate: 4.7, count: 2340 }
  },
  {
    id: 2,
    title: "Stainless Steel Water Bottle",
    price: 34.99,
    description: "Keeps drinks cold for 24 hours, eco-friendly and durable.",
    category: "Outdoors",
    image: "https://images.unsplash.com/photo-1602143393494-1a2840a2f903?w=500&q=80",
    rating: { rate: 4.8, count: 1820 }
  },
  {
    id: 3,
    title: "Mechanical Gaming Keyboard",
    price: 129.99,
    description: "RGB backlit with tactile blue switches for fast response.",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1587829191301-dc798b83add3?w=500&q=80",
    rating: { rate: 4.6, count: 980 }
  },
  {
    id: 4,
    title: "Premium Leather Laptop Bag",
    price: 149.99,
    description: "Sleek, professional design fits 15-inch laptops with style.",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80",
    rating: { rate: 4.9, count: 540 }
  },
  {
    id: 5,
    title: "4K Webcam for Streaming",
    price: 159.99,
    description: "Crystal clear 4K video, auto-focus, built-in mic for professionals.",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&q=80",
    rating: { rate: 4.5, count: 620 }
  },
  {
    id: 6,
    title: "Portable Phone Stand",
    price: 24.99,
    description: "Adjustable aluminum stand for all devices, folds flat.",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=500&q=80",
    rating: { rate: 4.4, count: 1240 }
  },
  {
    id: 7,
    title: "USB-C Fast Charger",
    price: 39.99,
    description: "65W fast charging, compatible with laptops and phones.",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500&q=80",
    rating: { rate: 4.7, count: 2100 }
  },
  {
    id: 8,
    title: "Premium Mouse Pad",
    price: 29.99,
    description: "Extra large non-slip surface, perfect for gaming or work.",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&q=80",
    rating: { rate: 4.3, count: 580 }
  },
  {
    id: 9,
    title: "Wireless Phone Charger",
    price: 44.99,
    description: "Fast 15W charging pad with LED indicator light.",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1591290621749-8a18e4787e35?w=500&q=80",
    rating: { rate: 4.6, count: 1650 }
  },
  {
    id: 10,
    title: "Portable Bluetooth Speaker",
    price: 59.99,
    description: "Waterproof, 12-hour battery, crystal clear sound quality.",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80",
    rating: { rate: 4.8, count: 2890 }
  },
  {
    id: 11,
    title: "Premium USB Cable Set",
    price: 19.99,
    description: "Durable braided cables in 3 lengths, fast data transfer.",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1608149154379-111bc3268ba0?w=500&q=80",
    rating: { rate: 4.4, count: 920 }
  },
  {
    id: 12,
    title: "Adjustable Desk Lamp",
    price: 69.99,
    description: "LED lamp with touch control, USB charging port included.",
    category: "Home",
    image: "https://images.unsplash.com/photo-1565636192335-14f82f7ce628?w=500&q=80",
    rating: { rate: 4.7, count: 780 }
  },
  {
    id: 13,
    title: "Ergonomic Keyboard",
    price: 89.99,
    description: "Wired keyboard with ergonomic design to reduce wrist strain.",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1587829191301-dc798b83add3?w=500&q=80",
    rating: { rate: 4.5, count: 1040 }
  },
  {
    id: 14,
    title: "Smart Home Hub",
    price: 99.99,
    description: "Control all your smart devices from one central hub.",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80",
    rating: { rate: 4.6, count: 650 }
  },
  {
    id: 15,
    title: "Premium Screen Protector",
    price: 14.99,
    description: "Tempered glass protector for all phone sizes.",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=500&q=80",
    rating: { rate: 4.9, count: 3200 }
  }
];
