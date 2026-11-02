"use client";

import * as React from "react";

/*
 * Polaroid Line Carousel — infinite loop with continuous gentle drift & physics swing.
 * Clean vertical 3:4 photos with bold dish titles and smooth continuous movement.
 */

export type Slide = {
  image: string;
  title: string;
  alt?: string;
  objectPosition?: string;
};

export type PolaroidLineCarouselProps = {
  slides?: Slide[];
  /** Height of the carousel stage. Default clamp(490px, 62vh, 560px). */
  height?: number | string;
  /** Width of a print in px. */
  cardWidth?: number;
  /** How far the string sags in the middle, px. */
  sag?: number;
  /** How much the prints swing; 0 holds them still. */
  swing?: number;
  /** Continuous slow glide speed (px per frame). Default 0.36 (~21px/s). 0 disables drift. */
  autoplaySpeed?: number;
  /** Colour of the string. */
  string?: string;
  background?: string;
  ink?: string;
  className?: string;
  style?: React.CSSProperties;
  ariaLabel?: string;
};

export type Language = "es" | "en" | "de";

export const buonAppetitoDishesByLang: Record<Language, Slide[]> = {
  es: [
    // 1. Entrantes
    { image: "/assets/menu/menu_01.webp", title: "Bruschetta & Padrón", alt: "Bruschetta al Pomodoro y Pimientos de Padrón" },
    { image: "/assets/menu/menu_02.webp", title: "Chipirones Fritos", alt: "Chipirones fritos con salsa de yuzu" },
    { image: "/assets/menu/menu_03.webp", title: "Carpaccio de Ternera", alt: "Carpaccio de ternera con rúcula y parmesano" },
    { image: "/assets/menu/menu_04.webp", title: "Tataki de Atún Rojo", alt: "Tataki de atún rojo con salsa de soja" },
    // 2. Ensaladas
    { image: "/assets/menu/menu_05.webp", title: "Ensalada Pomodoro", alt: "Ensalada Pomodoro" },
    { image: "/assets/menu/menu_06.webp", title: "Ensalada Caprese", alt: "Ensalada Caprese con mozzarella di bufala" },
    { image: "/assets/menu/menu_07.webp", title: "Ensalada Thai", alt: "Ensalada Thai con gambas" },
    { image: "/assets/menu/menu_08.webp", title: "Ensalada Exótica", alt: "Ensalada exótica con pollo, mango y papaya" },
    // 3. Pastas
    { image: "/assets/menu/menu_09.webp", title: "Spaghetti Aglio e Olio", alt: "Spaghetti Aglio e Olio" },
    { image: "/assets/menu/menu_10.webp", title: "Tagliatelle con Trufa Fresca", alt: "Tagliatelle con Trufa Fresca" },
    { image: "/assets/menu/menu_11.webp", title: "Linguine ai Frutti di Mare", alt: "Linguine ai Frutti di Mare" },
    // 4. Pizzas
    { image: "/assets/menu/menu_12.webp", title: "Pizza Rúcula", alt: "Pizza Rúcula con jamón de Parma y lascas de parmesano" },
    { image: "/assets/menu/menu_13.webp", title: "Pizza Frutti di Mare", alt: "Pizza Frutti di Mare" },
    // 5. Arroces y Pescados
    { image: "/assets/menu/menu_14.webp", title: "Paella de Marisco", alt: "Paella de marisco" },
    { image: "/assets/menu/menu_15.webp", title: "Calamar a la Plancha", alt: "Calamar a la plancha con verduras" },
    { image: "/assets/menu/menu_16.webp", title: "Lubina a la Plancha", alt: "Lubina a la plancha con verduras salteadas" },
    // 6. Carnes
    { image: "/assets/menu/menu_17.webp", title: "Tagliata de Solomillo", alt: "Tagliata de solomillo de ternera" },
    { image: "/assets/menu/menu_18.webp", title: "Solomillo de Ternera", alt: "Solomillo de ternera con verduras y patatas" },
    // 7. Postres
    { image: "/assets/menu/menu_19.webp", title: "Brownie & Tiramisú", alt: "Brownie casero con helado y tiramisú" },
    { image: "/assets/menu/menu_20.webp", title: "Crema Catalana", alt: "Crema Catalana Caramelizada" },
    { image: "/assets/menu/menu_21.webp", title: "Dolce Buon Appetito", alt: "Dolce Buon Appetito" },
  ],
  en: [
    // 1. Starters
    { image: "/assets/menu/menu_01.webp", title: "Bruschetta & Padrón", alt: "Toasted Bruschetta with Tomatoes and Padrón Peppers" },
    { image: "/assets/menu/menu_02.webp", title: "Crispy Baby Squid", alt: "Crispy fried baby squid with yuzu dip" },
    { image: "/assets/menu/menu_03.webp", title: "Beef Carpaccio", alt: "Beef carpaccio with rocket and shaved parmesan" },
    { image: "/assets/menu/menu_04.webp", title: "Red Tuna Tataki", alt: "Red tuna tataki with soy reduction" },
    // 2. Salads
    { image: "/assets/menu/menu_05.webp", title: "Pomodoro Salad", alt: "Fresh tomato salad with red onion and basil" },
    { image: "/assets/menu/menu_06.webp", title: "Caprese Salad", alt: "Caprese salad with buffalo mozzarella" },
    { image: "/assets/menu/menu_07.webp", title: "Thai Prawn Salad", alt: "Thai salad with grilled prawns" },
    { image: "/assets/menu/menu_08.webp", title: "Exotic Salad", alt: "Exotic salad with chicken, mango, and papaya" },
    // 3. Pasta
    { image: "/assets/menu/menu_09.webp", title: "Spaghetti Aglio e Olio", alt: "Spaghetti Aglio e Olio with garlic and prawns" },
    { image: "/assets/menu/menu_10.webp", title: "Tagliatelle with Truffle", alt: "Tagliatelle with fresh black truffle" },
    { image: "/assets/menu/menu_11.webp", title: "Linguine Frutti di Mare", alt: "Seafood linguine with clams and prawns" },
    // 4. Pizzas
    { image: "/assets/menu/menu_12.webp", title: "Pizza Rúcula", alt: "Pizza Rúcula with Parma ham and shaved parmesan" },
    { image: "/assets/menu/menu_13.webp", title: "Pizza Frutti di Mare", alt: "Seafood pizza with Mediterranean catch" },
    // 5. Rice & Fish
    { image: "/assets/menu/menu_14.webp", title: "Seafood Paella", alt: "Traditional Mediterranean seafood paella" },
    { image: "/assets/menu/menu_15.webp", title: "Grilled Squid", alt: "Grilled whole squid with garden vegetables" },
    { image: "/assets/menu/menu_16.webp", title: "Grilled Sea Bass", alt: "Grilled sea bass with sautéed vegetables" },
    // 6. Meat
    { image: "/assets/menu/menu_17.webp", title: "Beef Sirloin Tagliata", alt: "Beef sirloin tagliata with rocket and parmesan" },
    { image: "/assets/menu/menu_18.webp", title: "Grilled Tenderloin", alt: "Grilled beef tenderloin with potatoes and vegetables" },
    // 7. Desserts
    { image: "/assets/menu/menu_19.webp", title: "Brownie & Tiramisù", alt: "Homemade brownie with ice cream and classic tiramisù" },
    { image: "/assets/menu/menu_20.webp", title: "Crema Catalana", alt: "Caramelized traditional Crema Catalana" },
    { image: "/assets/menu/menu_21.webp", title: "Dolce Buon Appetito", alt: "House specialty dessert Buon Appetito" },
  ],
  de: [
    // 1. Vorspeisen
    { image: "/assets/menu/menu_01.webp", title: "Bruschetta & Padrón", alt: "Geröstete Bruschetta mit Tomaten und Padrón-Peperoni" },
    { image: "/assets/menu/menu_02.webp", title: "Baby-Calamari", alt: "Frittierte Baby-Calamari mit Yuzu-Dip" },
    { image: "/assets/menu/menu_03.webp", title: "Rindercarpaccio", alt: "Rindercarpaccio mit frischem Rucola und Parmesan" },
    { image: "/assets/menu/menu_04.webp", title: "Rotes Thunfisch-Tataki", alt: "Rotes Thunfisch-Tataki mit Soja-Reduktion" },
    // 2. Salate
    { image: "/assets/menu/menu_05.webp", title: "Pomodoro-Salat", alt: "Frischer Tomatensalat mit roten Zwiebeln und Basilikum" },
    { image: "/assets/menu/menu_06.webp", title: "Caprese-Salat", alt: "Caprese-Salat mit echtem Büffelmozzarella" },
    { image: "/assets/menu/menu_07.webp", title: "Thai-Garnelensalat", alt: "Thai-Salat mit gebratenen Garnelen" },
    { image: "/assets/menu/menu_08.webp", title: "Exotischer Salat", alt: "Exotischer Salat mit Hähnchen, Mango und Papaya" },
    // 3. Pasta
    { image: "/assets/menu/menu_09.webp", title: "Spaghetti Aglio e Olio", alt: "Spaghetti Aglio e Olio mit Knoblauch und Garnelen" },
    { image: "/assets/menu/menu_10.webp", title: "Tagliatelle mit Trüffel", alt: "Tagliatelle mit frischem schwarzem Trüffel" },
    { image: "/assets/menu/menu_11.webp", title: "Linguine Frutti di Mare", alt: "Meeresfrüchte-Linguine mit Muscheln und Garnelen" },
    // 4. Pizzen
    { image: "/assets/menu/menu_12.webp", title: "Pizza Rucola", alt: "Pizza Rucola mit Parmaschinken und gehobeltem Parmesan" },
    { image: "/assets/menu/menu_13.webp", title: "Pizza Frutti di Mare", alt: "Meeresfrüchte-Pizza mit fangfrischem Fisch" },
    // 5. Reis & Fisch
    { image: "/assets/menu/menu_14.webp", title: "Meeresfrüchte-Paella", alt: "Traditionelle mediterrane Meeresfrüchte-Paella" },
    { image: "/assets/menu/menu_15.webp", title: "Gegrillter Calamar", alt: "Gegrillter Calamar mit frischem Marktgemüse" },
    { image: "/assets/menu/menu_16.webp", title: "Gegrillter Wolfsbarsch", alt: "Gegrillter Wolfsbarsch mit sautiertem Gemüse" },
    // 6. Fleisch
    { image: "/assets/menu/menu_17.webp", title: "Rinderfilet-Tagliata", alt: "Rinderfilet-Tagliata mit Rucola und Parmesan" },
    { image: "/assets/menu/menu_18.webp", title: "Gegrilltes Rinderfilet", alt: "Gegrilltes Rinderfilet mit Kartoffeln und Gemüse" },
    // 7. Desserts
    { image: "/assets/menu/menu_19.webp", title: "Brownie & Tiramisù", alt: "Hausgemachter Brownie mit Eis und klassischem Tiramisù" },
    { image: "/assets/menu/menu_20.webp", title: "Crema Catalana", alt: "Karamellisierte traditionelle Crema Catalana" },
    { image: "/assets/menu/menu_21.webp", title: "Dolce Buon Appetito", alt: "Hausgemachtes Spezialdessert Buon Appetito" },
  ],
};

