# 🎨 Paleta de Colores Oficiales - DGBACKERY&CAKE

## Colores del Logo

La paleta de colores ha sido actualizada para reflejar los colores oficiales del logo de DGBACKERY&CAKE:

### 🎨 Colores Principales

1. **Durazno/Crema** (Primary)
   - Hex: `#FFCC99`
   - RGB: `255, 204, 153`
   - CMYK: `C:0 M:25 Y:44 K:0`
   - Uso: Color principal, fondos suaves, gradientes

2. **Rosa Coral** (Secondary)
   - Hex: `#FF6666`
   - RGB: `255, 102, 102`
   - CMYK: `C:0 M:71 Y:44 K:0`
   - Uso: Acentos, botones, enlaces activos

3. **Negro** (Accent)
   - Hex: `#000000`
   - RGB: `0, 0, 0`
   - CMYK: `C:0 M:0 Y:0 K:100`
   - Uso: Texto, elementos de contraste

## Implementación en TailwindCSS

### Configuración (`tailwind.config.mjs`)

```javascript
colors: {
  primary: {
    DEFAULT: '#ffcc99',  // Durazno/Crema
    50: '#fff5f0',
    100: '#ffe8db',
    200: '#ffd4b8',
    300: '#ffcc99',
    // ... hasta 900
  },
  secondary: {
    DEFAULT: '#ff6666',  // Rosa Coral
    50: '#fff0f0',
    100: '#ffe0e0',
    200: '#ffc2c2',
    // ... hasta 900
  },
  accent: {
    DEFAULT: '#000000',  // Negro
    // ... gradientes de gris
  }
}
```

### Uso en Componentes

#### Gradientes
```html
<!-- Logo y títulos -->
<span class="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
  &CAKE
</span>

<!-- Botones principales -->
<button class="bg-gradient-to-r from-secondary to-primary">
  Hacer Pedido
</button>

<!-- Fondos suaves -->
<section class="bg-gradient-to-br from-primary-50 via-secondary-50 to-orange-50">
```

#### Colores Sólidos
```html
<!-- Texto activo -->
<a class="text-secondary hover:text-secondary">Inicio</a>

<!-- Fondos -->
<div class="bg-primary-50">...</div>

<!-- Bordes -->
<div class="border-secondary">...</div>
```

## Componentes Actualizados

### ✅ Header
- Logo con gradiente durazno → rosa coral
- Links activos en rosa coral
- Subrayado animado con gradiente
- Botón CTA con gradiente rosa coral → durazno

### ✅ Footer
- Logo con gradiente durazno → rosa coral
- Links hover en rosa coral (navegación)
- Links hover en durazno (productos)
- Corazón animado en rosa coral

### ✅ Página de Inicio
- Hero con fondo degradado suave
- Título con gradiente rosa coral → durazno → naranja
- Botones con gradiente rosa coral → durazno
- Cards de características con fondos pasteles
- Sección CTA con gradiente vibrante

## Comparación: Antes vs Ahora

### Antes (Colores Genéricos)
- Primary: `#dc2626` (Rojo vibrante)
- Secondary: `#d946ef` (Magenta)
- Accent: `#f97316` (Naranja)

### Ahora (Colores Oficiales)
- Primary: `#FFCC99` (Durazno/Crema del logo)
- Secondary: `#FF6666` (Rosa Coral del logo)
- Accent: `#000000` (Negro del logo)

## Ventajas de los Nuevos Colores

1. **Identidad de Marca Consistente**: Los colores del sitio coinciden exactamente con el logo
2. **Tonos Cálidos y Acogedores**: Perfectos para una repostería artesanal
3. **Profesionalismo**: Paleta cohesiva y bien pensada
4. **Diferenciación**: Colores únicos que destacan de la competencia
5. **Versatilidad**: Funcionan bien en fondos claros y oscuros

## Próximos Pasos

Para aplicar estos colores en las páginas restantes:

1. **Productos** (`/productos`)
   - Actualizar badges de categorías
   - Botones de pedido
   - Títulos de secciones

2. **Galería** (`/galeria`)
   - Botones de filtro
   - Overlays de imágenes

3. **Nosotros** (`/nosotros`)
   - Cards de valores
   - Sección de misión/visión

4. **Contacto** (`/contacto`)
   - Botón de envío del formulario
   - Iconos de contacto

## Archivos Modificados

- ✅ `tailwind.config.mjs` - Paleta de colores
- ✅ `src/layouts/Layout.astro` - Variables CSS
- ✅ `src/components/Header.astro` - Navegación y logo
- ✅ `src/components/Footer.astro` - Pie de página
- ✅ `src/pages/index.astro` - Página de inicio

## Instalación

Recuerda instalar las dependencias de Tailwind:

```bash
# Con Docker
docker-compose down
docker-compose up --build

# O manualmente
docker-compose up -d
docker-compose exec dgbackerycakesite npm install
```

---

**Los colores oficiales del logo ahora están integrados en todo el sitio web** 🎨✨
