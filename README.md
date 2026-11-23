# Bakery.com — Landing page (Astro + Tailwind CSS + pnpm)

Réplica responsive de la landing "Bakery.com", optimizada para SEO y rendimiento, con animaciones ligeras.

**Lighthouse (build de producción):** Performance 98 móvil / 100 escritorio · Accessibility 100 · Best Practices 100 · SEO 100 · CLS 0.

> **Proyecto demo.** "Bakery.com" es la marca ficticia del diseño de referencia. Los datos de contacto y los
> testimonios son de ejemplo (el footer lo indica). Sustitúyelos antes de usar el sitio para un negocio real.

## Requisitos

- Node.js **22.23.4 o superior** (lo exige Astro 7)
- **pnpm 10** (fijado en `package.json` → `"packageManager": "pnpm@10.34.9"`)

```bash
corepack enable   # si aún no tienes pnpm
pnpm install
pnpm dev          # http://localhost:4321
pnpm build        # sitio estático en ./dist
pnpm preview      # sirve ./dist
pnpm check        # revisión de tipos
```

`pnpm-workspace.yaml` autoriza los scripts de instalación de `esbuild` y `sharp` (pnpm 10 los bloquea por defecto).

## Deploy en Vercel

Importa el repo en [vercel.com/new](https://vercel.com/new) y pulsa **Deploy** sin cambiar nada (hoy está desplegado en https://buildcore-phi.vercel.app desde el repo `buildcore`): Vercel detecta Astro
y usa pnpm 10 por el `pnpm-lock.yaml`. Si cambias de dominio, cámbiala en
`astro.config.mjs` (`site`) y en `public/robots.txt`.

## Estructura

```
src/
├─ assets/
│  ├─ fonts/            Inter variable (woff2, autoalojada)
│  └─ images/           Fotos provisionales (recortadas de la captura de referencia)
├─ components/
│  ├─ Header.astro      Barra superior + header fijo + menú móvil
│  ├─ Hero.astro        "Sweet Moments Start Here" + foto + onda inferior
│  ├─ Features.astro    Franja de 4 ventajas con iconos de corazón
│  ├─ PopularItems.astro  Productos con "Add to Cart" (#menu)
│  ├─ About.astro       Foto con arco + texto (#about)
│  ├─ Testimonials.astro  Reseñas con slider (scroll-snap) y puntos
│  ├─ Gallery.astro     Galería bento (#gallery)
│  ├─ Blog.astro        Artículos (#blog)
│  ├─ Footer.astro      Banda CTA + footer (#contact)
│  └─ Icon.astro / Logo.astro
├─ data/site.ts         ← textos, productos, precios, reseñas, horarios y contacto
├─ layouts/Layout.astro  <head>: meta, Open Graph, Twitter, JSON-LD (Bakery + Menu)
└─ styles/global.css    Tailwind v4, tokens de diseño y animaciones
```

## Pendiente antes de usarlo en producción real

1. **Fotos:** las de `src/assets/images/` salen de la captura (baja resolución, escaladas). Cámbialas por fotos
   reales con el mismo nombre de archivo (Astro genera AVIF/WebP y tamaños automáticamente). Prompts sugeridos si
   las generas con IA:
   - *Hero:* `Professional food photography of a chocolate drip cake topped with fresh strawberries, blueberries and mint leaves on a wooden cake stand, dark moody bakery background with warm bokeh lights, side view, 4:5`
   - *Productos:* `Close-up food photography of [butter croissants / a chocolate cupcake with a frosting swirl / a fresh fruit tart with strawberries and blueberries / a slice of red velvet layer cake], warm natural light, shallow depth of field, rustic bakery table, 10:9`
   - *About:* `A baker in a white shirt and dark apron sprinkling flour over dough on a wooden table, flour particles in the air, warm bakery kitchen, plants in the background, 4:3`
2. **Datos reales:** contacto, redes, horarios y reseñas en `src/data/site.ts` (si añades `href` a teléfono, email o
   dirección se convierten en enlaces). Añade dirección y teléfono al JSON-LD de `Layout.astro`.
3. **Carrito:** "Add to Cart" solo muestra la animación de añadido. Conéctalo a tu carrito (Shopify, Snipcart…) en
   `PopularItems.astro`.
4. **Video:** "Watch Video" lleva a la sección About; cambia el `href` por tu video.
5. **Quita el aviso de demo** del footer cuando la marca y los datos sean reales.

## Animaciones

CSS (`transform`/`opacity`) + ~1 KB de JS, sin librerías. Respetan "reducir movimiento" y sin JS todo se ve igual.

- **Hero:** zoom de entrada de la foto, el titular sube línea a línea, textos y botones escalonados, anillo pulsante en "Watch Video", parallax y desvanecido al hacer scroll*.
- **Header:** sombra + desenfoque al hacer scroll, barra de progreso de lectura*, subrayado animado, menú móvil escalonado.
- **Secciones:** aparición al entrar en pantalla (`data-reveal`, `data-reveal="left|right|zoom"`, `style="--delay:120ms"`).
- **Hover:** latido de los corazones, tarjetas que se elevan, zoom de fotos, brillo en botones, "Added!" al añadir al carrito.

\* *Scroll-driven animations*: Chrome, Edge y Safari 26+ (Firefox las ignora).
