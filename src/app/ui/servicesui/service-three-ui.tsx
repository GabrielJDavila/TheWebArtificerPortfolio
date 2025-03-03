"use client"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Montserrat } from "next/font/google"
const mont = Montserrat({subsets: ["latin"], weight: ["200", "300"]})

export default function ServiceThreeUi() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {
        if(typeof window !== "undefined") {
            const handleResize = () => setWindowWidth(window.innerWidth)
            window.addEventListener("resize", handleResize)

            return () => window.removeEventListener("resize", handleResize)
        }
    }, [])

    return (
        <div className="w-full md:max-w-4xl bg-zinc-800 py-20 md:pt-24 px-8 flex flex-col gap-8 text-white">
            <div className="w-full max-w-5xl text-center p-8 flex flex-col justify-center items-center gap-4">
                    <h1 className="text-3xl">Web Management, Hosting, & Security</h1>
            </div>
            
            <div className="w-full flex flex-col justify-center items-center m-auto lg:hidden">
                <h2 className={`${mont.className} text-2xl text-left md:w-3/4 lg:w-1/2`}>Website Management Made Easy</h2>
                <br></br>
                <img src="/securityimg.png" className="w-full md:w-3/4 lg:w-1/2" alt="image of motherboard with a lock shape to denote security."/>
                <br></br>
                <div className="md:w-3/4 lg:w-1/2">
                    <p className={`${mont.className}`}>After you have you website, it&apos;s all peaches and rainbows, right? Well, not exactly.</p>
                    <br></br>
                    <p className={`${mont.className}`}>Over time as technology evolves, so too does your website need to evolve - or else it will be vunerable to attacks.
                        Unfortunately that is just the nature of technology. Fortunately for you, I can handle website management and security for you. You won&apos;t have to
                        worry about contantly updating your site or making sure it&apos;s secure.
                    </p>
                    <br></br>
                    <p className={`${mont.className}`}>I handle the hosting of your site on my own secure providers, and handle updating website security. If your website
                        any user data, it is safely stored in secure databases. Instead of focusing and worring about the tech stuff, you can focus on your business.
                    </p>
                </div>
                <Link href="/contact" className="w-20 text-center mt-8 bg-sky-500 hover:bg-sky-700 p-2 rounded-full">Contact</Link>
            </div>
            
            <div className="hidden lg:flex w-full flex-row justify-center items-center m-auto gap-12">
                <div className="md:w-3/4 lg:w-1/2 flex flex-col justify-center gap-4">
                    <h2 className={`${mont.className} text-2xl text-left md:w-3/4 lg:w-full`}>Website Management Made Easy</h2>
                    <p className={`${mont.className}`}>After you have you website, it&apos;s all peaches and rainbows, right? Well, not exactly.</p>
                    
                    <p className={`${mont.className}`}>Over time as technology evolves, so too does your website need to evolve - or else it will be vunerable to attacks.
                        Unfortunately that is just the nature of technology. Fortunately for you, I can handle website management and security for you. You won&apos;t have to
                        worry about contantly updating your site or making sure it&apos;s secure.
                    </p>
                    
                    <p className={`${mont.className}`}>I handle the hosting of your site on my own secure providers, and handle updating website security. If your website
                        any user data, it is safely stored in secure databases. Instead of focusing and worring about the tech stuff, you can focus on your business.
                    </p>
                    <Link href="/contact" className="w-20 text-center bg-sky-500 hover:bg-sky-700 p-2 rounded-full">Contact</Link>
                </div>
                <img src="/securityimg.png" className="w-full md:w-3/4 lg:w-1/2" alt="image of motherboard with a lock shape to denote security."/>
            </div>
            
        </div>
    )
}