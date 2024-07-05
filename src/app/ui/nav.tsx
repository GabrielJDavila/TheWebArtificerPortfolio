"use client"
import { Bars2Icon } from "@heroicons/react/24/outline"
import { useRef, useState } from "react"
import LightDarkMode from "./colormode"

export default function Nav() {
    const [openNav, setOpenNav] = useState(false)
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

    document.addEventListener("click", handleClickOutside)

    return (
        <div className="flex h-full flex-col md:px-2 ml-auto md:hidden shadow-lg">
            <div className="w-full flex justify-between items-center font-mono p-2">
                <img src="/blacklogo.svg" className="w-12"/>
                <LightDarkMode />
                <Bars2Icon onClick={handleClick} ref={menuRef as React.RefObject<SVGSVGElement>} className="w-10 text-black hover:bg-slate-600 hover:text-white p-2 rounded ml-1 md:hidden dark:text-white"/>
                <nav className={`fixed top-14 right-0 left-0 z-10 bg-slate-600 flex grow flex-col justify-between text-center ${openNav ? "inline" : "hidden"} md:flex-col space-x-0 space-y-2 md:hidden px-2 w-full py-2 px-3 rounded font-mono`}>
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