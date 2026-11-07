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
4. **Failsafe de Desbloqueo en `Preloader.astro`:**
   - Se añadió un *watchdog* incondicional de 2.2 segundos en `src/components/Preloader.astro` para garantizar que navegadores con bloqueadores estrictos (como Brave Shields en iOS) o redes móviles inestables jamás dejen la página bloqueada en el preloader.

---

## 2. Archivos modificados y creados
- `.github/workflows/deploy-pages.yml`: Workflow de compilación y despliegue automático en GitHub Pages con Node 24.
- `public/CNAME`: Vinculación persistente del dominio oficial `restaurantebuonappetito.com`.
- `src/components/Preloader.astro`: Failsafe incondicional de desbloqueo de pantalla.
- `docs/SESSION_LATEST_ES.md` y `docs/ROADMAP.md`: Documentación actualizada.

---

## 3. Problemas solucionados
- Eliminado de raíz el bloqueo de Vodafone / Movistar / LaLiga al dejar de usar las IPs proxied de Cloudflare y pasar a las IPs limpias de GitHub Pages (Fastly) con Nube Gris en DNS.
- Certificado SSL de GitHub Pages aprobado (`state: approved`) y HTTPS forzado (`https_enforced: true`) tanto para el dominio raíz como para `www`.
- Prevención de bloqueos de renderizado en Brave iOS.

---

## 4. ¿Qué queda pendiente?
- Nada pendiente. La web y la app (`/admin`, `/carta`, `/vinos`) están operativas 24/7 en España sin verse afectadas por los bloqueos de fútbol.