export const buonAppetitoDishes: Slide[] = buonAppetitoDishesByLang.es;

export function clamp(v: number, a: number, b: number): number {
  return Math.min(b, Math.max(a, v));
}

export function stringY(x: number, w: number, y0: number, sag: number): number {
  const t = clamp(x / w, 0, 1);
  return y0 + 4 * sag * t * (1 - t);
}

export function springStep(x: number, v: number, target: number, dt: number, k = 60): [number, number] {
  const c = 2 * Math.sqrt(k);
  const nv = v + (k * (target - x) - c * v) * dt;
  return [x + nv * dt, nv];
}

export function swingStep(a: number, w: number, lineVel: number, dt: number, gain: number): [number, number] {
  const nw = w + (-36 * a - 4.5 * w + lineVel * 0.003 * gain) * dt;
  return [clamp(a + nw * dt, -0.55, 0.55), nw];
}

const PL_CSS = `
.pl-root{position:relative;z-index:10;width:100%;overflow:hidden;background:transparent;color:var(--pl-ink);user-select:none;-webkit-user-select:none;touch-action:pan-y;outline:none;cursor:grab}
.pl-root[data-drag='1']{cursor:grabbing}
.pl-string{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;overflow:visible}
.pl-card{position:absolute;left:0;top:0;width:var(--pl-cw);transform-origin:50% 0;will-change:transform;cursor:pointer}
.pl-print{margin-top:10px;background:#ffffff;padding:10px 10px 0;border-radius:4px;border:1px solid rgba(217,212,204,0.45);box-shadow:0 3px 10px rgba(24,51,33,.08),0 20px 36px -16px rgba(24,51,33,.22);transition:transform .4s cubic-bezier(.2,.7,.2,1),filter .4s ease,box-shadow .4s ease}
.pl-card[data-on='0'] .pl-print{transform:scale(.92);filter:saturate(.85) brightness(.96)}
.pl-card[data-on='1'] .pl-print{transform:scale(1.02);filter:none;box-shadow:0 6px 20px rgba(24,51,33,.14),0 28px 48px -14px rgba(24,51,33,.30)}
.pl-shot{position:relative;aspect-ratio:3/4;overflow:hidden;background:#ebe6de;border-radius:2px}
.pl-shot img{position:absolute;inset:0;width:100%;height:100%;max-width:none;object-fit:cover;display:block;pointer-events:none;transition:transform .5s cubic-bezier(.2,.8,.2,1)}
.pl-card:hover .pl-shot img{transform:scale(1.04)}
.pl-note{height:46px;display:flex;align-items:center;justify-content:center;padding:0 8px;text-align:center}
.pl-title{font-family:ui-serif,Georgia,'Times New Roman',serif;font-size:15px;font-weight:700;color:#183321;line-height:1.2;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%}
.pl-peg{position:absolute;left:50%;top:0;width:11px;height:26px;margin-left:-5.5px;border-radius:2px;background:linear-gradient(90deg,#c9a67a,#e3c9a1 45%,#b8915f);box-shadow:0 2px 4px rgba(0,0,0,.25)}
.pl-peg::after{content:'';position:absolute;left:4.5px;top:8px;width:2px;height:7px;background:rgba(80,60,30,.45);border-radius:1px}
.pl-controls{position:absolute;left:0;right:0;bottom:14px;display:flex;align-items:center;justify-content:center;gap:20px;cursor:default}
.pl-btn{appearance:none;width:44px;height:44px;border-radius:50%;border:1px solid rgba(24,51,33,0.18);background:rgba(255,255,255,0.9);backdrop-filter:blur(8px);color:#183321;display:grid;place-items:center;cursor:pointer;transition:all .2s ease;flex-shrink:0;box-shadow:0 2px 6px rgba(0,0,0,0.06)}
.pl-btn:hover{background:#183321;color:#ffffff;border-color:#183321;transform:scale(1.05)}
.pl-btn:active{transform:scale(0.92)}
`;

