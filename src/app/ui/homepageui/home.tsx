"use client"
import { useEffect, useState } from "react"
import LogoColorMode from "../logocolormode"
import { useColorTheme } from "../../lib/ColorModeContext"
import Link from "next/link"

export default function HomeUi() {
   const {colorTheme, setColorTheme} = useColorTheme()
   console.log(colorTheme)
    return (
        <main className="flex flex-col gap-28">
            <LogoColorMode />
            {/* {colorTheme ?
                <img src="/twalightmodelogo.png" className="w-10"/> :
                <img src="/twadarkmodelogo.png" className="w-10"/>
            } */}
            
            <div className="flex flex-col gap-8 px-8">
                <h1 className="text-3xl font-bold">Craftsman of code, creating stunning and performative websites.</h1>
                <p>I'm Gabriel, I'm a former fitness coach turned web developer. I use my skills to create stunning websites and helpful applications for small businesses.</p>
                <Link href="#" className="bg-green-600 w-24 m-auto p-2 rounded-full hover:bg-sky-600">see my work</Link>
            </div>
            <section className="flex flex-col w-full text-center justify-center px-4 py-8">
                {/* <div className="absolute -top-12 bg-zinc-800 w-full h-32 skew-y-6 z-0"></div> */}
                <h2 className="z-20 my-4 text-xl">Elevate Your Business with responsive websites.</h2>
                <div className="flex flex-row flex-wrap gap-20 justify-center items-center mt-8">
                    <div className="flex flex-col justify-center gap-4 items-center text-center dark:bg-zinc-800 px-4 py-8 rounded-3xl">
                        <img src="/WA_logos_1.png" className="w-1/2"/>
                        <p>Optimized websites</p>
                    </div>
                    <div className="flex flex-col justify-center gap-4 items-center text-center dark:bg-zinc-800 px-4 py-8 rounded-3xl">
                        <img src="/WA_logos_2.png" className="w-1/2"/>
                        <p>Hand-crafted design</p>
                    </div>
                    <div className="flex flex-col justify-center gap-4 items-center text-center dark:bg-zinc-800 px-4 py-8 rounded-3xl">
                        <img src="/WA_logos_3.png" className="w-1/2"/>
                        <p>5-star customer service</p>
                    </div>
                    <div className="flex flex-col justify-center gap-4 items-center text-center dark:bg-zinc-800 px-4 py-8 rounded-3xl">
                        <img src="/WA_logos_4.png" className="w-1/2"/>
                        <p>data management</p>
                    </div>
                    
                </div>
            </section>
        </main>
    )
}