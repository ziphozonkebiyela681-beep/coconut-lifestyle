export type MenuCategory = 'meals' | 'platters' | 'bottles' | 'mixers' | 'hubbly';

export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategory;
  price: number; // in South African Rand (ZAR)
  subtitle?: string;
  description?: string;
  serves?: string;
  bastingOptions?: string[];
  includes?: string;
  badge?: string;
}

export interface StarchOption {
  id: string;
  name: string;
  description: string;
}

export interface SideOption {
  id: string;
  name: string;
  description: string;
}

export interface OrderItem {
  id: string;
  menuItem: MenuItem;
  quantity: number;
  basting?: string;
  starch?: string;
  sides?: string[];
}

export interface GalleryPhoto {
  id: string;
  src: string;
  title: string;
  subtitle: string;
  tag: 'atmosphere' | 'lounge' | 'party' | 'bar' | 'features';
}

export interface VipBooth {
  id: string;
  name: string;
  capacity: string;
  minSpend: number;
  description: string;
  features: string[];
  image: string;
}
