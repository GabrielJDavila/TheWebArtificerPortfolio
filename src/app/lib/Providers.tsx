"use client"

import { ColorThemeProvider } from "./ColorModeContext"
import { NavProvider } from "./NavContext"

type ProviderProps = {
    children: React.ReactNode
}

export function Providers({children}: ProviderProps) {
    return (
        <NavProvider>
            <ColorThemeProvider>
                {children}
            </ColorThemeProvider>
        </NavProvider>
    )
}