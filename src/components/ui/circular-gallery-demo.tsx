"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import {
  CircularGallery,
  type CircularGalleryRef,
  type GalleryItem,
} from "@/components/ui/circular-gallery-2";

type Language = "es" | "en" | "de";

export const galleryItemsByLang: Record<Language, GalleryItem[]> = {
  es: [
    {
      image: "/assets/sobre-nosotros/galeria_laporte.webp",
      text: "Visita de Aymeric Laporte",
      subtitle: "El dueño del restaurante junto al futbolista internacional, campeón de la Eurocopa con la Selección Española",
    },
    { image: "/assets/sobre-nosotros/galeria_01.webp", text: "Nuestra Carta & Bienvenida" },
    { image: "/assets/sobre-nosotros/galeria_02.webp", text: "Pizzería & Restaurante" },
    { image: "/assets/sobre-nosotros/galeria_03.webp", text: "Vistas al Puerto Deportivo" },
    { image: "/assets/sobre-nosotros/galeria_04.webp", text: "Mesa Preparada" },
    { image: "/assets/sobre-nosotros/galeria_05.webp", text: "Nuestra Terraza Climatizada" },
    { image: "/assets/sobre-nosotros/galeria_06.webp", text: "Noches en Buon Appetito" },
    { image: "/assets/sobre-nosotros/galeria_07.webp", text: "Punto de Encuentro" },
    { image: "/assets/sobre-nosotros/galeria_08.webp", text: "Atardecer Mediterráneo" },
  ],
  en: [
    {
      image: "/assets/sobre-nosotros/galeria_laporte.webp",
      text: "Visit of Aymeric Laporte",
      subtitle: "Restaurant owner with international football star, European champion with the Spanish national team",
    },
    { image: "/assets/sobre-nosotros/galeria_01.webp", text: "Our Menu & Welcome" },
    { image: "/assets/sobre-nosotros/galeria_02.webp", text: "Pizzeria & Restaurant" },
    { image: "/assets/sobre-nosotros/galeria_03.webp", text: "Marina Harbor Views" },
    { image: "/assets/sobre-nosotros/galeria_04.webp", text: "Table Prepared" },
    { image: "/assets/sobre-nosotros/galeria_05.webp", text: "Our Heated Terrace" },
    { image: "/assets/sobre-nosotros/galeria_06.webp", text: "Evenings at Buon Appetito" },
    { image: "/assets/sobre-nosotros/galeria_07.webp", text: "Meeting Point by the Port" },
    { image: "/assets/sobre-nosotros/galeria_08.webp", text: "Mediterranean Sunset" },
  ],
  de: [
    {
      image: "/assets/sobre-nosotros/galeria_laporte.webp",
      text: "Besuch von Aymeric Laporte",
      subtitle: "Der Restaurantbesitzer mit dem internationalen Fußballstar, Europameister mit der spanischen Nationalmannschaft",
    },
    { image: "/assets/sobre-nosotros/galeria_01.webp", text: "Unsere Karte & Willkommen" },
    { image: "/assets/sobre-nosotros/galeria_02.webp", text: "Pizzeria & Restaurant" },
    { image: "/assets/sobre-nosotros/galeria_03.webp", text: "Blick auf den Yachthafen" },
    { image: "/assets/sobre-nosotros/galeria_04.webp", text: "Gedeckter Tisch" },
    { image: "/assets/sobre-nosotros/galeria_05.webp", text: "Unsere beheizte Terrasse" },
    { image: "/assets/sobre-nosotros/galeria_06.webp", text: "Abende im Buon Appetito" },
    { image: "/assets/sobre-nosotros/galeria_07.webp", text: "Treffpunkt an der Hafenpromenade" },
    { image: "/assets/sobre-nosotros/galeria_08.webp", text: "Mediterraner Sonnenuntergang" },
  ],
};

export const authenticGalleryItems = galleryItemsByLang.es;

const swipeHints: Record<Language, string> = {
  es: "desliza · toca para ampliar",
  en: "swipe · tap to enlarge",
  de: "wischen · tippen zum vergrößern",
};

/**
 * Responsive circular 3D gallery with:
 * - Larger, majestic card frames
 * - No text clutter below images
 * - Tap-to-open lightbox modal (stops autoplay when opened)
 * - Ultra-slow delicate autoplay (0.05)
 * - Discreet bottom navigation buttons
 */
