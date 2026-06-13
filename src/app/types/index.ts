// src/app/types/index.ts
export interface SlideData {
  main: string;
  sub: string;
  btnText: string;
  btnHref: string;
}

export interface ProgramCard {
  title: string;
  subtitle: string;
  href: string;
  img: string;
}

export interface ReviewCard {
  headline: string;
  body: string;
  name: string;
  program: string;
}

export interface PartnerLogo {
  src: string;
  alt: string;
}

export interface GalleryImage {
  src: string;
  alt?: string;
}

export interface InstructorCard {
  name: string;
  title: string;
  description: string;
  img: string;
}

export type ModalType = 'terms' | 'privacy' | null;
