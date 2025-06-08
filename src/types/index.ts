export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  reviewCount: number;
  image: string;
  images?: string[];
  category: string;
  brand: string;
  description: string;
  features: string[];
  inStock: boolean;
  seller: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  subcategories?: string[];
}