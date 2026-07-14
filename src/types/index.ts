export type MenuCategoryId = "coffee" | "tea" | "desserts" | "food" | "cold";

export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price: number;
  image?: string;
  signature?: boolean;
}

export interface MenuCategory {
  id: MenuCategoryId;
  label: string;
  icon: string;
  items: MenuItem[];
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  span?: "tall" | "wide" | "normal";
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  quote: string;
  rating: number;
}

export interface ReservationFormData {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
}
