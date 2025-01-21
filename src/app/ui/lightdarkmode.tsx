"use client"
import { MoonIcon, SunIcon, SparklesIcon } from "@heroicons/react/24/outline"
import { useRef, useState } from "react"
// import FlipColorMode from "../lib/changecolormode"
import { useColorTheme } from "../lib/ColorModeContext"

export default function LightDarkMode() {
    // const [colorTheme, setColorTheme] = flipColorMode()
    const {colorTheme, setColorTheme} = useColorTheme()
    console.log(colorTheme)

    function handleToggleTheme() {
        setColorTheme(prevTheme => (prevTheme === "dark" ? "light" : "dark"))
    }
    return (
        <div className="flex flex-row justify-center items-center">
            {/* {colorTheme === "light" ?
                <img src="/twalightmodelogo.png" className="w-10"/> :
                <img src="/twadarkmodelogo.png" className="w-10"/>
            } */}
            <div className="flex h-full flex-col md:px-2 shadow-lg bg-white dark:bg-zinc-800 border-gray-200 dark:border-gray-700 border-2 px-3 py-2 rounded-full">
                {colorTheme === "dark" ?
                <MoonIcon onClick={handleToggleTheme} className="dark:text-white w-6 cursor-pointer"/>
                :
                <SunIcon onClick={handleToggleTheme} className="text-blue-400 w-6 cursor-pointer"/>
                }
                
            </div>
        </div>
    )
}