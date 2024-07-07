"use client"
import { MoonIcon, SunIcon, SparklesIcon } from "@heroicons/react/24/outline"
import { useRef, useState, useEffect } from "react"
import flipColorMode from "../lib/changecolormode"

export default function LogoColorMode() {
    const [colorTheme, setTheme] = flipColorMode()
    const [logo, setLogo] = useState(false)

    useEffect(() => {
        if(colorTheme === "light") {
            setLogo(true)
        } else {
            setLogo(false)
        }
    }, [colorTheme])

    return (
        <div>
            {logo ?
                <img src="/twalightmodelogo.png" className="w-10"/> :
                <img src="/twadarkmodelogo.png" className="w-10"/>
            }
        </div>
    )
}