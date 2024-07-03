"use client"

import { useEffect, useState } from "react";

function flipColorMode() {
    const [theme, setTheme] = useState(
        typeof window !== "undefined" ? localStorage.theme : "dark"
    )
    const colorTheme = theme === "dark" ? "light" : "dark"

    useEffect(() => {
        const root = window.document.documentElement

        document.documentElement.classList.remove(colorTheme)
        document.documentElement.classList.add(theme)

        if(typeof window !== "undefined") {
            localStorage.setItem("theme", theme)
        }
    }, [theme])
    console.log(theme)
    return [colorTheme, setTheme]
}

export default flipColorMode