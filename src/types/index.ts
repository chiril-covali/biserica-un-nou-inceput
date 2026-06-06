/**
 * Core TypeScript interfaces
 */

export type ProjectCategory = 'portraits' | 'landscapes' | 'editorial' | 'architecture' | 'documentary';

export type AspectRatio = 'portrait' | 'landscape' | 'square';

export interface ProjectImage {
  id: string;
  src: string;
  alt: string;
  aspectRatio: AspectRatio;
  caption?: string;
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  year: string;
  coverImage: string;
  images: ProjectImage[];
  description: string;
  client?: string;
  camera?: string;
  location?: string;
  slug: string;
}

export interface PhotographerInfo {
  name: string;
  tagline: string;
  heroIntroduction: string;
  biography: string;
  approach: string;
  awards: string[];
  clients: string[];
  education: string;
  location: string;
  email: string;
  phone: string;
  availability: string;
  socialLinks: {
    instagram?: string;
    linkedin?: string;
    behance?: string;
    facebook?: string;
  };
  pastorSocialLinks?: {
    instagram?: string;
    facebook?: string;
  };
  portraitImage: string;
}

export interface ContactSubmission {
  name: string;
  email: string;
  projectType: 'general' | 'rugaciune' | 'implicare';
  message: string;
  timestamp: Date;
}

export interface Ministry {
  id: string;
  title: string;
  schedule?: string;
  description: string;
  image?: string;
  images?: string[];
  link?: string;
}

export interface Value {
  id: string;
  title: string;
  description: string;
  icon?: any;
}
