"use client"
import { MoonIcon, SunIcon, SparklesIcon } from "@heroicons/react/24/outline"
import { useRef, useState, useEffect } from "react"
import { useColorTheme } from "../lib/ColorModeContext"
import Image from "next/image"

export default function LogoColorMode() {
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
            {logo ?
                <Image src="/twadarkmodelogo.png" className="w-60" alt="logo of the web artificer. Laptop image with crossed hammers." width={500} height={500}/> :
                <Image src="/twalightmodelogo.png" className="w-60" alt="logo of the web artificer. Laptop image with crossed hammers." width={500} height={500}/>
            }
        </div>
    )
}