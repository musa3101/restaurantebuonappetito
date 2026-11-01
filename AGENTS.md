# 🚀 Reglas Globales de MYNEXT

Estas reglas rigen automáticamente todo el comportamiento de desarrollo web en este entorno.
Si estás construyendo una web, asume que estas reglas están activas y combínalas con las *skills* de este repositorio.

## 1. Regla de Oro de Inicialización ("iniciar el startup", "startup de Musa", "iniciar el setup", "setup", "@setup")
- **DIFERENCIACIÓN DE COMANDOS**:
  - **"iniciar sesión" / "@inicio" / "@start"**: Lee `docs/SESSION_LATEST_ES.md` y `docs/ROADMAP.md`, resume el estado del proyecto y espera confirmación del usuario antes de modificar código.
  - **"iniciar el startup" / "startup de Musa" / "iniciar el setup" / "@setup" / "vamos a iniciar el setup"**:
    1. **DESDE EL SEGUNDO 0**: Cambia o garantiza inmediatamente la rama `dev` (`git checkout dev || git checkout -b dev`). Está **terminantemente prohibido** trabajar o modificar archivos en `main`.
    2. Garantiza la estructura de documentación en `docs/` (`SESSION_LATEST_ES.md` y `ROADMAP.md`).
    3. Levanta el servidor local (`setup.sh`, `server.py` o `npm run dev`) y muestra el enlace `http://localhost:...`.
    4. **MODO AISLAMIENTO Y BLOQUEO DE SEGURIDAD**: Todo el trabajo queda strictly retenido en la rama `dev` en entorno local. **NUNCA** hagas commit a `main`, merge ni `git push` a GitHub sin la aprobación explícita del usuario (*"ok"*, *"me gustó"*, *"merge"*, *"fusión"*, *"sube a git"*).

## 2. Diseño y Tipografía (Premium)
- **NO uses estéticas genéricas**.
- Sigue la **jerarquía tipográfica estricta**:
  - `H1`: Gigante, bold, tracking muy ajustado.
  - `H2`: Grande, semibold o regular.
  - `H3 (Eyebrow)`: Pequeño, encima del H1.
  - `H4`: Cuerpo del texto, límite de 65 caracteres de ancho.
  - `CTA (Call To Action)`: Texto muy pequeño, MAYÚSCULAS, tracking (espaciado de letras) muy amplio.
- **Emparejamientos de Fuentes MYNEXT**: Prioriza pares modernos como MUSERO x ERTINAS, ELEGIST x MARLINO, RIVAGE x ERTINAS, CLEAN FRAGILE x MIRAVA, o GRANITY x INTER.

## 3. Motion Design & UI
- Usa estructuras limpias como **Bento Grids**.
- Las animaciones deben ser avanzadas: usa `GSAP` si hay mucho movimiento, implementa apariciones escalonadas (*stagger*), *blur-reveal* para títulos, y usa siempre curvas *cubic-bezier* (nunca transiciones lineales).
- Asegúrate de que las microinteracciones en botones y enlaces se sientan orgánicas.

## 4. Código y Estructura
- Mantén el HTML modular y limpio.
- Si usas Tailwind CSS v4, centraliza colores personalizados, fuentes y radios en la directiva `@theme`.
- Protege los diseños al internacionalizarlos (i18n), evitando traducciones literales y validando que las palabras más largas (como en español) no rompan los contenedores.

## 5. Flujo de Trabajo (Git & Cloudflare) - REGLA ESTRICTA
- **NUNCA** hagas `git commit` ni `git push` a `main` o a GitHub de forma automática sin confirmación.
- Todo el trabajo, pruebas locales y cambios se deben hacer exclusivamente en la rama `dev`.
- Si el usuario te pide levantar el entorno o iniciar el startup, ejecuta el archivo `setup.sh` (si existe) para automatizar la rama `dev`, el `npm install` y el `npm run dev` / `python3 server.py`.
- **Regla de Aprobación**: Solo realizarás commits locales en `dev`, fusiones (merge) de `dev` a `main`, o subidas (push) a Git cuando el usuario dé su aprobación explícitamente mediante expresiones como: *"ok"*, *"me gustó"*, *"merge"*, *"fusión de lo que hicimos"* o *"sube a git"*. Sin esta confirmación directa, no debes guardar ni subir ningún cambio a los repositorios remotos.

## 6. Prohibición Absoluta de Falsear Tests o Respuestas (Tolerancia Cero a la Mentira)
- **CERO SIMULACIONES O TESTS FALSOS**: Está terminantemente prohibido afirmar que se han ejecutado tests, que han pasado o que "todo funciona bien" sin haber invocado realmente la herramienta (TestSprite MCP, Playwright, etc.) y tener la salida real del proceso.
- **TRANSPARENCIA TOTAL**: Si una herramienta de test falla, se bloquea, no tiene credenciales, o si no se puede ejecutar, dilo inmediatamente y de forma directa sin excusas ni inventar tablas de "Passed".
- **EVIDENCIA OBLIGATORIA**: Para afirmar que la interfaz móvil o un flujo funciona, debe basarse en logs reales y capturas de pantalla reales, nunca en suposiciones. Si no se ha probado, se dice: "No se ha probado aún".

<!-- INSFORGE:START -->
## InsForge backend

This project uses [InsForge](https://insforge.dev): an all-in-one, open-source Postgres-based backend (BaaS) that gives this app a database, authentication, file storage, edge functions, realtime, an AI model gateway, and payments through one platform.

- **Project:** **buon-appetito** (API base `https://pz3qiueg.eu-central.insforge.app`)
- **Skills:** these InsForge skills are installed for supported coding agents. Reach for them before implementing any InsForge feature instead of guessing the API:
  - `insforge`: app code with the `@insforge/sdk` client (database CRUD, auth, storage, edge functions, realtime, AI, email, and Stripe payments).
  - `insforge-cli`: backend and infrastructure via the `insforge` CLI (projects, SQL, migrations, RLS policies, storage buckets, functions, secrets, payment setup, schedules, deploys).
  - `insforge-debug`: diagnosing failures (SDK/HTTP errors, RLS denials, auth and OAuth issues) and running security or performance audits.
  - `insforge-integrations`: wiring external auth providers (Clerk, Auth0, WorkOS, Better Auth, etc.) for JWT-based RLS, or the OKX x402 payment facilitator.
  - `find-skills`: discovering additional skills on demand.
- **Credentials:** app code reads keys from `.env.local`; the CLI reads `.insforge/project.json`. Never hardcode or commit keys.

Key patterns:

- Database inserts take an array: `insert([{ ... }])`.
- Reference users with `auth.users(id)`; use `auth.uid()` in RLS policies.
- For storage uploads, persist both the returned `url` and `key`.
<!-- INSFORGE:END -->
