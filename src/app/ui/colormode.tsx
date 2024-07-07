"use client"
import { MoonIcon, SunIcon, SparklesIcon } from "@heroicons/react/24/outline"
import { useRef, useState } from "react"
import flipColorMode from "../lib/changecolormode"

export default function LightDarkMode() {
    const [colorTheme, setTheme] = flipColorMode()

    return (
        <div className="flex flex-row justify-center items-center w-screen">
            {/* {colorTheme === "light" ?
                <img src="/twalightmodelogo.png" className="w-10"/> :
                <img src="/twadarkmodelogo.png" className="w-10"/>
            } */}
            <div className="flex h-full flex-col md:px-2 ml-auto md:hidden shadow-lg dark:bg-zinc-700 px-3 py-2 rounded-full">
                {colorTheme === "light" ?
                <MoonIcon onClick={() => setTheme("light")} className="dark:text-white w-6"/>
                :
                <SunIcon onClick={() => setTheme("dark")} className="text-blue-400 w-6"/>
                }
                
            </div>
        </div>
    )
}