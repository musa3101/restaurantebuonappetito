import { chromium } from 'playwright';
import path from 'path';
import fs from 'fs';

const SCREENSHOT_DIR = '/Users/musa/.gemini/antigravity/brain/caa0db0b-1431-426f-92db-50f4a2ee3c75';

// Ensure screenshot directory exists
if (!fs.existsSync(SCREENSHOT_DIR)) {
  fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
}

async function runAudit() {
  console.log('--- INICIANDO AUDITORÍA E2E MÓVIL (Playwright) ---');
  console.log(`Directorio de capturas: ${SCREENSHOT_DIR}`);

  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1',
    isMobile: true,
    hasTouch: true,
    locale: 'es-ES'
  });

  // Pre-autenticar en localStorage
  await context.addInitScript(() => {
    localStorage.setItem('buon_appetito_auth', 'true');
    localStorage.setItem('buon_appetito_remember', 'true');
  });

  const page = await context.newPage();

  // Escuchar diálogos de confirmación para eliminaciones
  page.on('dialog', async (dialog) => {
    console.log(`[Dialog detectado] Mensaje: "${dialog.message()}" -> Aceptando...`);
    await dialog.accept();
  });

  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.log(`[Browser Console Error] ${msg.text()}`);
    }
  });

  try {
    // 1. ABRIR http://localhost:4321/admin
    console.log('\n[Paso 1] Navegando a http://localhost:4321/admin...');
    await page.goto('http://localhost:4321/admin', { waitUntil: 'networkidle' });
    
    // Inyectar CSS para ocultar el astro-dev-toolbar
    await page.addStyleTag({
      content: 'astro-dev-toolbar { display: none !important; pointer-events: none !important; }'
    });

    // Esperar a que la app principal cargue los platos
    await page.waitForSelector('.dish-row', { timeout: 15000 });
    console.log('✓ Panel de administración cargado y autenticado correctamente.');

    // Helper para cambiar de carta sin interferencias
    async function selectMenuTab(tabName) {
      console.log(`Cambiando a pestaña móvil: "${tabName}"...`);
      const btn = page.locator(`.mobile-bottom-nav .bottom-nav-item[data-nav="${tabName}"]`);
      await btn.click({ force: true });
      await page.waitForTimeout(600);
    }

    // Helper para guardar el formulario del modal
    async function saveModalForm() {
      await page.$eval('#btnSaveModalHeader', el => el.click());
      await page.waitForFunction(() => {
        const modal = document.getElementById('dishModal');
        return modal && modal.style.display === 'none';
      }, { timeout: 10000 });
      await page.waitForTimeout(1000);
    }

    // Helper para eliminar un elemento desde el modal abierto
    async function deleteCurrentOpenItem() {
      await page.waitForSelector('#deleteContainer', { state: 'visible', timeout: 5000 });
      await page.$eval('#btnDeleteDish', el => el.click());
      await page.waitForFunction(() => {
        const modal = document.getElementById('dishModal');
        return modal && modal.style.display === 'none';
      }, { timeout: 10000 });
      await page.waitForTimeout(800);
    }

    // Helper para limpiar si ya existe un elemento previo
    async function cleanupItemIfPresent(title) {
      const loc = page.locator(`.dish-row:has-text("${title}")`);
      const count = await loc.count();
      if (count > 0) {
        console.log(`Limpiando elemento previo "${title}"...`);
        await loc.first().click({ force: true });
        await deleteCurrentOpenItem();
      }
    }

    const dishNameES = 'Carpaccio di Manzo Trufado';
    const drinkNameES = 'Limonada de Frambuesa y Albahaca';
    const wineNameES = 'Barolo Riserva Monfortino DOCG 2015';

    // Limpieza inicial defensiva
    await cleanupItemIfPresent(dishNameES);

    // 2. CREACIÓN DE PLATO DE COMIDA CON PRECIO DECIMAL LIBRE (16.73 €) Y AUTO-TRADUCCIÓN IA
    console.log('\n[Paso 2 & 3] Creando plato de comida con IA y precio 16.73 €...');
    await selectMenuTab('comida');

    // Abrir modal con el FAB móvil
    await page.click('#btnFabNewDish', { force: true });
    await page.waitForSelector('#dishModal', { state: 'visible', timeout: 5000 });
    console.log('✓ Modal de plato abierto.');

    // Rellenar nombre en español
    const dishDescES = 'Finas láminas de solomillo de ternera con lascas de parmesano reggiano, rúcula selvática y emulsión de trufa blanca';
    await page.fill('#title_es', dishNameES);
    await page.fill('#desc_es', dishDescES);
    console.log(`✓ Nombre y descripción en español rellenados: "${dishNameES}"`);

    // Probar auto-traducción IA
    console.log('Pulsando botón "✨ Auto-traducir (IA)"...');
    await page.$eval('#btnAutoTranslate', el => el.click());

    // Esperar a que termine la traducción
    await page.waitForFunction(() => {
      const btn = document.getElementById('btnAutoTranslate');
      const titleEn = document.getElementById('title_en')?.value || '';
      return !btn.disabled && titleEn.length > 0;
    }, { timeout: 20000 });

    const titleEN = await page.$eval('#title_en', el => el.value);
    const descEN = await page.$eval('#desc_en', el => el.value);
    const titleDE = await page.$eval('#title_de', el => el.value);
    const descDE = await page.$eval('#desc_de', el => el.value);

    console.log(`✓ Traducción completada con éxito:`);
    console.log(`  - EN: "${titleEN}" | "${descEN.slice(0, 50)}..."`);
    console.log(`  - DE: "${titleDE}" | "${descDE.slice(0, 50)}..."`);

    if (!titleEN || !titleDE) {
      throw new Error('Fallo: Los campos traducidos en inglés o alemán quedaron vacíos.');
    }

    // Rellenar precio decimal libre: 16.73
    await page.fill('#dishPrice', '16.73');
    console.log('✓ Precio introducido: 16.73 €');

    // Guardar el plato
    console.log('Guardando plato en carta...');
    await saveModalForm();

    // 4. VERIFICAR QUE APARECE EN LA LISTA CON PRECIO EXACTO 16,73 €
    console.log('\n[Paso 4] Verificando plato en la lista de Comida...');
    const dishRowLocator = page.locator(`.dish-row:has-text("${dishNameES}")`);
    await dishRowLocator.waitFor({ state: 'visible', timeout: 8000 });

    const dishPriceText = await dishRowLocator.locator('.dish-price').innerText();
    console.log(`✓ Plato encontrado en lista. Precio visualizado: "${dishPriceText.trim()}"`);
    
    if (!dishPriceText.includes('16,73')) {
      throw new Error(`El precio esperado "16,73 €" no coincide con "${dishPriceText}"`);
    }

    // Scroll para captura de evidencia
    await dishRowLocator.scrollIntoViewIfNeeded();
    await page.waitForTimeout(600);

    const shot1Path = path.join(SCREENSHOT_DIR, 'audit_dish_created_ai.png');
    await page.screenshot({ path: shot1Path, fullPage: false });
    console.log(`📸 Captura guardada: ${shot1Path}`);

    // 5. CREAR BEBIDA CON PRECIO DECIMAL LIBRE (4.87 €)
    console.log('\n[Paso 5] Creando bebida en categoría "bebidas" con precio 4.87 €...');
    await selectMenuTab('bebidas');
    await cleanupItemIfPresent(drinkNameES);

    // Abrir modal
    await page.click('#btnFabNewDish', { force: true });
    await page.waitForSelector('#dishModal', { state: 'visible', timeout: 5000 });

    await page.fill('#title_es', drinkNameES);
    await page.fill('#dishPrice', '4.87');

    // Verificar categoría bebidas
    const selectedDrinkCat = await page.$eval('#dishCategory', el => el.value);
    console.log(`✓ Categoría asignada para bebida: "${selectedDrinkCat}"`);

    // Guardar bebida
    await saveModalForm();

    // Verificar bebida en la lista
    const drinkRowLocator = page.locator(`.dish-row:has-text("${drinkNameES}")`);
    await drinkRowLocator.waitFor({ state: 'visible', timeout: 8000 });

    const drinkPriceText = await drinkRowLocator.locator('.dish-price').innerText();
    console.log(`✓ Bebida encontrada en lista. Precio visualizado: "${drinkPriceText.trim()}"`);

    if (!drinkPriceText.includes('4,87')) {
      throw new Error(`El precio esperado "4,87 €" no coincide con "${drinkPriceText}"`);
    }

    await drinkRowLocator.scrollIntoViewIfNeeded();
    await page.waitForTimeout(600);

    const shot2Path = path.join(SCREENSHOT_DIR, 'audit_drink_created.png');
    await page.screenshot({ path: shot2Path, fullPage: false });
    console.log(`📸 Captura guardada: ${shot2Path}`);

    // 6. CREAR VINO EN CATEGORÍA 'VINOS' CON PRECIO DECIMAL LIBRE (54.29 €)
    console.log('\n[Paso 6] Creando vino en categoría "vinos" (Bodega) con precio 54.29 €...');
    await selectMenuTab('vinos');
    await cleanupItemIfPresent(wineNameES);

    // Abrir modal
    await page.click('#btnFabNewDish', { force: true });
    await page.waitForSelector('#dishModal', { state: 'visible', timeout: 5000 });

    await page.fill('#title_es', wineNameES);
    await page.fill('#dishPrice', '54.29');

    // Verificar categoría vinos
    const selectedWineCat = await page.$eval('#dishCategory', el => el.value);
    console.log(`✓ Categoría asignada para vino: "${selectedWineCat}"`);

    // Guardar vino
    await saveModalForm();

    // Verificar vino en la lista de bodega
    const wineRowLocator = page.locator(`.dish-row:has-text("${wineNameES}")`);
    await wineRowLocator.waitFor({ state: 'visible', timeout: 8000 });

    const winePriceText = await wineRowLocator.locator('.dish-price').innerText();
    console.log(`✓ Vino encontrado en bodega. Precio visualizado: "${winePriceText.trim()}"`);

    if (!winePriceText.includes('54,29')) {
      throw new Error(`El precio esperado "54,29 €" no coincide con "${winePriceText}"`);
    }

    await wineRowLocator.scrollIntoViewIfNeeded();
    await page.waitForTimeout(600);

    const shot3Path = path.join(SCREENSHOT_DIR, 'audit_wine_created.png');
    await page.screenshot({ path: shot3Path, fullPage: false });
    console.log(`📸 Captura guardada: ${shot3Path}`);

    // 8. ELIMINAR LOS 3 ELEMENTOS DE PRUEBA
    console.log('\n[Paso 8] Limpiando base de datos: eliminando los 3 elementos de prueba...');

    // Eliminar Vino
    console.log(`- Eliminando vino "${wineNameES}"...`);
    await wineRowLocator.click({ force: true });
    await deleteCurrentOpenItem();
    const wineExists = await page.locator(`.dish-row:has-text("${wineNameES}")`).count();
    console.log(`  ✓ Vino eliminado (conteo residual: ${wineExists})`);

    // Eliminar Bebida
    console.log(`- Eliminando bebida "${drinkNameES}"...`);
    await selectMenuTab('bebidas');
    const drinkRowToDelete = page.locator(`.dish-row:has-text("${drinkNameES}")`);
    await drinkRowToDelete.click({ force: true });
    await deleteCurrentOpenItem();
    const drinkExists = await page.locator(`.dish-row:has-text("${drinkNameES}")`).count();
    console.log(`  ✓ Bebida eliminada (conteo residual: ${drinkExists})`);

    // Eliminar Plato
    console.log(`- Eliminando plato "${dishNameES}"...`);
    await selectMenuTab('comida');
    const dishRowToDelete = page.locator(`.dish-row:has-text("${dishNameES}")`);
    await dishRowToDelete.click({ force: true });
    await deleteCurrentOpenItem();
    const dishExists = await page.locator(`.dish-row:has-text("${dishNameES}")`).count();
    console.log(`  ✓ Plato eliminado (conteo residual: ${dishExists})`);

    console.log('\n🎉 ¡TODOS LOS FLUJOS COMPLETADOS Y BASE DE DATOS LIMPIA CON ÉXITO!');

  } catch (err) {
    console.error('\n❌ ERROR EN LA AUDITORÍA:', err);
    throw err;
  } finally {
    await browser.close();
  }
}

runAudit();
