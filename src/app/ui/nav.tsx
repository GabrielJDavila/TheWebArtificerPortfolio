"use client"
import { Bars2Icon, ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/outline"
import { useEffect, useRef } from "react"
import LightDarkMode from "./lightdarkmode"
import flipColorMode from "../lib/changecolormode"
import { Grenze_Gotisch } from "next/font/google"
import { useNav } from "../lib/NavContext"
const grenze = Grenze_Gotisch({ subsets: ["latin"] })

export default function Nav() {
    const {openNav, setOpenNav} = useNav()
    const menuRef = useRef<HTMLElement | null>(null)

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
        <div className="flex h-full flex-col md:px-2 ml-auto md:hidden">
            <div className="w-full flex justify-center items-center font-mono p-2 gap-4">
                <div className="flex h-full flex-row items-center md:px-2 ml-auto md:hidden shadow-lg dark:bg-zinc-800 dark:border-gray-700 dark:border-2 px-4 py-2 rounded-full gap-2">
                    <p>Menu</p>
                    <ChevronDownIcon onClick={handleClick} ref={menuRef as React.RefObject<SVGSVGElement>} className={`w-4 text-black rounded md:hidden dark:text-white transition-all ${openNav ? "rotate-180" : "rotate-0"}`}/>
                </div>
                <LightDarkMode />
                <nav className={`fixed top-5 right-0 left-0 z-10 dark:bg-zinc-800 dark:border-gray-700 dark:border-2 flex grow flex-col justify-between text-left gap-4 ${openNav ? "inline" : "hidden"} transition-all md:flex-col space-x-0 space-y-2 md:hidden p-8 w-11/12 m-auto rounded-3xl ${grenze.className}`}>
                    <div className="flex flex-row justify-between items-center">
                        <p className="text-gray-200">Menu</p>
                        <XMarkIcon className="w-6 text-gray-200"/>
                    </div>
                    <a className="text-white cursor-pointer hover:underline hover:underline-offset-8 border-b-2 border-gray-700 pb-2 text-lg">Home</a>
                    <a className="text-white cursor-pointer hover:underline hover:underline-offset-8 border-b-2 border-gray-700 pb-2 text-lg">Projects</a>
                    <a className="text-white cursor-pointer hover:underline hover:underline-offset-8 border-b-2 border-gray-700 pb-2 text-lg">About</a>
                    <a className="text-white cursor-pointer hover:underline hover:underline-offset-8 border-b-2 border-gray-700 pb-2 text-lg">Toolbox</a>
                    <a className="text-white cursor-pointer hover:underline hover:underline-offset-8 text-lg">Contact</a>
                </nav>
            </div>
            
        </div>
    )
}