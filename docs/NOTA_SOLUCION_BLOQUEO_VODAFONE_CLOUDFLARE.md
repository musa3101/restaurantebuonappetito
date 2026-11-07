# 🛡️ Protocolo Anti-Bloqueo de Operadoras en España (Vodafone / Movistar / LaLigaGate)

**Fecha del incidente documentado:** 7 de Noviembre de 2026  
**Proyecto:** Buon Appetito (`https://restaurantebuonappetito.com`)  
**Estado:** Resuelto de raíz y documentado para futuros proyectos de MYNEXT en España.

---

## 1. ¿Qué ocurrió exactamente? (Síntomas)

Durante las franjas horarias de partidos de fútbol en España (especialmente fines de semana y noches de partido entre las 20:00h y las 23:45h), los clientes o el propietario que intentaban abrir la web desde operadoras españolas (**Vodafone, Movistar, O2, DIGI, Orange, MásMóvil**) se encontraban con dos síntomas críticos:

1. **En conexiones HTTPS (`https://restaurantebuonappetito.com`):**
   - El navegador móvil (Safari, Brave, Chrome) se quedaba con la **pantalla completamente negra** y la barra de carga clavada en ~15% hasta dar `ERR_CONNECTION_TIMED_OUT`.
2. **En conexiones HTTP (`http://restaurantebuonappetito.com`):**
   - Aparecía una pantalla blanca inyectada por la operadora con el mensaje literal:
     > *"Por causas ajenas a Vodafone, esta web no está disponible"* (o el aviso equivalente de bloqueo judicial en Movistar/DIGI).

---

## 2. Causa Raíz Técnica

* No es un fallo del código de la web ni una caída del servidor.
* En España, por orden judicial solicitada por **LaLiga**, los operadores de telecomunicaciones bloquean en tiempo real direcciones IP compartidas de **Cloudflare** (como los rangos `188.114.96.x`, `188.114.97.x`, `104.21.x.x`) cuando algún sitio ajeno usa la red de Cloudflare para retransmitir fútbol pirata.
* Cualquier web alojada en **Cloudflare Pages** (`*.pages.dev`) o que tenga activado el **Proxy de Cloudflare (Nube Naranja 🟠 `proxied: true`)** comparte esas mismas direcciones IP públicas y cae bloqueada como daño colateral en toda España durante los partidos.

---

## 3. Solución Definitiva Paso a Paso (Receta Reproducible)

Para blindar cualquier web estática/jamstack en España y que **jamás** vuelva a sufrir bloqueos de LaLiga/Vodafone, hay que **servir la web desde la red Fastly de GitHub Pages (o Vercel) y dejar Cloudflare únicamente como DNS puro en Nube Gris (`proxied: false`)**:

### Paso 1: Configurar `public/CNAME` y Workflow en el Repositorio
1. Crear el archivo `public/CNAME` con el dominio exacto sin `https://`:
   ```text
   restaurantebuonappetito.com
   ```
2. Crear el workflow `.github/workflows/deploy-pages.yml` especificando la versión de Node requerida (p. ej. `node-version: 24` para Astro 7):
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [ main ]
     workflow_dispatch:

   permissions:
     contents: read
     pages: write
     id-token: write

   concurrency:
     group: "pages"
     cancel-in-progress: false

   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - name: Checkout your repository using git
           uses: actions/checkout@v4
         - name: Install, build, and upload your site
           uses: withastro/action@v3
           with:
             node-version: 24

     deploy:
       needs: build
       runs-on: ubuntu-latest
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       steps:
         - name: Deploy to GitHub Pages
           id: deployment
           uses: actions/deploy-pages@v4
   ```

### Paso 2: Activar GitHub Pages vía API de GitHub
Con el token de GitHub (`$GH_TOKEN`):
```bash
# 1. Activar GitHub Pages en modo workflow
curl -s -X POST \
  -H "Authorization: Bearer $GH_TOKEN" \
  -H "Accept: application/vnd.github+json" \
  https://api.github.com/repos/<OWNER>/<REPO>/pages \
  -d '{"build_type":"workflow"}'

# 2. Vincular el dominio personalizado y forzar HTTPS
curl -s -X PUT \
  -H "Authorization: Bearer $GH_TOKEN" \
  -H "Accept: application/vnd.github+json" \
  https://api.github.com/repos/<OWNER>/<REPO>/pages \
  -d '{"cname":"tudominio.com","build_type":"workflow","https_enforced":true}'
```

### Paso 3: Configurar los Registros DNS en Cloudflare en Modo Nube Gris (`proxied: false`)
En el panel de Cloudflare (o vía API de Cloudflare con `X-Auth-Email` y `X-Auth-Key`):
1. **Borrar** los registros `CNAME` o `A` antiguos que tengan el proxy naranja activo (`proxied: true`) o que apunten a `*.pages.dev`.
2. **Crear los 4 registros `A`** apuntando a las IPs oficiales de GitHub Pages (Fastly CDN) con **`proxied: false` (Nube Gris / DNS Only)**:
   - `185.199.108.153` (`proxied: false`)
   - `185.199.109.153` (`proxied: false`)
   - `185.199.110.153` (`proxied: false`)
   - `185.199.111.153` (`proxied: false`)
3. **Crear los 4 registros `AAAA` (IPv6)** con **`proxied: false` (Nube Gris)**:
   - `2606:50c0:8000::153` (`proxied: false`)
   - `2606:50c0:8001::153` (`proxied: false`)
   - `2606:50c0:8002::153` (`proxied: false`)
   - `2606:50c0:8003::153` (`proxied: false`)
4. **Crear el registro `CNAME` para `www`** con **`proxied: false` (Nube Gris)**:
   - Nombre: `www` -> Contenido: `<usuario>.github.io` (`proxied: false`)

---

## 4. Limpieza de Caché en Dispositivos Móviles (iOS / Android)
Tras hacer el cambio de DNS, si un teléfono móvil había intentado abrir la web durante el bloqueo, su caché DNS local puede recordar la IP antigua de Cloudflare durante unos minutos.
- **Solución instantánea en móvil:** Activar y desactivar el **Modo Avión** ✈️ durante 3 segundos para vaciar la caché DNS del sistema operativo móvil.
