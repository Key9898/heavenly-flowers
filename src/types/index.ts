export type ProductCategory = 'bouquet' | 'arrangement' | 'single' | 'bundle' | 'subscription';
export type FlowerType = 'roses' | 'tulips' | 'lilies' | 'orchids' | 'sunflowers' | 'forget-me-not' | 'carnations' | 'daisies' | 'peonies' | 'mixed-bouquet';
export type ProductColor = 'red' | 'white' | 'pink' | 'yellow' | 'blue' | 'orange' | 'purple' | 'mixed-colors';
export type OccasionType = 'birthday' | 'anniversary' | 'wedding' | 'graduation' | 'valentines-day' | 'mothers-day' | 'fathers-day' | 'corporate' | 'congratulations' | 'apology' | 'just-because';

export interface Product {
  id: string;
  name: string;
  nameTh?: string;
  nameFr?: string;
  description: string;
  descriptionTh?: string;
  price: number;
  images: string[];
  category: ProductCategory;
  flowerType?: FlowerType;
  color?: ProductColor;
  occasion?: OccasionType;
  tags?: string[];
  inStock: boolean;
  featured?: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export type OrderStatus = 'pending' | 'confirmed' | 'preparing' | 'out_for_delivery' | 'delivered' | 'cancelled';
export type PaymentStatus = 'unpaid' | 'paid' | 'refunded' | 'failed';
export type PaymentMethod = 'credit_card' | 'promptpay' | 'bank_transfer' | 'cash';

export interface OrderItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export interface ShippingInfo {
  name: string;
  phone: string;
  address: string;
  district: string;
  province: string;
  postalCode: string;
  deliveryDate: string;
  deliveryTime: string;
}

export interface Order {
  id: string;
  orderNumber: string;
  userId: string;
  items: OrderItem[];
  subtotal: number;
  deliveryFee: number;
  total: number;
  status: OrderStatus;
  paymentStatus: PaymentStatus;
  paymentMethod?: PaymentMethod;
  shippingInfo: ShippingInfo;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

export type UserRole = 'customer' | 'admin';

export interface Address {
  label: 'home' | 'work' | 'other';
  name: string;
  phone: string;
  address: string;
  district: string;
  province: string;
  postalCode: string;
  isDefault: boolean;
}

export interface User {
  id: string;
  email: string;
  displayName?: string;
  phone?: string;
  photoURL?: string;
  role: UserRole;
  addresses?: Address[];
  favorites?: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface WorkshopSchedule {
  date: string;
  startTime: string;
  endTime: string;
  available: number;
  booked: number;
}

export interface Workshop {
  id: string;
  title: string;
  titleTh?: string;
  description: string;
  descriptionTh?: string;
  image: string;
  images?: string[];
  price: number;
  duration: number;
  maxParticipants: number;
  schedule: WorkshopSchedule[];
  instructor: string;
  location: string;
  requirements?: string[];
  includes?: string[];
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export type EventType = 'wedding' | 'corporate' | 'birthday' | 'anniversary' | 'sympathy' | 'other';

export interface PriceRange {
  min: number;
  max: number;
}

export interface Arrangement {
  id: string;
  title: string;
  titleTh?: string;
  description: string;
  descriptionTh?: string;
  images: string[];
  eventType: EventType;
  priceRange: PriceRange;
  features?: string[];
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Inspiration {
  id: string;
  title: string;
  titleTh?: string;
  slug: string;
  excerpt: string;
  excerptTh?: string;
  content: string;
  contentTh?: string;
  coverImage: string;
  images?: string[];
  author: string;
  tags?: string[];
  published: boolean;
  publishedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export type BookingStatus = 'pending' | 'confirmed' | 'completed' | 'cancelled';

export interface Booking {
  id: string;
  bookingNumber: string;
  userId: string;
  workshopId: string;
  scheduleDate: string;
  scheduleTime: string;
  participants: number;
  totalPrice: number;
  status: BookingStatus;
  paymentStatus: PaymentStatus;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  subtotal: number;
}
