"use client";

import * as React from "react";
import { Alert, AlertContent, AlertTitle, AlertDescription } from "./alert";
import { Button } from "./button";
import { X } from "lucide-react";

const COOKIE_STORAGE_KEY = "buon_appetito_cookie_consent";

const TEXTS: Record<string, { title: string; desc: string; link: string; accept: string; decline: string }> = {
  es: {
    title: "Valoramos tu Privacidad 🍪",
    desc: "Utilizamos cookies necesarias para el funcionamiento y analíticas para optimizar tu experiencia en el puerto.",
    link: "Política de Cookies",
    accept: "Aceptar",
    decline: "Rechazar",
  },
  en: {
    title: "We Value Your Privacy 🍪",
    desc: "We use essential cookies for website functionality and analytics to optimize your experience by the harbor.",
    link: "Cookie Policy",
    accept: "Accept",
    decline: "Decline",
  },
  de: {
    title: "Wir schätzen Ihre Privatsphäre 🍪",
    desc: "Wir verwenden funktionale Cookies sowie Analysen, um Ihr Erlebnis an der Hafenpromenade zu verbessern.",
    link: "Cookie-Richtlinie",
    accept: "Akzeptieren",
    decline: "Ablehnen",
  },
};

function recordConsentInInsForge(decision: "accepted" | "declined", language: string) {
  try {
    const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;
    const pagePath = typeof window !== "undefined" ? window.location.pathname : "/";
    const payload = JSON.stringify([{
      decision,
      language: language || "es",
      device_type: isMobile ? "mobile" : "desktop",
      page_path: pagePath
    }]);

    fetch("https://pz3qiueg.eu-central.insforge.app/api/database/records/web_cookie_consents", {
      method: "POST",
      headers: {
        "apikey": "anon_64c904f7d36d64a81882dd8b41b193c03240d144f6de6a656b1d85ba0683ccec",
        "Authorization": "Bearer anon_64c904f7d36d64a81882dd8b41b193c03240d144f6de6a656b1d85ba0683ccec",
        "Content-Type": "application/json"
      },
      body: payload,
      keepalive: true
    }).catch(() => {});
  } catch (e) {}
}

