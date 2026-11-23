// Contenido central del sitio: textos, productos, datos de contacto y SEO.
// ⚠️ "Bakery.com" es una marca ficticia del diseño de referencia y los datos de
//    contacto y testimonios son de ejemplo. Sustitúyelos por los reales antes de usar
//    el sitio para un negocio de verdad (al añadir `href` los datos se vuelven enlaces).

import type { ImageMetadata } from 'astro';
import croissant from '../assets/images/butter-croissant.jpg';
import cupcake from '../assets/images/chocolate-cupcake.jpg';
import fruitTart from '../assets/images/fruit-tart.jpg';
import redVelvet from '../assets/images/red-velvet-cake.jpg';
import heroCake from '../assets/images/hero-cake.jpg';

export const site = {
  name: 'Bakery.com',
  title: 'Bakery.com — Fresh Cakes, Pastries & Handcrafted Baked Goods',
  description:
    'Sweet moments start here. Freshly baked croissants, cupcakes, fruit tarts and celebration cakes, handcrafted every day with natural ingredients.',
  locale: 'en_US',
} as const;

export const contact = [
  { icon: 'phone', label: '+1 (555) 123-4567', href: undefined },
  { icon: 'mail', label: 'hello@bakery.com', href: undefined },
  { icon: 'pin', label: '123 Sweet Street, NY', href: undefined },
] as const;

export const social = [
  { icon: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/' },
  { icon: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/' },
  { icon: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/' },
  { icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/' },
] as const;

export const nav = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
] as const;

type Feature = { icon: 'cupcake' | 'heart' | 'truck' | 'smile'; title: string; subtitle: string; bold?: boolean };

export const features: Feature[] = [
  { icon: 'cupcake', title: 'Fresh Ingredients', subtitle: '100% Natural' },
  { icon: 'heart', title: 'Handcrafted', subtitle: 'with Love', bold: true },
  { icon: 'truck', title: 'Fast & Reliable', subtitle: 'Delivery', bold: true },
  { icon: 'smile', title: 'Customer', subtitle: 'Satisfaction', bold: true },
];

export const products = [
  { name: 'Butter Croissant', price: 4.99, image: croissant, alt: 'Golden, flaky butter croissants on a wooden board' },
  { name: 'Chocolate Cupcake', price: 3.99, image: cupcake, alt: 'Chocolate cupcake topped with a swirl of chocolate frosting' },
  { name: 'Fruit Tart', price: 5.99, image: fruitTart, alt: 'Fruit tart topped with fresh strawberries and blueberries' },
  { name: 'Red Velvet Cake', price: 5.99, image: redVelvet, alt: 'Slice of red velvet layer cake with cream cheese frosting' },
];

// Testimonios de ejemplo (marca ficticia). Reemplázalos por reseñas reales.
export const testimonials = [
  {
    quote: 'Absolutely delicious!\nThe cake was fresh and beautiful. Highly recommended!',
    name: 'Sarah Johnson',
    location: 'New York, USA',
    color: '#f6b972',
  },
  {
    quote: 'Best bakery in town!\nGreat taste and excellent customer service.',
    name: 'David Miller',
    location: 'Los Angeles, USA',
    color: '#c98b62',
  },
  {
    quote: 'A wonderful experience.\nEverything was perfect!',
    name: 'Emily Davis',
    location: 'Chicago, USA',
    color: '#e9a07a',
  },
];

type GalleryItem = { image: ImageMetadata; alt: string; label: string; span?: 'big' };

export const gallery: GalleryItem[] = [
  { image: heroCake, alt: 'Chocolate drip cake topped with strawberries, blueberries and mint', label: 'Celebration Cakes', span: 'big' },
  { image: croissant, alt: 'Freshly baked butter croissants', label: 'Pastries' },
  { image: cupcake, alt: 'Chocolate cupcake with frosting swirl', label: 'Cupcakes' },
  { image: fruitTart, alt: 'Fresh fruit tart', label: 'Tarts' },
  { image: redVelvet, alt: 'Red velvet cake slice', label: 'Layer Cakes' },
];

export const posts = [
  {
    category: 'Recipes',
    date: '2026-11-12',
    title: 'The Secret to Perfectly Flaky Croissants',
    excerpt: 'Cold butter, patient folding and a long rest: the three rules our bakers never break.',
  },
  {
    category: 'Tips',
    date: '2026-10-28',
    title: 'How to Choose the Right Cake for Your Party',
    excerpt: 'Servings, flavors and decoration — a simple guide to picking the perfect centerpiece.',
  },
  {
    category: 'Behind the Scenes',
    date: '2026-10-09',
    title: 'A Morning in Our Kitchen, Starting at 4 AM',
    excerpt: 'From the first batch of sourdough to the last glaze, here is how a day at the bakery begins.',
  },
] as const;

export const hours = [
  { days: 'Monday – Friday', time: '7:00 AM – 8:00 PM' },
  { days: 'Saturday', time: '8:00 AM – 9:00 PM' },
  { days: 'Sunday', time: '8:00 AM – 6:00 PM' },
] as const;
