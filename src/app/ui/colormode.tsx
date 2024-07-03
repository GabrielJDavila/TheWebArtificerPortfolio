"use client"
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline"
import { useRef, useState } from "react"
import flipColorMode from "../lib/changecolormode"

export default function LightDarkMode() {
    const [colorTheme, setTheme] = flipColorMode()

    return (
        <div className="flex h-full flex-col md:px-2 ml-auto md:hidden shadow-lg dark:bg-zinc-700 px-2 py-1 rounded-full">
            {colorTheme === "light" ? (
                <MoonIcon onClick={() => setTheme("light")} className="dark:text-white w-4"/>
            ):
            <SunIcon onClick={() => setTheme("dark")} className="text-blue-400 w-4"/>
            }
            
        </div>
    )
}