export function AlertCookieNotice() {
  const [isVisible, setIsVisible] = React.useState(false);
  const [lang, setLang] = React.useState<"es" | "en" | "de">("es");
  const [hasScrolledPastHero, setHasScrolledPastHero] = React.useState(false);

  // Inicializar idioma y escuchar cambios
  React.useEffect(() => {
    try {
      const savedLang = (localStorage.getItem("buon_appetito_lang") ||
        localStorage.getItem("preferred_language") ||
        "es") as "es" | "en" | "de";
      if (TEXTS[savedLang]) setLang(savedLang);
    } catch (e) {}

    const handleLangChange = (e: CustomEvent<{ lang: "es" | "en" | "de" }>) => {
      if (e.detail?.lang && TEXTS[e.detail.lang]) {
        setLang(e.detail.lang);
      }
    };

    window.addEventListener("buon:languageChange" as any, handleLangChange);
    return () => {
      window.removeEventListener("buon:languageChange" as any, handleLangChange);
    };
  }, []);

  // REGLA DE ORO: Aparecer únicamente a partir de la segunda sección (#sobre-nosotros)
  // Jamás en el Hero para no tapar el vídeo ni la experiencia de entrada
  React.useEffect(() => {
    // Si ya existe consentimiento previo, no mostrar automáticamente
    let currentConsent: string | null = null;
    try {
      currentConsent = localStorage.getItem(COOKIE_STORAGE_KEY);
    } catch (e) {}

    const aboutSection = document.getElementById("sobre-nosotros");

    if (aboutSection) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            // Cuando la segunda sección entra en pantalla o el usuario bajó más
            if (entry.isIntersecting || entry.boundingClientRect.top < window.innerHeight) {
              setHasScrolledPastHero(true);
              if (!currentConsent) {
                setIsVisible(true);
              }
            }
          });
        },
        { threshold: 0.15 }
      );

      observer.observe(aboutSection);

      // Fallback por scroll si la sección tarda en renderizar
      const handleScroll = () => {
        if (window.scrollY > 350) {
          setHasScrolledPastHero(true);
          if (!currentConsent) {
            setIsVisible(true);
          }
        }
      };

      window.addEventListener("scroll", handleScroll, { passive: true });

      return () => {
        observer.disconnect();
        window.removeEventListener("scroll", handleScroll);
      };
    } else {
      // Si estamos en una página sin #sobre-nosotros (como carta o vinos), aparecer tras breve scroll
      const handleGeneralScroll = () => {
        if (window.scrollY > 200) {
          setHasScrolledPastHero(true);
          if (!currentConsent) {
            setIsVisible(true);
          }
        }
      };
      window.addEventListener("scroll", handleGeneralScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleGeneralScroll);
    }
  }, []);

  // Conexión con el Footer: Permitir reabrir el banner si el usuario lo solicita
  React.useEffect(() => {
    const handleReopen = () => {
      setIsVisible(true);
    };

    window.addEventListener("buon:openCookieBanner", handleReopen);
    (window as any).openBuonCookieBanner = handleReopen;

    return () => {
      window.removeEventListener("buon:openCookieBanner", handleReopen);
      delete (window as any).openBuonCookieBanner;
    };
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem(COOKIE_STORAGE_KEY, "accepted");
    } catch (e) {}

    // Enviar consentimiento anónimo a InsForge (web_cookie_consents)
    recordConsentInInsForge("accepted", lang);

    // Activar Microsoft Clarity si está disponible
    if (typeof (window as any).clarity === "function") {
      try {
        (window as any).clarity("consent");
      } catch (e) {}
    }

    setIsVisible(false);
  };

  const handleDecline = () => {
    try {
      localStorage.setItem(COOKIE_STORAGE_KEY, "declined");
    } catch (e) {}

    // Enviar consentimiento anónimo a InsForge (web_cookie_consents)
    recordConsentInInsForge("declined", lang);

    setIsVisible(false);
  };

  if (!isVisible) return null;

  const t = TEXTS[lang] || TEXTS.es;

  return (
    <div
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 z-[100] max-w-[420px] mx-auto sm:mx-0 animate-in fade-in slide-in-from-bottom-5 duration-500 ease-out"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <Alert
        className="w-full bg-[#FAF8F5]/95 backdrop-blur-xl border border-[#D9D4CC] shadow-[0_20px_50px_rgba(24,51,33,0.22)] rounded-2xl"
        layout="complex"
        isNotification
        size="lg"
        action={
          <Button
            variant="ghost"
            onClick={handleDecline}
            className="group -my-1.5 -me-1.5 size-8 p-0 hover:bg-black/5 rounded-full cursor-pointer"
            aria-label="Cerrar aviso de cookies"
          >
            <X
              size={17}
              strokeWidth={2}
              className="text-[#183321]/60 transition-opacity group-hover:text-[#183321] group-hover:opacity-100"
            />
          </Button>
        }
      >
        <AlertContent className="pr-1">
          <AlertTitle className="font-boska text-lg sm:text-xl font-normal text-[#183321] tracking-tight">
            {t.title}
          </AlertTitle>
          <AlertDescription className="text-xs sm:text-[13px] text-[#424842] leading-relaxed pt-0.5">
            {t.desc}{" "}
            <a
              href="/cookies"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#9E4221] underline hover:text-[#183321] font-medium transition-colors"
            >
              {t.link}
            </a>
            .
          </AlertDescription>
          <div className="flex items-center gap-2.5 pt-3.5">
            <Button
              size="sm"
              onClick={handleAccept}
              className="bg-[#183321] text-white hover:bg-[#254d32] font-satoshi text-xs font-semibold px-5 py-2 rounded-xl shadow-md cursor-pointer"
            >
              {t.accept}
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={handleDecline}
              className="border-[#D9D4CC] text-[#183321] hover:bg-black/5 font-satoshi text-xs font-medium px-4 py-2 rounded-xl cursor-pointer"
            >
              {t.decline}
            </Button>
          </div>
        </AlertContent>
      </Alert>
    </div>
  );
}

export default AlertCookieNotice;
