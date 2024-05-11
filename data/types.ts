import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { StaticImageData } from "next/image";

export type Role = {
  role: string;
  nominees: Nominee[];
};

export type Nominee = {
  name: string;
  image: StaticImageData;
  preference: number;
  description: string;
};

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

export type Podcast = {
  name: string;
  description: string;
  href: string;
};

export type MembersByYear = {
  exec?: ExecMembersSection[];
  subcoms?: SubcomSection[];
};

export type ExecMembersSection = {
  sectionName: string;
  members: ExecMember[][];
};

export type ExecMember = {
  name: string;
  image: StaticImageData;
  description: string;
  role: string;
};

export type SubcomSection = {
  icons: IconDefinition[];
  name: string;
  description: string;
  members: string[];
};

export type Blog = {
  title: string;
  description: string;
  img: string;
  published: string;
  href: string;
};

export type Product = {
  id: number;
  name: string;
  images?: string[];
  price: number;
  size: string;
};
