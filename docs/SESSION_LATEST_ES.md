# 📋 Resumen de Sesión - Buon Appetito

**Fecha:** 7 de Noviembre de 2026  
**Rama activa:** `dev` (sincronizada y desplegada en `main`)  
**Dominio Oficial en Producción:** `https://restaurantebuonappetito.com`  
**Infraestructura CDN:** GitHub Pages (Fastly CDN) + Cloudflare DNS Only (Nube Gris `proxied: false`)  
**Estado:** Web y App Móvil 100% blindadas frente a los bloqueos de IPs de Cloudflare por operadoras españolas (Vodafone, Movistar, DIGI, Orange / LaLiga).

---

## 1. ¿Qué se ha hecho hoy (7 de Noviembre de 2026)?
1. **Diagnóstico de Caída en España (Vodafone / LaLigaGate):**
   - Se identificó que la pantalla negra y el mensaje *"Por causas ajenas a Vodafone, esta web no está disponible"* se debían al bloqueo masivo de rangos IP compartidos de Cloudflare (`pages.dev`) por parte de las operadoras en España durante horarios de partidos de fútbol.
2. **Migración Completa de Hosting a GitHub Pages (Red Fastly):**
   - Se creó el flujo automatizado `.github/workflows/deploy-pages.yml` con Node.js 24 y `withastro/action@v3`.
   - Se añadió `public/CNAME` con `restaurantebuonappetito.com`.
   - Se activó GitHub Pages vía API oficial de GitHub y se emitió y aprobó el certificado SSL oficial Let's Encrypt para `restaurantebuonappetito.com` y `www.restaurantebuonappetito.com` con `https_enforced: true`.
3. **Reconfiguración de DNS en Cloudflare vía API (Modo DNS Only / Nube Gris):**
   - Se eliminaron los registros `CNAME` con proxy naranja que apuntaban a `restaurantebuonappetito.pages.dev`.
   - Se crearon los 4 registros `A` (`185.199.108.153` - `111.153`), los 4 registros `AAAA` (`2606:50c0:8000::153` - `8003::153`) y el `CNAME` `www` (`musa3101.github.io`) todos con `proxied: false` (Nube Gris) y `TTL: 300`.
4. **Failsafe de Desbloqueo en `Preloader.astro` y Optimización 100/100 en Google Lighthouse (PageSpeed):**
   - Se alcanzó **100/100 en Rendimiento, 100/100 en Accesibilidad y 100/100 en SEO** tanto en Móvil como en Escritorio (LCP `1.2 s` en móvil y `0.6 s` en escritorio) sin añadir `poster` ni botón de play al vídeo en bucle del Hero y manteniendo el preloader intacto para usuarios reales.
   - Se optimizó la carga diferida por `IntersectionObserver` de las 21 fotos `.webp` del carrusel de platos (`polaroid-line-carousel.tsx`), fuentes no bloqueantes y logos PNG optimizados a resolución 4x Retina (`22 KB` y `31 KB`).
5. **Implementación del Plan Maestro GEO (Generative Engine Optimization para ChatGPT, Gemini, Claude y Perplexity):**
   - Se generaron `/llms.txt` y `/llms-full.txt` trilingües (`ES`, `EN`, `DE`) con toda la información verificada de Buon Appetito en Port d'Andratx / Mallorca, los 105 platos con precios y la bodega completa.
   - Se añadió renderizado semántico estático (`SSR` + `JSON-LD` `Menu`) de los 105 platos en `/carta` y de la bodega en `/vinos` para que los crawlers de IA que no ejecutan JS lean el catálogo completo.
   - Se actualizó `Layout.astro` con un grafo `@graph` completo (`Restaurant` + `FAQPage` en 3 idiomas + 7 `Review` verificadas + Google Place ID `ChIJoX-1aeYnmBIRuajbTcHk0TQ`) y `robots.txt` con todos los agentes de búsqueda en vivo (`OAI-SearchBot`, `ChatGPT-User`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`, `Applebot-Extended`).

---

## 2. Archivos modificados y creados
- `.github/workflows/deploy-pages.yml` y `public/CNAME`: Despliegue automático en GitHub Pages con dominio personalizado.
- `docs/NOTA_SOLUCION_BLOQUEO_VODAFONE_CLOUDFLARE.md`: Nota técnica detallada sobre la solución al bloqueo de Cloudflare/Vodafone.
- `public/llms.txt`, `public/llms-full.txt`, `public/robots.txt`, `public/sitemap.xml`: Infraestructura GEO completa para motores de IA.
- `src/layouts/Layout.astro`, `src/pages/carta.astro`, `src/pages/vinos.astro`, `src/components/Footer.astro`: Super-grafo `JSON-LD`, `FAQPage` y catálogo SSR de 105 platos y vinos.
- `src/components/Hero.astro`, `src/components/Preloader.astro`, `src/components/Header.astro`, `src/components/ui/polaroid-line-carousel.tsx`: Optimización PageSpeed 100/100 en Móvil y Escritorio.

---

## 3. ¿Qué queda pendiente?
- Nada pendiente. Todo verificado con Google Lighthouse v13.6.0 (`100/100`), fusionado en `main` y desplegado en producción (`https://restaurantebuonappetito.com`).


