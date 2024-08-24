"use client"
import { MoonIcon, SunIcon, SparklesIcon } from "@heroicons/react/24/outline"
import { useRef, useState, useEffect } from "react"
import flipColorMode from "../lib/changecolormode"
import { useColorTheme } from "../lib/ColorModeContext"

export default function FooterLogo() {
    const {colorTheme, setColorTheme} = useColorTheme()
    const [logo, setLogo] = useState(false)

    useEffect(() => {
        if(colorTheme === "light") {
            setLogo(true)
        } else {
            setLogo(false)
        }
    }, [colorTheme])

    return (
        <div className="text-center m-auto">
            <img src="/twalightmodelogo.png" className="w-20"/>
        </div>
    )
}