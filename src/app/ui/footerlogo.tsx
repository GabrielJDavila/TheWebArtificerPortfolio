"use client"
import { MoonIcon, SunIcon, SparklesIcon } from "@heroicons/react/24/outline"
import { useRef, useState, useEffect } from "react"
import { useColorTheme } from "../lib/ColorModeContext"
import Image from "next/image"

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
            <Image src="/twalightmodelogo.png" alt="footer logo of twa" width={500} height={500} className="w-20" />
        </div>
    )
}