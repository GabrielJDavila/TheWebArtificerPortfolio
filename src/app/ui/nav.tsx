"use client"
import { Bars2Icon, ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/outline"
import { useState, useEffect, useRef } from "react"
import LightDarkMode from "./lightdarkmode"
import flipColorMode from "../lib/changecolormode"
import { Grenze_Gotisch } from "next/font/google"
import { useNav } from "../lib/NavContext"
import { useColorTheme } from "../lib/ColorModeContext"
import { listeners } from "process"
const grenze = Grenze_Gotisch({ subsets: ["latin"] })

export default function Nav() {
    const {openNav, setOpenNav} = useNav()
    const menuRef = useRef<HTMLElement | null>(null)
    const {colorTheme, setColorTheme} = useColorTheme()
    const [lightMode, setLightMode] = useState(false)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {
        if(colorTheme === "light") {
            setLightMode(true)
        } else {
            setLightMode(false)
        }
    }, [colorTheme])

    useEffect(() => {
        if(typeof window !== "undefined") {
            const handleResize = () => setWindowWidth(window.innerWidth)
            window.addEventListener("resize", handleResize)

            return () => window.removeEventListener("resize", handleResize)
        }
    }, [])
    console.log(windowWidth)
    function handleClick() {
        setOpenNav((prev: boolean) => !prev)
        console.log("clicked nav bars")
    }

    const handleClickOutside = (e: MouseEvent) => {
        if(menuRef.current && !menuRef.current.contains(e.target as Node)) {
            setOpenNav(false)
            console.log("clicked outside")
        }
    }

    // useEffect(() => {
    //     if(openNav && !document.body.classList.contains("blur-sm")) {
    //         document.body.classList.add("blur-sm")
    //     } else {
    //         document.body.classList.remove("blur-sm")
    //     }
    // }, [openNav])

    document.addEventListener("click", handleClickOutside)
    return (
        <div className="flex h-full flex-col md:px-2 ml-auto">
            <div className="w-full flex justify-center items-center font-mono p-2 gap-4">
                <div className="flex h-full flex-row items-center md:px-2 ml-auto md:hidden shadow-lg dark:bg-zinc-800 border=gray-200 dark:border-gray-700 border-2 px-4 py-2 rounded-full gap-2">
                    <p>Menu</p>
                    <ChevronDownIcon onClick={handleClick} ref={menuRef as React.RefObject<SVGSVGElement>} className={`w-4 text-black rounded md:hidden dark:text-white transition-all ${openNav ? "rotate-180" : "rotate-0"}`}/>
                </div>
                <LightDarkMode />
                {!lightMode ?
                <nav
                    className={`fixed top-5 right-0 left-0 z-50 ${openNav ? "dark:border-gray-700" : "border-none"} ${openNav ? "dark:border-2" : "border-none"} 
                    dark:bg-zinc-800 flex grow flex-col justify-between text-left gap-4 ${openNav ? "h-96" : "h-0"} transition-all space-x-0 space-y-2 
                    ${openNav? "p-8" : "p-0"} w-11/12 m-auto rounded-3xl ${grenze.className}
                    md:flex-row md:h-auto md:top-0 md:justify-center md:text-center`}
                >
                    {openNav && windowWidth < 768 ?
                    <>
                    <div className="flex flex-row justify-between items-center md:hidden">
                        <p className="text-gray-200">Menu</p>
                        <XMarkIcon className="w-6 text-gray-200"/>
                    </div>
                    <a className="text-white cursor-pointer hover:underline hover:underline-offset-8 border-b-2 border-gray-700 pb-2 text-lg">Home</a>
                    <a className="text-white cursor-pointer hover:underline hover:underline-offset-8 border-b-2 border-gray-700 pb-2 text-lg">Projects</a>
                    <a className="text-white cursor-pointer hover:underline hover:underline-offset-8 border-b-2 border-gray-700 pb-2 text-lg">About</a>
                    <a className="text-white cursor-pointer hover:underline hover:underline-offset-8 border-b-2 border-gray-700 pb-2 text-lg">Toolbox</a>
                    <a className="text-white cursor-pointer hover:underline hover:underline-offset-8 text-lg">Contact</a>
                    </>
                    :
                    <div className="flex justify-center gap-20 p-4 bg-zinc-800">

                        <a className="hidden text-white cursor-pointer text-lg md:block m-0">Home</a>
                        <a className="hidden text-white cursor-pointer text-lg md:block m-0">Projects</a>
                        <a className="hidden text-white cursor-pointer text-lg md:block">About</a>
                        <a className="hidden text-white cursor-pointer text-lg md:block">Toolbox</a>
                        <a className="hidden text-white cursor-pointer text-lg md:block">Contact</a>
                    </div>
                    }
                </nav>
                :
                <nav className={`fixed top-5 right-0 left-0 z-10 ${openNav ? "border-black-700" : "border-none"} ${openNav ? "border-2" : "border-none"} bg-white flex grow flex-col justify-between text-left gap-4 ${openNav ? "h-96" : "h-0"} transition-all md:flex-col space-x-0 space-y-2 md:hidden ${openNav? "p-8" : "p-0"} w-11/12 m-auto rounded-3xl ${grenze.className} shadow-lg`}>
                    {openNav ?
                    <>
                    <div className="flex flex-row justify-between items-center">
                        <p className="text-zinc-600">Menu</p>
                        <XMarkIcon className="w-6 text-zinc-600"/>
                    </div>
                    <a className="text-black cursor-pointer border-b-2 border-gray-300 pb-2 text-lg">Home</a>
                    <a className="text-black cursor-pointer border-b-2 border-gray-300 pb-2 text-lg">Projects</a>
                    <a className="text-black cursor-pointer border-b-2 border-gray-300 pb-2 text-lg">About</a>
                    <a className="text-black cursor-pointer border-b-2 border-gray-300 pb-2 text-lg">Toolbox</a>
                    <a className="text-black cursor-pointer text-lg">Contact</a>
                    </>
                    : undefined
                    }
                </nav>
                }
            </div>
            
        </div>
    )
}