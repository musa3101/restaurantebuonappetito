# Hoja de Ruta (Roadmap) - Buon Appetito

## Tareas completadas
- [x] Backend cloud en InsForge permanente (105 platos en 3 idiomas).
- [x] Sincronización en vivo de `/carta` y `/vinos` con la base de datos.
- [x] Despliegue en producción con dominio limpio: `https://restaurantebuonappetito.pages.dev`.
- [x] Acceso seguro sin contraseñas en texto plano y conmutador para ver/ocultar clave.
- [x] Persistencia de sesión indefinida ("Recordar mi cuenta") para Web App móvil.
- [x] Configuración Web App instalable (PWA) para iPhone y Android (`manifest.webmanifest`).
- [x] Separación de la carta en 3 cartas independientes: Comida, Bebidas y Bodega de Vinos.
- [x] Barra de navegación inferior móvil táctil (Bottom Navigation Bar) adaptada al uso con el pulgar.
- [x] Rediseño V2 Mobile-First del panel de administración (`/admin`):
  - [x] Tarjetas limpias en lista sin conmutadores de disponibilidad en primer plano.
  - [x] Bloqueo de doble toque zoom en iOS Safari (`touch-action: manipulation`).
  - [x] Modal para añadir comida, bebidas o vinos con selector de carta segmentado y categorías dinámicas.
  - [x] Pantalla completa de Ajustes con guía PWA visual e historial de cambios con fecha y hora exacta.
- [x] **Auditoría Integral Multi-Dispositivo (Desktop, Tablet, Mobile)**:
  - [x] Validación visual y funcional en 1440x900, 768x1024 y 390x844 con Playwright y Chrome DevTools.
  - [x] Pruebas exhaustivas de usuario final (carta, fotos, carruseles, reservas, idiomas).
- [x] **Auditoría Profunda E2E del Administrador de la Carta**:
  - [x] Creación y validación de platos en vivo en Comida, Bebidas y Vinos.
  - [x] Auto-traducción en tiempo real con IA (Google Translate) a Español, Inglés y Alemán.
  - [x] Cambio de disponibilidad ("Agotado") y edición de precios.
  - [x] Cambio seguro de credenciales en Ajustes.
  - [x] Limpieza total de platos de prueba en InsForge (base de datos intacta).
- [x] **Optimización y Síntesis de Marcos Legales (Aviso Legal, Privacidad, Cookies)**:
  - [x] Poda del 100% de la verborrea informática (virus, hackeo, tutoriales de navegadores).
  - [x] Formato editorial premium de tarjetas limpias y tabla simplificada de cookies.
  - [x] Botón directo para reconfigurar preferencias de cookies.
  - [x] Traducción adaptativa trilingüe con `/i18nstack` protegiendo el diseño visual.
  - [x] Cumplimiento normativo riguroso con LSSI-CE, RGPD y AEPD.
- [x] **Despliegue Continuo Cloudflare Pages**:
  - [x] Fusión (merge) limpia de `dev` a `main` y push a GitHub (`c3ae27c`).
  - [x] Despliegue verificado en producción con respuesta HTTP 200.

---

## Tareas en progreso
- [ ] Revisión visual y experiencia en dispositivo móvil por parte del cliente.

---

## Próximas mejoras prioritarias
- [ ] Incorporación de fotografías de alta resolución de platos propios si el restaurante las proporciona.
- [ ] Monitorización de rendimiento en Cloudflare Analytics y métricas Core Web Vitals en producción.
