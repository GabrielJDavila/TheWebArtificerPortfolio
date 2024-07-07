"use client"

import { NavProvider } from "./NavContext"

type ProviderProps = {
    children: React.ReactNode
}

export function Providers({children}: ProviderProps) {
    return <NavProvider>{children}</NavProvider>
}