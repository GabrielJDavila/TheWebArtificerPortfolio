"use client"

import { ColorThemeProvider } from "./ColorModeContext"
import { NavProvider, NavProviderTwo } from "./NavContext"

type ProviderProps = {
    children: React.ReactNode
}

export function Providers({children}: ProviderProps) {
    return (
        <NavProvider>
            <NavProviderTwo>
                <ColorThemeProvider>
                    {children}
                </ColorThemeProvider>
            </NavProviderTwo>
        </NavProvider>
    )
}