export default function CircularGalleryDemo() {
  const galleryRef = useRef<CircularGalleryRef>(null);
  const [lang, setLang] = useState<Language>("es");
  const [activeModalIndex, setActiveModalIndex] = useState<number | null>(null);

  useEffect(() => {
    let initialLang: Language = "es";
    try {
      const stored = localStorage.getItem("buon_appetito_lang") || localStorage.getItem("preferred_language");
      if (stored === "es" || stored === "en" || stored === "de") initialLang = stored;
    } catch (e) {}
    setLang(initialLang);

    const handleLang = (e: any) => {
      if (e.detail?.lang && ["es", "en", "de"].includes(e.detail.lang)) {
        setLang(e.detail.lang);
      }
    };

    window.addEventListener("buon:languageChange", handleLang);
    return () => window.removeEventListener("buon:languageChange", handleLang);
  }, []);

  const activeItems = galleryItemsByLang[lang] || galleryItemsByLang.es;
  const activeItem =
    activeModalIndex !== null ? activeItems[activeModalIndex] : null;

  const handleOpenPhoto = useCallback((_item: GalleryItem, index: number) => {
    setActiveModalIndex(index);
  }, []);

  const handleCloseModal = useCallback(() => {
    setActiveModalIndex(null);
  }, []);

  const handleNextPhoto = useCallback(() => {
    setActiveModalIndex((prev) =>
      prev !== null ? (prev + 1) % activeItems.length : null,
    );
  }, [activeItems]);

  const handlePrevPhoto = useCallback(() => {
    setActiveModalIndex((prev) =>
      prev !== null
        ? (prev - 1 + activeItems.length) % activeItems.length
        : null,
    );
  }, [activeItems]);

  // Keyboard navigation & escape to close
  useEffect(() => {
    if (activeModalIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleCloseModal();
      if (e.key === "ArrowRight") handleNextPhoto();
      if (e.key === "ArrowLeft") handlePrevPhoto();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeModalIndex, handleCloseModal, handleNextPhoto, handlePrevPhoto]);

  return (
    <div className="relative w-full flex flex-col items-center pb-2">
      {/* 3D WebGL Curved Gallery Canvas with larger majestic card frames */}
      <div className="relative h-[390px] sm:h-[450px] md:h-[490px] w-full overflow-hidden select-none">
        <CircularGallery
          ref={galleryRef}
          items={activeItems}
          bend={1.8}
          borderRadius={0.065}
          scrollEase={0.045}
          autoplay={activeModalIndex === null} // Pauses autoplay when modal is open
          autoplaySpeed={0.015} // Velocidad pausada, elegante y relajada (aprox. 3 veces más lenta)
          pauseOnHover={true}
          onItemClick={handleOpenPhoto}
        />
      </div>

      {/* Discreet Navigation Controls Below (Clean, Minimal & Non-Intrusive) */}
      <div className="mt-2 sm:mt-3 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => galleryRef.current?.prev()}
          aria-label={lang === "de" ? "Vorheriges Foto" : lang === "en" ? "Previous photo" : "Foto anterior"}
          className="group flex items-center justify-center w-11 h-11 rounded-full bg-white/80 dark:bg-[#183321]/50 backdrop-blur-md border border-[#183321]/15 hover:border-[#183321]/30 hover:bg-white text-[#183321] dark:text-[#E8E4DC] active:scale-90 transition-all duration-200 shadow-sm cursor-pointer"
        >
          <svg
            className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <span className="text-[11px] sm:text-[12px] font-sans tracking-[0.18em] text-[#142318] uppercase select-none px-2 py-0.5 rounded bg-[#ECE6DC]">
          {swipeHints[lang] || swipeHints.es}
        </span>

        <button
          type="button"
          onClick={() => galleryRef.current?.next()}
          aria-label={lang === "de" ? "Nächstes Foto" : lang === "en" ? "Next photo" : "Foto siguiente"}
          className="group flex items-center justify-center w-11 h-11 rounded-full bg-white/80 dark:bg-[#183321]/50 backdrop-blur-md border border-[#183321]/15 hover:border-[#183321]/30 hover:bg-white text-[#183321] dark:text-[#E8E4DC] active:scale-90 transition-all duration-200 shadow-sm cursor-pointer"
        >
          <svg
            className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Lightbox Modal (Tap-to-Enlarge with Paused Autoplay) */}
      {activeItem && activeModalIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={handleCloseModal}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-black/85 backdrop-blur-md transition-opacity duration-300"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={handleCloseModal}
            aria-label="Cerrar foto"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-lg flex items-center justify-center transition-all cursor-pointer active:scale-90"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Modal content (prevents closing when clicking inside image container) */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-lg sm:max-w-2xl w-full flex flex-col items-center"
          >
            {/* Enlarged image container */}
            <div className="relative w-full max-h-[75vh] flex items-center justify-center overflow-hidden rounded-2xl sm:rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.6)] ring-1 ring-white/20 bg-black/50">
              <img
                src={activeItem.image}
                alt={activeItem.text || "Buon Appetito"}
                className="w-auto h-auto max-h-[75vh] max-w-full object-contain rounded-2xl sm:rounded-3xl"
              />
            </div>

            {/* Caption & Counter */}
            <div className="mt-4 flex items-start justify-between w-full px-2 text-white/90 gap-4">
              <div className="flex flex-col text-left">
                <span className="font-serif text-base sm:text-lg font-medium tracking-wide">
                  {activeItem.text}
                </span>
                {activeItem.subtitle && (
                  <span className="text-xs sm:text-sm text-white/75 font-sans mt-0.5 font-light">
                    {activeItem.subtitle}
                  </span>
                )}
              </div>
              <span className="text-xs text-white/60 font-mono shrink-0 pt-0.5">
                {activeModalIndex + 1} / {authenticGalleryItems.length}
              </span>
            </div>

            {/* Modal Prev / Next Controls */}
            <div className="mt-3 flex items-center gap-4">
              <button
                type="button"
                onClick={handlePrevPhoto}
                aria-label="Foto anterior"
                className="flex items-center justify-center w-11 h-11 rounded-full bg-white/15 hover:bg-white/25 text-white active:scale-90 transition-all cursor-pointer"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                type="button"
                onClick={handleNextPhoto}
                aria-label="Foto siguiente"
                className="flex items-center justify-center w-11 h-11 rounded-full bg-white/15 hover:bg-white/25 text-white active:scale-90 transition-all cursor-pointer"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
