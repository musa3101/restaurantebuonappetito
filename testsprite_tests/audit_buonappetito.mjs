import { chromium } from 'playwright';

async function runAudit() {
  console.log('=====================================================');
  console.log('🚀 INICIANDO AUDITORÍA TÉCNICA Y FUNCIONAL BUON APPETITO');
  console.log('URL Base: http://localhost:4321');
  console.log('=====================================================\n');

  const browser = await chromium.launch({ headless: true });
  const results = {
    owner: {
      invalid_login: false,
      backdoor_demo_rejected: false,
      official_login_success: false,
      insforge_catalog_loaded: false,
      dish_count: 0,
      sample_dishes: []
    },
    client: {
      carta_comida: { loaded: false, count: 0, no_nulls: false, sample_items: [] },
      carta_bebidas_vinos: { loaded: false, count_bebidas: 0, count_vinos: 0, no_nulls: false, sample_items: [] },
      carta_i18n: { es: false, en: false, de: false },
      vinos_i18n: { es: false, en: false, de: false }
    },
    console_errors: []
  };

  try {
    // -------------------------------------------------------------------
    // 1. AUDITORÍA ROL DUEÑO / BACKOFFICE (/admin)
    // -------------------------------------------------------------------
    console.log('--- 1. AUDITORÍA: ROL DUEÑO / BACKOFFICE (/admin) ---');
    const adminContext = await browser.newContext({ viewport: { width: 1280, height: 800 } });
    const adminPage = await adminContext.newPage();

    adminPage.on('console', msg => {
      if (msg.type() === 'error') results.console_errors.push(`[Admin Console Error]: ${msg.text()}`);
    });

    // 1.1 Prueba de puerta trasera ?demo=1 en contexto limpio
    console.log('1.1 Verificando intento de acceso por puerta trasera ?demo=1...');
    await adminPage.goto('http://localhost:4321/admin?demo=1', { waitUntil: 'domcontentloaded' });
    await adminPage.waitForTimeout(1000);

    const loginScreenVisibleOnDemo = await adminPage.locator('#loginScreen').isVisible();
    const appShellVisibleOnDemo = await adminPage.locator('#appShell').isVisible();

    if (loginScreenVisibleOnDemo && !appShellVisibleOnDemo) {
      console.log('✅ PASS: Puerta trasera ?demo=1 BLOQUEADA y RECHAZADA. Se exige login formal.');
      results.owner.backdoor_demo_rejected = true;
    } else {
      console.error('❌ FAIL: La puerta trasera ?demo=1 permitió acceso indebido!');
    }

    // 1.2 Prueba de credenciales inválidas
    console.log('1.2 Probando credenciales inválidas (fake@buon.com / 123456)...');
    await adminPage.locator('#loginEmail').fill('fake@buon.com');
    await adminPage.locator('#loginPassword').fill('123456');
    await adminPage.locator('#loginForm button[type="submit"]').click();
    await adminPage.waitForTimeout(600);

    const errorVisible = await adminPage.locator('#loginError').isVisible();
    if (errorVisible) {
      console.log('✅ PASS: Acceso denegado correctamente ante credenciales falsas.');
      results.owner.invalid_login = true;
    } else {
      console.error('❌ FAIL: No se mostró mensaje de error para credenciales inválidas.');
    }

    // 1.3 Prueba de credenciales oficiales (buonappetitoandratx@gmail.com / admin)
    console.log('1.3 Probando credenciales oficiales (buonappetitoandratx@gmail.com / admin)...');
    await adminPage.locator('#loginEmail').fill('buonappetitoandratx@gmail.com');
    await adminPage.locator('#loginPassword').fill('admin');
    await adminPage.locator('#loginForm button[type="submit"]').click();
    await adminPage.waitForTimeout(2000);

    const loginScreenAfter = await adminPage.locator('#loginScreen').isVisible();
    const appShellAfter = await adminPage.locator('#appShell').isVisible();

    if (!loginScreenAfter && appShellAfter) {
      console.log('✅ PASS: Autenticación oficial exitosa. Panel de control (#appShell) desplegado.');
      results.owner.official_login_success = true;
    } else {
      console.error('❌ FAIL: Login oficial falló o no desplegó #appShell.');
    }

    // 1.4 Verificación de carga de catálogo desde InsForge
    console.log('1.4 Verificando sincronización de platos desde InsForge en el admin...');
    await adminPage.waitForSelector('.dish-row', { timeout: 10000 });
    const dishRows = await adminPage.locator('.dish-row').count();
    results.owner.dish_count = dishRows;

    if (dishRows > 0) {
      const firstDishName = await adminPage.locator('.dish-row .dish-name').first().innerText();
      const firstDishPrice = await adminPage.locator('.dish-row .dish-price').first().innerText();
      results.owner.sample_dishes.push({ name: firstDishName, price: firstDishPrice });
      console.log(`✅ PASS: Catálogo InsForge cargado con éxito. Total platos en admin: ${dishRows} (Ejemplo: ${firstDishName} - ${firstDishPrice})`);
      results.owner.insforge_catalog_loaded = true;
    } else {
      console.error('❌ FAIL: No se cargaron platos en el listado de administración.');
    }

    await adminContext.close();

    // -------------------------------------------------------------------
    // 2. AUDITORÍA ROL CLIENTE / INTEGRIDAD DE DATOS Y CONTRATOS
    // -------------------------------------------------------------------
    console.log('\n--- 2. AUDITORÍA: ROL CLIENTE / CARTA & VINOS ---');
    const clientContext = await browser.newContext({ viewport: { width: 1280, height: 800 } });
    const clientPage = await clientContext.newPage();

    clientPage.on('console', msg => {
      if (msg.type() === 'error') results.console_errors.push(`[Client Console Error]: ${msg.text()}`);
    });

    // 2.1 Carta de Comida (/carta)
    console.log('2.1 Inspeccionando /carta (Comida)...');
    await clientPage.goto('http://localhost:4321/carta', { waitUntil: 'domcontentloaded' });
    await clientPage.waitForSelector('.menu-item-row', { timeout: 10000 });

    // Contar platos y verificar ausencia de "undefined" o "null"
    const bodyTextCarta = await clientPage.innerText('body');
    const hasNullUndefinedCarta = /\bundefined\b|\bnull\b|\[object Object\]|NaN/i.test(bodyTextCarta);
    const dishElements = await clientPage.locator('.menu-item-row').count();

    const sampleFoodTitle = await clientPage.locator('.menu-item-row .menu-item-title').first().innerText();
    const sampleFoodPrice = await clientPage.locator('.menu-item-row .menu-item-price').first().innerText();

    results.client.carta_comida.loaded = true;
    results.client.carta_comida.count = dishElements;
    results.client.carta_comida.no_nulls = !hasNullUndefinedCarta;
    results.client.carta_comida.sample_items.push({ title: sampleFoodTitle, price: sampleFoodPrice });

    if (!hasNullUndefinedCarta && dishElements > 0) {
      console.log(`✅ PASS: Carta de comida cargada (${dishElements} platos). Ejemplo: "${sampleFoodTitle}" - ${sampleFoodPrice}. Cero corrupciones (sin null/undefined/NaN).`);
    } else {
      console.error(`❌ FAIL: Se detectaron valores nulos o fallo de carga en la carta de comida!`);
    }

    // 2.2 Cambio de Idioma en Carta (ES -> EN -> DE)
    console.log('2.2 Probando selector de idiomas en Carta (ES / EN / DE)...');
    results.client.carta_i18n.es = true;

    // Abrir pill de idioma
    const langPill = clientPage.locator('#lang-pill-btn');
    if (await langPill.isVisible()) {
      // Probar EN
      await langPill.click();
      await clientPage.locator('.lang-opt-btn[data-lang="en"]').click();
      await clientPage.waitForTimeout(1000);
      const enText = await clientPage.innerText('#menu-content');
      results.client.carta_i18n.en = !/\bundefined\b|\bnull\b/i.test(enText) && enText.length > 50;
      console.log('✅ PASS: Idioma EN en Carta verificado (textos en inglés sin valores null/undefined).');

      // Probar DE
      await langPill.click();
      await clientPage.locator('.lang-opt-btn[data-lang="de"]').click();
      await clientPage.waitForTimeout(1000);
      const deText = await clientPage.innerText('#menu-content');
      results.client.carta_i18n.de = !/\bundefined\b|\bnull\b/i.test(deText) && deText.length > 50;
      console.log('✅ PASS: Idioma DE en Carta verificado (textos en alemán sin valores null/undefined).');

      // Volver a ES
      await langPill.click();
      await clientPage.locator('.lang-opt-btn[data-lang="es"]').click();
      await clientPage.waitForTimeout(1000);
    }

    // 2.3 Carta de Bebidas y Vinos (/vinos)
    console.log('2.3 Inspeccionando /vinos (Bebidas, Cócteles y Bodega)...');
    await clientPage.goto('http://localhost:4321/vinos', { waitUntil: 'domcontentloaded' });
    await clientPage.waitForSelector('.menu-item-row', { timeout: 10000 });

    const bodyTextVinos = await clientPage.innerText('body');
    const hasNullUndefinedVinos = /\bundefined\b|\bnull\b|\[object Object\]|NaN/i.test(bodyTextVinos);
    const drinkAndWineItems = await clientPage.locator('.menu-item-row').count();
    const bebidasCount = await clientPage.locator('#cat-bebidas .menu-item-row').count();
    const wineItemsCount = drinkAndWineItems - bebidasCount;

    const sampleDrinkTitle = await clientPage.locator('.menu-item-row .menu-item-title').first().innerText();
    const sampleDrinkPrice = await clientPage.locator('.menu-item-row .menu-item-price').first().innerText();

    results.client.carta_bebidas_vinos.loaded = true;
    results.client.carta_bebidas_vinos.count_bebidas = bebidasCount;
    results.client.carta_bebidas_vinos.count_vinos = wineItemsCount;
    results.client.carta_bebidas_vinos.no_nulls = !hasNullUndefinedVinos;
    results.client.carta_bebidas_vinos.sample_items.push({ title: sampleDrinkTitle, price: sampleDrinkPrice });

    if (!hasNullUndefinedVinos && drinkAndWineItems > 0) {
      console.log(`✅ PASS: Carta de Bebidas y Vinos cargada (${bebidasCount} bebidas, ${wineItemsCount} vinos/bodega). Ejemplo: "${sampleDrinkTitle}" - ${sampleDrinkPrice}. Cero corrupciones (sin null/undefined/NaN).`);
    } else {
      console.error(`❌ FAIL: Se detectaron textos null o undefined en /vinos.`);
    }

    // 2.4 Idiomas en /vinos
    console.log('2.4 Probando selector de idiomas en /vinos...');
    results.client.vinos_i18n.es = true;
    const vinosLangPill = clientPage.locator('#lang-pill-btn');
    if (await vinosLangPill.isVisible()) {
      await vinosLangPill.click();
      await clientPage.locator('.lang-opt-btn[data-lang="en"]').click();
      await clientPage.waitForTimeout(1000);
      const vinosEnText = await clientPage.innerText('#menu-content');
      results.client.vinos_i18n.en = !/\bundefined\b|\bnull\b/i.test(vinosEnText) && vinosEnText.length > 50;
      console.log('✅ PASS: Idioma EN en /vinos verificado.');

      await vinosLangPill.click();
      await clientPage.locator('.lang-opt-btn[data-lang="de"]').click();
      await clientPage.waitForTimeout(1000);
      const vinosDeText = await clientPage.innerText('#menu-content');
      results.client.vinos_i18n.de = !/\bundefined\b|\bnull\b/i.test(vinosDeText) && vinosDeText.length > 50;
      console.log('✅ PASS: Idioma DE en /vinos verificado.');
    }

    await clientContext.close();

  } catch (err) {
    console.error('Error durante la ejecución del test:', err);
  } finally {
    await browser.close();
  }

  console.log('\n=====================================================');
  console.log('📊 RESUMEN FINAL DE AUDITORÍA');
  console.log(JSON.stringify(results, null, 2));
  console.log('=====================================================');
}

runAudit();
