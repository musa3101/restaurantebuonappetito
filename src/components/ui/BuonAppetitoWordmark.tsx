"use client"

import * as React from "react"
import HalftoneWordmarkFooter from "./halftone-wordmark-footer"

export interface BuonAppetitoWordmarkProps {
  className?: string
  height?: string
}

export function BuonAppetitoWordmark({
  className = "",
  height = "clamp(120px, 18vw, 240px)",
}: BuonAppetitoWordmarkProps) {
  return (
    <div className={`w-full overflow-hidden select-none ${className}`}>
      <HalftoneWordmarkFooter
        wordmark="buon appetito"
        showNavigation={false}
        backToTop={false}
        height={height}
        dotGap={5}
        radius={85}
        crop={0.12}
        grain={0.35}
        fontFamily="'Cabinet Grotesk', 'Clash Display', 'Inter', system-ui, sans-serif"
        fontWeight={900}
        palette={{
          background: "#183321", // 1. Verde de fondo (Verde Italia / Sala Buon Appetito)
          ink: "#D93829",        // 2. Rojo en reposo (Rojo bandera España / Italia con relieve)
          warm: "#FFFFFF",       // 3. Blanco puro interactivo al pasar el cursor o el dedo
        }}
        className="w-full"
      />
    </div>
  )
}

export default BuonAppetitoWordmark
