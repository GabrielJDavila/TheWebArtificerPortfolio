"use client"
import { Bars2Icon, ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/outline"
import { useState, useEffect, useRef } from "react"
import LightDarkMode from "./lightdarkmode"
import { Grenze_Gotisch } from "next/font/google"
import { useNav, useServicesNav } from "../lib/NavContext"
import { useColorTheme } from "../lib/ColorModeContext"
import { listeners } from "process"
const grenze = Grenze_Gotisch({ subsets: ["latin"] })
import Link from "next/link"

export default function Nav() {
    const {openNav, setOpenNav} = useNav()
    const {openServicesNav, setOpenServicesNav} = useServicesNav()
    const menuRef = useRef<HTMLDivElement | null>(null)
    const servicesMenuRef = useRef<SVGSVGElement | null>(null)
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

    useEffect(() => {
        document.addEventListener("click", handleClickOutside)
        return () => {
            document.removeEventListener("click", handleClickOutside)
        }
    }, [])
    useEffect(() => {
        if(windowWidth >= 768) {
            setOpenNav(false)
        }
    }, [windowWidth])
    
    function handleClick() {
        setOpenNav((prev: boolean) => !prev)
        console.log("clicked nav bars")
    }
    function handleServicesClick() {
        setOpenServicesNav((prev: boolean) => !prev)
    }

    const handleClickOutside = (e: MouseEvent) => {
        const target = e.target as Node

        if(
            menuRef.current &&
            !menuRef.current.contains(target) &&
            servicesMenuRef.current &&
            !servicesMenuRef.current.contains(target)
        ) {
            console.log(e.target)
            setOpenNav(false)
            console.log("clicked outside")
        }
    }

    function handleLinkClick() {
        setOpenNav(false)
        setOpenServicesNav(false)
    }

    return (
        <div className="flex h-full flex-col md:px-2 ml-auto">
            <div className="fixed z-40 w-full flex justify-center items-center font-mono p-2 md:pt-2 md:pb-0 md:px-0">
                <div ref={menuRef} className="z-index-100 flex h-full flex-row items-center md:px-2 ml-auto md:hidden shadow-lg bg-white dark:bg-zinc-800 border-gray-200 dark:border-gray-700 border-2 px-4 py-2 rounded-full gap-2 mr-2">
                    <p>Menu</p>
                    <ChevronDownIcon onClick={handleClick} className={`w-4 text-black rounded md:hidden dark:text-white transition-all cursor-pointer ${openNav ? "rotate-180" : "rotate-0"}`}/>
                </div>
                {windowWidth < 768 && <LightDarkMode />}
                {!lightMode ?
                <nav
                    className={`fixed z-40 top-2 right-0 left-0 z-50 ${openNav ? "dark:border-gray-700" : "border-none"} ${openNav ? "dark:border-2" : "border-none"} 
                    dark:bg-zinc-800 flex grow flex-col justify-between text-left gap-4 ${openNav ? "max-h-lg" : "h-0"} transition-all space-x-0 space-y-2 
                    ${openNav? "p-8" : "p-0"} w-11/12 max-w-2xl m-auto rounded-3xl ${grenze.className}
                    md:flex-row md:h-auto md:justify-center md:text-center`}
                >
                    {openNav && windowWidth < 768 &&
                    <>
                    <div className="flex flex-row justify-between items-center md:hidden">
                        <p className="text-gray-200">Menu</p>
                        <XMarkIcon onClick={handleClick} className="w-6 text-gray-200 cursor-pointer"/>
                    </div>
                    <Link onClick={handleLinkClick} href="/" className="text-white cursor-pointer hover:underline hover:underline-offset-8 border-b-2 border-gray-700 pb-2 text-lg">Home</Link>
                    <Link onClick={handleLinkClick} href="/#projects-home" className="text-white cursor-pointer hover:underline hover:underline-offset-8 border-b-2 border-gray-700 pb-2 text-lg">Projects</Link>
                    <Link onClick={handleLinkClick} href="/about" className="text-white cursor-pointer hover:underline hover:underline-offset-8 border-b-2 border-gray-700 pb-2 text-lg">About</Link>
                    <div className="flex flex-col gap-4 items-center justify-left text-left mr-auto border-b-2 border-gray-700 pb-2">
                        <div className="flex flex-row justify-left items-center text-left gap-4 mr-auto">
                            <Link href="/services" className="text-white cursor-pointer text-lg">Services</Link>
                            <ChevronDownIcon ref={servicesMenuRef} onClick={handleServicesClick} className={`w-4 text-black rounded md:hidden dark:text-white transition-all ${openServicesNav ? "rotate-180" : "rotate-0"}`}/>
                        </div>
                        {openServicesNav &&
                        <div className="flex flex-col justify-left items-center text-left gap-2 mr-auto">
                            <Link onClick={handleLinkClick} href="/services/service-one" className="text-left mr-auto cursor-pointer hover:underline hover:underline-offset-8">Custom Software</Link>
                            <Link onClick={handleLinkClick} href="/services/service-two" className="text-left mr-auto cursor-pointer hover:underline hover:underline-offset-8">Web Development</Link>
                            <Link onClick={handleLinkClick} href="/services/service-three" className="text-left mr-auto cursor-pointer hover:underline hover:underline-offset-8">Website Management & Hosting</Link>
                        </div>
                        }
                    </div>
                    
                    <Link href="/contact" className="text-white cursor-pointer hover:underline hover:underline-offset-8 text-lg">Contact</Link>
                    </>
                    }
                    {windowWidth >= 768 &&
                    <div className="flex w-full max-w-2xl m-auto justify-center dark:bg-zinc-800 rounded-3xl">
                        <div className="flex w-full h-full m-auto justify-center items-center gap-12 p-2 dark:border-gray-700 dark:border-2 rounded-3xl">

                            <Link href="/" className="hidden text-white cursor-pointer text-lg md:block m-0 hover:underline hover:underline-offset-8">Home</Link>
                            <Link href="/#projects-home" className="hidden text-white cursor-pointer text-lg md:block m-0 hover:underline hover:underline-offset-8">Projects</Link>
                            <Link href="/about" className="hidden text-white cursor-pointer text-lg md:block hover:underline hover:underline-offset-8">About</Link>
                            <Link href="/services" className="hidden text-white cursor-pointer text-lg md:block hover:underline hover:underline-offset-8">Services</Link>
                            <Link href="/contact" className="hidden text-white cursor-pointer text-lg md:block hover:underline hover:underline-offset-8">Contact</Link>
                            <LightDarkMode />
                        </div>
                    </div>
                    }
                </nav>
                :
                <nav
                    className={`fixed top-2 right-0 left-0 z-50 ${openNav ? "border-gray-200" : "border-none"} ${openNav ? "border-2" : "border-none"} 
                    bg-white flex grow flex-col justify-between text-left gap-4 ${openNav ? "max-h-lg" : "h-0"} transition-all space-x-0 space-y-2 
                    ${openNav? "p-8" : "p-0"} w-11/12 max-w-2xl m-auto rounded-3xl ${grenze.className}
                    md:flex-row md:h-auto md:justify-center md:text-center`}
                >
                    {openNav && windowWidth < 768 &&
                    <>
                    <div className="flex flex-row justify-between items-center">
                        <p className="text-zinc-600">Menu</p>
                        <XMarkIcon className="w-6 text-zinc-600 cursor-pointer"/>
                    </div>
                    <Link onClick={handleLinkClick} href="/" className="text-black cursor-pointer border-b-2 border-gray-300 pb-2 text-lg hover:underline hover:underline-offset-8">Home</Link>
                    <Link onClick={handleLinkClick} href="/#projects-home" className="text-black cursor-pointer border-b-2 border-gray-300 pb-2 text-lg hover:underline hover:underline-offset-8">Projects</Link>
                    <Link onClick={handleLinkClick} href="/about" className="text-black cursor-pointer border-b-2 border-gray-300 pb-2 text-lg hover:underline hover:underline-offset-8">About</Link>
                    <div className="flex flex-col gap-4 items-center justify-left text-left mr-auto border-b-2 border-gray-300 pb-2">
                        <div className="flex flex-row justify-left items-center text-left gap-4 mr-auto">
                            <Link href="/services" className="text-black cursor-pointer text-lg">Services</Link>
                            <ChevronDownIcon ref={servicesMenuRef} onClick={handleServicesClick} className={`w-4 text-black rounded md:hidden dark:text-white transition-all ${openServicesNav ? "rotate-180" : "rotate-0"}`}/>
                        </div>
                        {openServicesNav &&
                        <div className="flex flex-col justify-left items-center text-left gap-2 mr-auto">
                            <Link onClick={handleLinkClick} href="/services/service-one" className="text-left mr-auto cursor-pointer hover:underline hover:underline-offset-8">Custom Software</Link>
                            <Link onClick={handleLinkClick} href="/services/service-two" className="text-left mr-auto cursor-pointer hover:underline hover:underline-offset-8">Web Development</Link>
                            <Link onClick={handleLinkClick} href="/services/service-three" className="text-left mr-auto cursor-pointer hover:underline hover:underline-offset-8">Website Management & Hosting</Link>
                        </div>
                        }
                    </div>
                    <Link onClick={handleLinkClick} href="/contact" className="text-black cursor-pointer text-lg">Contact</Link>
                    </>
                    }
                    {windowWidth >= 768 &&
                    <div className="flex w-full max-2xl m-auto justify-center dark:bg-zinc-800 rounded-3xl">
                        <div className="flex w-full h-full m-auto justify-center items-center gap-12 p-2 border-gray-200 border-2 shadow-md rounded-3xl">

                            <Link href="/" className="hidden text-black cursor-pointer text-lg md:block m-0 hover:underline hover:underline-offset-8">Home</Link>
                            <Link href="/#projects-home" className="hidden text-black cursor-pointer text-lg md:block m-0 hover:underline hover:underline-offset-8">Projects</Link>
                            <Link href="/about" className="hidden text-black cursor-pointer text-lg md:block hover:underline hover:underline-offset-8">About</Link>
                            <Link href="/services" className="hidden text-black cursor-pointer text-lg md:block hover:underline hover:underline-offset-8">Services</Link>
                            <Link href="/contact" className="hidden text-black cursor-pointer text-lg md:block hover:underline hover:underline-offset-8">Contact</Link>
                            <LightDarkMode />
                        </div>
                    </div>
                    }
                </nav>
                }
            </div>
            
        </div>
    )
}