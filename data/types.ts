import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { StaticImageData } from "next/legacy/image";

export interface Person {
  name: string;
  image: StaticImageData;
  description: string;
}

// === Nominations ===

export type Role = {
  role: string;
  nominees: Nominee[];
};

export interface Nominee extends Person {
  preference: number;
}

export interface NomineeData {
  data: Nominee;
}

// === Charity ===

export type Sponsor = {
  name: string;
  image: StaticImageData;
  link: string;
};

export type CharityEvent = {
  title: string;
  image: StaticImageData;
  description?: string;
  special?: string;
  link?: string;
  date?: string;
};

export interface CharityEventProps {
  event: CharityEvent;
}

// === Pubs ===

export type Podcast = {
  name: string;
  description: string;
  href: string;
};

export type Blog = {
  title: string;
  description: string;
  img: string;
  published: string;
  href: string;
};

// === Team ===

export type MembersByYear = {
  exec?: ExecMembersSection[];
  subcoms?: SubcomSection[];
};

export type ExecMembersSection = {
  sectionName: string;
  members: ExecMember[][];
};

export interface ExecMember extends Person {
  role: string;
}

export type SubcomSection = {
  icons: IconDefinition[];
  name: string;
  description: string;
  members: string[];
};

// === Merch (2023) ===

export type Product2023 = {
  id: number;
  name: string;
  images?: string[];
  price: number;
  size: string;
};

// === Merch (2024) ===

export enum ProductColour {
  UNKNOWN = "Unknown",
  BLACK = "Black",
  CREAM = "Cream",
  POWDER = "Powder",
  GREY = "Grey",
  PINE = "Pine",
  NAVY = "Navy",
}

export enum ProductSize {
  UNKNOWN = "Unknown",
  S = "S",
  M = "M",
  L = "L",
  XL = "XL",
}

// store of all product categories
export type Product = {
  name: string;
  description: string;
  price: Price;
  colours: ProductColour[];
  sizes: ProductSize[];
};

// store of all product variants returned from Stripe
// Use categoryName + colour + size as composite key
export type Variant = {
  productName: string;
  colour: ProductColour;
  size: ProductSize;
  price: Price;
  id: string;
  imageURLs: string[];
};

export type Price = {
  id: string;
  cents: number;
};

export type Cart = Map<string, number>;

export type CartItemWithDetail = {
  product: {
    id: string;
    name: string;
    images: string[];
  };
  price: Price;
  qty: number;
};

export const toProductColourMap: Map<string, ProductColour> = new Map([
  ["black", ProductColour.BLACK],
  ["cream", ProductColour.CREAM],
  ["powder", ProductColour.POWDER],
  ["grey", ProductColour.GREY],
  ["pine", ProductColour.PINE],
  ["navy", ProductColour.NAVY],
]);

export const toProductSizeMap: Map<string, ProductSize> = new Map([
  ["S", ProductSize.S],
  ["M", ProductSize.M],
  ["L", ProductSize.L],
  ["XL", ProductSize.XL],
]);
