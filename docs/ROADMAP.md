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

---

## Tareas en progreso / Próxima sesión
- [ ] **SEO Técnico y Metadatos en Código**:
  - [ ] Implementar Schema.org / JSON-LD para restaurante (`Restaurant`, menú, ubicación en el puerto, teléfono y link de reservas).
  - [ ] Configurar generación automática de `sitemap.xml` y `robots.txt` en Astro.
  - [ ] Optimizar etiquetas Open Graph (OG tags) para previsualizaciones atractivas en WhatsApp, Telegram y redes sociales.

---

## Próximas mejoras prioritarias (Post-Dominio)
1. **Compra y conexión del dominio definitivo** (ej. `buonappetitopuerto.es`).
2. **Alta y verificación DNS en Google Search Console**.
3. **Vinculación con Google Business Profile (Google Maps)** con link a la web y reservas de Bavoli.
4. **Comprobación en sala con código QR real impreso en las mesas.**
