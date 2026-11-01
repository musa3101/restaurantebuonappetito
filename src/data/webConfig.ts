// web/src/data/webConfig.ts
// Configuración Global y Respaldo Híbrido (Static-First) para Buon Appetito
// Sincronizable en vivo con InsForge (tabla: web_config)

export interface WebConfig {
  siteName: string;
  phone: string;
  phoneRaw: string;
  email: string;
  address: string;
  instagramUrl: string;
  googleMapsUrl: string;
  tripAdvisorUrl: string;
  bookingUrl: string;
  openingHours: {
    es: string;
    en: string;
    de: string;
  };
}

export const DEFAULT_WEB_CONFIG: WebConfig = {
  siteName: "Buon Appetito",
  phone: "+34 632 44 60 64",
  phoneRaw: "+34632446064",
  email: "buonappetitoandratx@gmail.com",
  address: "Avenida Mateo Bosch, 24, Port d'Andratx",
  instagramUrl: "https://www.instagram.com/buonappetitomallorca/",
  googleMapsUrl: "https://maps.app.goo.gl/nC1F69YNFf4TghwD6",
  tripAdvisorUrl: "https://www.tripadvisor.es/Restaurant_Review-g616239-d24183908-Reviews-Grand_Pasta-Port_d_Andratx_Majorca_Balearic_Islands.html",
  bookingUrl: "https://www.bavoli.com/book/buon-appetito",
  openingHours: {
    es: "Lunes a Domingo: 11:30 - 23:30",
    en: "Monday to Sunday: 11:30 AM - 11:30 PM",
    de: "Montag bis Sonntag: 11:30 - 23:30"
  }
};

const INSFORGE_URL = 'https://pz3qiueg.eu-central.insforge.app';
const INSFORGE_ANON = 'anon_64c904f7d36d64a81882dd8b41b193c03240d144f6de6a656b1d85ba0683ccec';

/**
 * Obtiene la configuración de la web.
 * Intenta consultar InsForge (web_config) y si falla o tarda, retorna DEFAULT_WEB_CONFIG de inmediato.
 */
export async function getLiveWebConfig(): Promise<WebConfig> {
  if (typeof window === 'undefined') {
    return DEFAULT_WEB_CONFIG;
  }

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 2000);

    const res = await fetch(`${INSFORGE_URL}/api/database/records/web_config?limit=1`, {
      headers: {
        'apikey': INSFORGE_ANON,
        'Authorization': `Bearer ${INSFORGE_ANON}`
      },
      signal: controller.signal
    });

    clearTimeout(timeout);

    if (res.ok) {
      const data = await res.json();
      const row = Array.isArray(data) ? data[0] : (data?.data?.[0] || data?.rows?.[0]);
      if (row) {
        return {
          siteName: row.site_name || DEFAULT_WEB_CONFIG.siteName,
          phone: row.phone || DEFAULT_WEB_CONFIG.phone,
          phoneRaw: row.phone_raw || DEFAULT_WEB_CONFIG.phoneRaw,
          email: row.email || DEFAULT_WEB_CONFIG.email,
          address: row.address || DEFAULT_WEB_CONFIG.address,
          instagramUrl: row.instagram_url || DEFAULT_WEB_CONFIG.instagramUrl,
          googleMapsUrl: row.google_maps_url || DEFAULT_WEB_CONFIG.googleMapsUrl,
          tripAdvisorUrl: row.tripadvisor_url || DEFAULT_WEB_CONFIG.tripAdvisorUrl,
          bookingUrl: row.booking_url || DEFAULT_WEB_CONFIG.bookingUrl,
          openingHours: {
            es: row.opening_hours_es || DEFAULT_WEB_CONFIG.openingHours.es,
            en: row.opening_hours_en || DEFAULT_WEB_CONFIG.openingHours.en,
            de: row.opening_hours_de || DEFAULT_WEB_CONFIG.openingHours.de
          }
        };
      }
    }
  } catch (e) {
    // Fallback transparente sin bloquear la experiencia de usuario
  }

  return DEFAULT_WEB_CONFIG;
}
