"use client"
import { Bars2Icon, ChevronDownIcon } from "@heroicons/react/24/outline"
import { useEffect, useRef, useState } from "react"
import LightDarkMode from "./colormode"
import flipColorMode from "../lib/changecolormode"
import { Grenze_Gotisch } from "next/font/google"

const grenze = Grenze_Gotisch({ subsets: ["latin"] })

export default function Nav() {
    const [openNav, setOpenNav] = useState(false)
    const [colorTheme, setTheme] = flipColorMode()
    const menuRef = useRef<HTMLElement | null>(null)

    function handleClick() {
        setOpenNav(prev => !prev)
        console.log("clicked nav bars")
    }

    const handleClickOutside = (e: MouseEvent) => {
        if(menuRef.current && !menuRef.current.contains(e.target as Node)) {
            setOpenNav(false)
            console.log("clicked outside")
        }
    }

    useEffect(() => {
        if(openNav && !document.body.classList.contains("blur-sm")) {
            document.body.classList.add("blur-sm")
        }
    }, [openNav])

    document.addEventListener("click", handleClickOutside)
    console.log(document.documentElement.classList)
    return (
        <div className="flex h-full flex-col md:px-2 ml-auto pt-4 md:hidden">
            <div className="w-full flex justify-between items-center font-mono p-2">
                <LightDarkMode />
                <ChevronDownIcon onClick={handleClick} ref={menuRef as React.RefObject<SVGSVGElement>} className={`w-12 text-black p-2 rounded ml-1 md:hidden dark:text-white transition-all ${openNav ? "rotate-180" : "rotate-0"} ${openNav ? "z-11" : ""}`}/>
                <nav className={`fixed top-8 right-0 left-0 z-10 bg-slate-600 dark:bg-zinc-700 flex grow flex-col justify-between text-center ${openNav ? "inline" : "hidden"} ${openNav ? "blur-none": ""}md:flex-col space-x-0 space-y-2 md:hidden px-2 w-full py-2 px-3 w-11/12 m-auto rounded ${grenze.className}`}>
                    <a className="text-white cursor-pointer hover:underline hover:underline-offset-8">Home</a>
                    <a className="text-white cursor-pointer hover:underline hover:underline-offset-8">Projects</a>
                    <a className="text-white cursor-pointer hover:underline hover:underline-offset-8">About</a>
                    <a className="text-white cursor-pointer hover:underline hover:underline-offset-8">Toolbox</a>
                    <a className="text-white cursor-pointer hover:underline hover:underline-offset-8">Contact</a>
                </nav>
            </div>
            
        </div>
    )
}