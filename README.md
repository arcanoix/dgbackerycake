# Site public# DGBACKERY&CAKE - Sitio Web de Repostería Artesanal

Sitio web moderno y optimizado para DGBACKERY&CAKE, un emprendimiento de repostería artesanal especializado en tortas personalizadas, pan fresco y postres de calidad.

## Características

- **Diseño Moderno y Atractivo**: Interfaz visual profesional con animaciones sutiles
- **Totalmente Responsive**: Optimizado para dispositivos móviles, tablets y desktop
- **SEO Optimizado**: Meta tags completos, Open Graph, y estructura semántica
- **Performance**: Optimización de imágenes, lazy loading, y mejores prácticas
- **Accesibilidad**: Navegación clara y estructura accesible
- **Integración con Redes Sociales**: Enlaces a Instagram, TikTok y WhatsApp

## Estructura del Proyecto

```text
/
├── public/
│   ├── favicon.svg
│   └── og-image.jpg          # Imagen para redes sociales (reemplazar)
├── src/
│   ├── assets/
│   │   └── image/
│   │       └── dg-logo.jpg   # Logo principal
│   ├── components/
│   │   ├── Header.astro      # Navegación principal
│   │   ├── Footer.astro      # Pie de página
│   │   ├── ProductCard.astro # Tarjeta de producto
│   │   ├── TestimonialCard.astro # Tarjeta de testimonio
│   │   └── WhatsAppFloat.astro   # Botón flotante de WhatsApp
│   ├── layouts/
│   │   └── Layout.astro      # Layout principal con SEO
│   └── pages/
│       ├── index.astro       # Página de inicio
│       ├── productos.astro   # Catálogo de productos
│       ├── galeria.astro     # Galería de creaciones
│       ├── nosotros.astro    # Sobre nosotros
│       └── contacto.astro    # Formulario de contacto
└── package.json
```

## Páginas del Sitio

### Inicio (`/`)
- Hero section con llamada a la acción
- Características destacadas
- Productos populares
- Testimonios de clientes
- Sección de contacto

### Productos (`/productos`)
- Catálogo completo organizado por categorías:
  - Tortas Personalizadas
  - Pan Artesanal
  - Pasteles y Cupcakes
  - Postres Especiales

### Galería (`/galeria`)
- Galería visual de creaciones
- Filtros por categoría
- Diseño tipo grid responsive

### Nosotros (`/nosotros`)
- Historia del emprendimiento
- Valores y misión
- Proceso de elaboración

### Contacto (`/contacto`)
- Formulario de contacto (integrado con WhatsApp)
- Información de contacto
- Horarios de atención
- Preguntas frecuentes

## Comandos

Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando                   | Acción                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Instala las dependencias                         |
| `npm run dev`             | Inicia servidor de desarrollo en `localhost:4321`|
| `npm run build`           | Construye el sitio para producción en `./dist/`  |
| `npm run preview`         | Vista previa del build localmente                |
| `npm run astro ...`       | Ejecuta comandos CLI de Astro                    |

### Instalación de Tailwind

Para instalar TailwindCSS, ejecuta el siguiente comando:

```bash
npx tailwindcss init -p
```

Esto creará un archivo `tailwind.config.js` en la raíz del proyecto.

## Personalización

### TailwindCSS
El sitio utiliza **TailwindCSS** para estilos modernos y responsivos. La configuración se encuentra en `tailwind.config.mjs`.

### Colores
Paleta de colores vibrantes definida en `tailwind.config.mjs`:

```javascript
primary: {
  DEFAULT: '#dc2626',  // Rojo vibrante
  600: '#dc2626',
  700: '#b91c1c',
}
secondary: {
  DEFAULT: '#d946ef',  // Magenta
}
accent: {
  DEFAULT: '#f97316',  // Naranja
}
```

### Tipografía
- **Display**: Playfair Display (títulos)
- **Body**: Inter (texto general)

Configuradas en `tailwind.config.mjs` con las clases `font-display` y `font-body`.

### Imágenes
1. Reemplaza `src/assets/image/dg-logo.jpg` con tu logo
2. Reemplaza `public/og-image.jpg` con una imagen para redes sociales (1200x630px)
3. Agrega imágenes de productos en `src/assets/image/`

### Información de Contacto
Actualiza los siguientes archivos con tu información:
- `src/components/Header.astro` - Número de WhatsApp
- `src/components/Footer.astro` - Datos de contacto
- `src/components/WhatsAppFloat.astro` - Número de WhatsApp
- `src/pages/contacto.astro` - Información completa

## Redes Sociales

Actualiza los enlaces en:
- `src/components/Footer.astro`
- `src/pages/contacto.astro`

Actualmente configurado para:
- Instagram: @dgbackerycake
- TikTok: @dgbackerycake
- WhatsApp: +58 412-8477968

## Tecnologías

- **Astro 5.3.0** - Framework web moderno
- **TailwindCSS 3.4.1** - Framework CSS utility-first
- **Sharp** - Optimización de imágenes
- **Partytown** - Optimización de scripts de terceros
- **Sitemap** - Generación automática de sitemap

### Características de Diseño
- Gradientes vibrantes (rojo, rosa, naranja)
- Animaciones suaves (float, pulse, transforms)
- Diseño completamente responsive
- Paleta de colores moderna y atractiva
- Efectos hover interactivos
- Componentes reutilizables con Tailwind

## SEO y Performance

- Meta tags completos en todas las páginas
- Open Graph para redes sociales
- Imágenes optimizadas con lazy loading
- Fuentes web optimizadas
- Google Analytics integrado con Partytown
- Sitemap automático

## Despliegue

El sitio está configurado para:
- **URL**: https://www.dgbakerycake.com
- Compatible con Netlify, Vercel, o cualquier hosting estático

Para desplegar:
```bash
npm run build
```

El contenido estático se generará en `./dist/`

## Próximos Pasos Recomendados

1. **Imágenes**: Reemplaza las imágenes placeholder con fotos reales de productos
2. **Contenido**: Personaliza textos con información específica del negocio
3. **Testimonios**: Agrega testimonios reales de clientes
4. **Precios**: Actualiza precios según tu lista actual
5. **Blog** (opcional): Considera agregar una sección de blog para recetas o tips
6. **Sistema de Pedidos** (opcional): Integrar un sistema de gestión de pedidos

## Soporte

Para más información sobre Astro:
- [Documentación](https://docs.astro.build)
- [Discord](https://astro.build/chat)

---

**Desarrollado con ❤️ para endulzar momentos especiales**
