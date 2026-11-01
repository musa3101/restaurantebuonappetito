# Hoja de Ruta (Roadmap) - Buon Appetito

## Tareas completadas
- [x] Backend cloud en InsForge permanente (105 platos en 3 idiomas).
- [x] Sincronización en vivo de `/carta` y `/vinos` con la base de datos.
- [x] Despliegue en producción con dominio limpio: `https://restaurantebuonappetito.pages.dev`.
- [x] Acceso seguro sin contraseñas en texto plano y conmutador para ver/ocultar clave.
- [x] Persistencia de sesión indefinida ("Recordar mi cuenta") para Web App móvil.
- [x] Configuración Web App instalable (PWA) para iPhone y Android (`manifest.webmanifest`).
- [x] Separación de la carta en 3 cartas independientes: Comida (71), Bebidas (34) y Bodega de Vinos.
- [x] Barra de navegación inferior móvil táctil (Bottom Navigation Bar) adaptada al uso con el pulgar.
- [x] Rediseño V2 Mobile-First del panel de administración (`/admin`):
  - Tarjetas limpias en lista sin conmutadores de disponibilidad en primer plano.
  - Bloqueo de doble toque zoom en iOS Safari (`touch-action: manipulation`).
  - Modal para añadir comida, bebidas o vinos con selector de carta segmentado y categorías dinámicas.
  - Pantalla completa de Ajustes con guía PWA visual e historial de cambios con fecha y hora exacta.
- [x] Auditoría técnica y corrección de guardado/edición de platos en panel de administración:
  - Eliminación de control bloqueante invisible en el formulario de platos.
  - Corrección de listeners táctiles en modo PWA Safari.
  - 100% de tests aprobados en Playwright CLI y TestSprite (`TC002 PASSED`).
- [x] Integración de reservas con Bavoli:
  - Enlaces de "Ver Menú" y "Reservar Mesa" del Hero con scroll suave a `#menu` y `#donde-estamos`.
  - Botón oficial en Dónde Estamos conectado a `https://www.bavoli.com/book/buon-appetito` en pestaña independiente.
  - Configuración del panel de Bavoli en Chrome: 28 mesas reales (26 en Terraza, 2 en Salón Interior), reglas de rotación (90 min) y notificaciones WhatsApp activadas al $0 (Plan Gratuito).
- [x] Optimización de rendimiento con principios Vercel React Best Practices (`client:visible`, `lazy state init`, `passive listeners`).
- [x] Solución integral de vídeo Hero para Desktop y Tablet con render panorámico 16:9 ambiental sin botón de play de Safari.
- [x] Barra de navegación editorial refinada en Desktop (sin píldoras, con scroll-spy dorado y selector de idioma limpio).
- [x] Perfeccionamiento de la infografía "Il Nostro Calzone" con arcos simétricos en pantallas grandes.
- [x] **Auditoría Integral y Fase A de Blindaje Inmediato (Riesgo Cero para Presentación)**:
  - [x] Eliminación de puerta trasera de autenticación por URL (`?demo=1`) en `admin.astro`.
  - [x] Sanitización completa contra inyecciones XSS (`escapeHtml`) en carta, vinos e historial del panel admin.
  - [x] Corrección de discrepancia de hidratación en React en botón de reserva (`FlowButton`).
  - [x] Accesibilidad en modales (`role="dialog"`, `aria-modal="true"`, `aria-labelledby`, `aria-label` en botones de cierre).
  - [x] Mejora de ratios de contraste tipográfico WCAG AA en textos sutiles y badges de agotado.
  - [x] Blindaje estricto de secretos en `.gitignore` (`.env*`, certificados, claves).
  - [x] **Navegación y Retorno Contextual Inteligente ("Volver Atrás")**:
    - [x] Retorno exacto al Menú (`#menu`) desde `/carta` y `/vinos` arriba.
    - [x] Retorno exacto al Footer (`#footer`) desde las páginas de Aviso Legal, Privacidad y Cookies.
    - [x] Retorno exacto a Dónde Estamos (`#donde-estamos`) desde `/reservar`.
    - [x] Desplazamiento suave al Hero / Inicio (`scrollY = 0`) exclusivo al hacer clic en el Logo oficial o entrar de cero a la web.
- [x] **SEO Técnico, GEO e Integridad del Mensaje de Marca**:
  - [x] Supresión total de textos falsos ("horno de leña", "fermentación 48 horas").
  - [x] Datos estructurados Schema.org `Restaurant` + `ItalianRestaurant` con geolocalización de Port d'Andratx.
  - [x] Sitemap dinámico `@astrojs/sitemap` y `robots.txt` para rastreadores de IA.
- [x] **Privacidad y Aviso de Cookies Responsivo**:
  - [x] Banner interactivo shadcn/21st.dev (`AlertCookieNotice.tsx`) condicionado al scroll más allá del Hero.
  - [x] Páginas legales con contraste óptimo y legible.
- [x] **Cierre Cinemático Halftone Wordmark "Buon Appetito"**:
  - [x] Canvas 2D semitono verde `#183321` y rojo `#D93829` con interacción física de resortes y destellos al tacto.
  - [x] Adaptación móvil vertical (`scaleY`) al 70-75% de altura.
  - [x] Integración en portada (`/`), carta (`/carta`) y vinos (`/vinos`).
  - [x] Limpieza del footer en carta y vinos (eliminado botón duplicado de volver).

---

## 🚨 RECORDATORIO PRIORITARIO DE SESIÓN (A partir de mañana / Post-Presentación)
> [!IMPORTANT]
> **Prioridad Máxima acordada para próximas sesiones (a partir de la presentación):**
> 1. **FASE B - Seguridad y Arquitectura Profunda**:
>    - **Backend Seguro para Admin**: Mudar la llamada con API key de InsForge a un endpoint protegido de servidor en Astro / Edge Function para que la Master Key nunca viaje al navegador.
>    - **Modularización de `admin.astro`**: Dividir el archivo de 3.500 líneas en componentes reutilizables (`AdminHeader`, `DishList`, `DishModal`, `AdminDrawer`, `useAdminState`).
>    - **Unificación DRY de Carta y Vinos**: Compartir la lógica de categorías, filtros e internacionalización entre `carta.astro` y `vinos.astro` en un servicio común.
> 2. **GOOGLE SEARCH CONSOLE & DOMINIO**:
>    - Alta y verificación DNS en Google Search Console.
>    - Vinculación con Google Business Profile (Google Maps) con enlace oficial a la web y reservas.
