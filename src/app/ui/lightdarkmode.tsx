"use client"
import { MoonIcon, SunIcon, SparklesIcon } from "@heroicons/react/24/outline"
import { useRef, useState, useEffect } from "react"
// import FlipColorMode from "../lib/changecolormode"
import { useColorTheme } from "../lib/ColorModeContext"
import { userAgentFromString } from "next/server"

export default function LightDarkMode() {
    const {colorTheme, setColorTheme} = useColorTheme()

    function handleToggleTheme() {
        setColorTheme(prevTheme => (prevTheme === "dark" ? "light" : "dark"))
    }
    return (
        <div className="flex flex-row justify-center items-center">
            <div className="flex h-full flex-col md:px-2 shadow-lg bg-white dark:bg-zinc-800 border-gray-200 dark:border-gray-700 border-2 px-3 py-2 rounded-full">
                <MoonIcon onClick={handleToggleTheme} className="hidden dark:block dark:text-white w-6 cursor-pointer"/>
                <SunIcon onClick={handleToggleTheme} className="text-blue-400 w-6 cursor-pointer dark:hidden"/>        
            </div>
        </div>
    )
}