export default function PolaroidLineCarousel({
  slides: customSlides,
  height = "clamp(490px, 62vh, 560px)",
  cardWidth = 245,
  sag = 28,
  swing = 1,
  autoplaySpeed = 0.36, // Continuous slow drift (~21px/sec)
  string = "#7d7468",
  ink = "#183321",
  className,
  style,
  ariaLabel = "Carrusel de platos de la carta",
}: PolaroidLineCarouselProps) {
  const [lang, setLang] = React.useState<Language>("es");

  React.useEffect(() => {
    try {
      const saved = (localStorage.getItem("buon_appetito_lang") || "es") as Language;
      if (["es", "en", "de"].includes(saved)) {
        setLang(saved);
      }
    } catch (e) {}

    const handleLang = (e: any) => {
      if (e.detail?.lang && ["es", "en", "de"].includes(e.detail.lang)) {
        setLang(e.detail.lang);
      }
    };

    window.addEventListener("buon:languageChange", handleLang);
    return () => window.removeEventListener("buon:languageChange", handleLang);
  }, []);

  const activeSlides = customSlides || buonAppetitoDishesByLang[lang] || buonAppetitoDishesByLang.es;
  const origCount = activeSlides.length;
  // Triplicate slides to create a completely seamless infinite wrapping line
  const allSlides = React.useMemo(() => [...activeSlides, ...activeSlides, ...activeSlides], [activeSlides]);
  const totalCount = allSlides.length;

  const [dragging, setDragging] = React.useState(false);
  const [size, setSize] = React.useState({ w: 1200, h: 500, cw: cardWidth });

  const rootRef = React.useRef<HTMLDivElement | null>(null);
  const pathRef = React.useRef<SVGPathElement | null>(null);
  const cards = React.useRef<(HTMLDivElement | null)[]>([]);

  // Simulation physics state
  const sim = React.useRef({
    off: 0,
    vel: 0,
    target: 0,
    a: new Array(totalCount).fill(0),
    w: new Array(totalCount).fill(0),
  });

  const drag = React.useRef<null | {
    x: number;
    off: number;
    lx: number;
    lt: number;
    v: number;
    moved: boolean;
  }>(null);

  const lastTouch = React.useRef(0);
  const isHovered = React.useRef(false);
  const opts = React.useRef({ sag, swing, autoplaySpeed });
  opts.current = { sag, swing, autoplaySpeed };

  const spacing = size.cw * 1.12;
  const totalLineLength = totalCount * spacing;

  // Responsive stage sizing
  React.useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const ro = new ResizeObserver(() => {
      const r = root.getBoundingClientRect();
      const isMobile = r.width < 640;
      const maxRatio = isMobile ? 0.65 : 0.34;
      const cw = Math.round(Math.max(190, Math.min(cardWidth, r.width * maxRatio, r.height * 0.44)));
      setSize({ w: r.width, h: r.height, cw });
    });
    ro.observe(root);
    return () => ro.disconnect();
  }, [cardWidth]);

  // Frame update loop with infinite seamless wrapping & continuous slow drift
  React.useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let visible = true;
    let raf = 0;
    let prev = performance.now();
    const S = sim.current;

    const frame = (now: number) => {
      raf = 0;
      if (!visible) return;
      const dt = Math.min(0.033, (now - prev) / 1000);
      prev = now;
      const { w, h, cw } = size;
      const isMobile = w < 640;
      const y0 = isMobile ? 16 : 24;
      const d = drag.current;
      const o = opts.current;

      // Continuous gentle drift
      if (
        o.autoplaySpeed > 0 &&
        !d &&
        !isHovered.current &&
        now - lastTouch.current > 1200
      ) {
        S.target += o.autoplaySpeed;
      }

      let lineVel: number;
      if (d && d.moved) {
        lineVel = d.v * 1000;
      } else {
        const before = S.off;
        [S.off, S.vel] = springStep(S.off, S.vel, S.target, dt, 40);
        lineVel = -(S.off - before) / Math.max(dt, 1e-3);
      }

      // Safe wrap numbers so S.off never overflows
      if (S.off > totalLineLength * 10 || S.off < -totalLineLength * 10) {
        const wrapUnits = Math.floor(S.off / totalLineLength);
        S.off -= wrapUnits * totalLineLength;
        S.target -= wrapUnits * totalLineLength;
      }

      const g = reduce ? 0 : o.swing;
      let minDistance = Infinity;

      for (let i = 0; i < totalCount; i++) {
        const el = cards.current[i];
        if (!el) continue;

        // Calculate card's wrapped position relative to center of screen
        let relX = ((i * spacing - S.off) % totalLineLength + totalLineLength) % totalLineLength;
        if (relX > totalLineLength / 2) {
          relX -= totalLineLength;
        }

        const screenX = w / 2 + relX;
        const dist = Math.abs(relX);
        if (dist < minDistance) {
          minDistance = dist;
        }

        // Hide cards that are far offscreen
        if (screenX < -cw * 1.5 || screenX > w + cw * 1.5) {
          el.style.visibility = "hidden";
          continue;
        }

        el.style.visibility = "visible";
        let a = S.a[i] || 0;
        let av = S.w[i] || 0;
        [a, av] = swingStep(a, av, lineVel, dt, g);
        if (g) a += Math.sin(now / 1400 + i * 1.6) * 0.0008 * g;
        S.a[i] = a;
        S.w[i] = av;

        const y = stringY(screenX, w, y0, o.sag) - 6;
        el.style.transform = `translate(${(screenX - cw / 2).toFixed(1)}px, ${y.toFixed(1)}px) rotate(${a.toFixed(4)}rad)`;
        const isCenter = dist < cw * 0.55;
        el.setAttribute("data-on", isCenter ? "1" : "0");
        el.style.zIndex = String(Math.max(1, Math.round(20 - dist / 8)));
      }

      pathRef.current?.setAttribute("d", `M0 ${y0} Q${w / 2} ${y0 + 2 * o.sag} ${w} ${y0}`);

      raf = requestAnimationFrame(frame);
    };

    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      if (visible && !raf) {
        prev = performance.now();
        raf = requestAnimationFrame(frame);
      }
    });

    io.observe(root);
    raf = requestAnimationFrame(frame);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, [size, spacing, totalCount, totalLineLength, origCount]);

  // Touch and drag interactions
  const onDown = (e: React.PointerEvent) => {
    if ((e.target as HTMLElement).closest(".pl-controls")) return;
    lastTouch.current = performance.now();
    drag.current = {
      x: e.clientX,
      off: sim.current.off,
      lx: e.clientX,
      lt: e.timeStamp,
      v: 0,
      moved: false,
    };
  };

  const onMove = (e: React.PointerEvent) => {
    const d = drag.current;
    if (!d) return;
    const dx = e.clientX - d.x;
    if (!d.moved && Math.abs(dx) > 5) {
      d.moved = true;
      setDragging(true);
      try {
        rootRef.current?.setPointerCapture(e.pointerId);
      } catch {}
    }
    if (!d.moved) return;
    const dt = Math.max(1, e.timeStamp - d.lt);
    d.v = 0.7 * ((e.clientX - d.lx) / dt) + 0.3 * d.v;
    d.lx = e.clientX;
    d.lt = e.timeStamp;

    // Infinite dragging without clamp walls
    const off = d.off - dx;
    sim.current.off = off;
    sim.current.target = off;
  };

  const onUp = (e: React.PointerEvent) => {
    const d = drag.current;
    drag.current = null;
    lastTouch.current = performance.now();

    try {
      if (rootRef.current?.hasPointerCapture(e.pointerId)) {
        rootRef.current?.releasePointerCapture(e.pointerId);
      }
    } catch {}

    if (!d) return;
    if (d.moved) {
      setDragging(false);
      sim.current.vel = -d.v * 800;
      // Snap smoothly to nearest card
      const snapOffset = sim.current.off - d.v * 160;
      const nearestCard = Math.round(snapOffset / spacing);
      sim.current.target = nearestCard * spacing;
      return;
    }

    // Tap on card: center card smoothly
    const card = (e.target as HTMLElement).closest("[data-i]");
    if (card) {
      const cardIdx = Number(card.getAttribute("data-i"));
      let relX = ((cardIdx * spacing - sim.current.off) % totalLineLength + totalLineLength) % totalLineLength;
      if (relX > totalLineLength / 2) relX -= totalLineLength;
      sim.current.target = sim.current.off + relX;
    }
  };

  const step = (dir: number) => {
    lastTouch.current = performance.now();
    const nearest = Math.round(sim.current.target / spacing);
    sim.current.target = (nearest + dir) * spacing;
  };

  return (
    <div
      ref={rootRef}
      className={["pl-root", className].filter(Boolean).join(" ")}
      style={{
        height,
        ["--pl-ink" as string]: ink,
        ["--pl-cw" as string]: size.cw + "px",
        ...style,
      }}
      data-drag={dragging ? "1" : "0"}
      role="region"
      aria-label={ariaLabel}
      tabIndex={0}
      onMouseEnter={() => { isHovered.current = true; }}
      onMouseLeave={() => { isHovered.current = false; }}
      onPointerDown={onDown}
      onPointerMove={onMove}
      onPointerUp={onUp}
      onPointerCancel={onUp}
    >
      <style>{PL_CSS}</style>
      <svg className="pl-string" aria-hidden="true">
        <path ref={pathRef} fill="none" stroke={string} strokeWidth="1.5" strokeLinecap="round" />
      </svg>

      {allSlides.map((sl, i) => (
        <div
          key={i}
          className="pl-card"
          data-i={i}
          ref={(el) => void (cards.current[i] = el)}
        >
          <div className="pl-print">
            <div className="pl-shot">
              <img
                src={sl.image}
                alt={sl.alt || sl.title || ""}
                style={{ objectPosition: sl.objectPosition || "center" }}
                draggable={false}
                loading="lazy"
              />
            </div>
            <div className="pl-note">
              <span className="pl-title">{sl.title}</span>
            </div>
          </div>
          <div className="pl-peg" />
        </div>
      ))}

      {/* Minimal Navigation Arrows */}
      <div className="pl-controls">
        <button
          type="button"
          className="pl-btn"
          aria-label="Plato anterior"
          onClick={() => step(-1)}
        >
          <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M10 3 5 8l5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <button
          type="button"
          className="pl-btn"
          aria-label="Plato siguiente"
          onClick={() => step(1)}
        >
          <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="m6 3 5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}


