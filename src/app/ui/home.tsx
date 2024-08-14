"use client"
import { useEffect, useState } from "react"
import LogoColorMode from "./logocolormode"
import { useColorTheme } from "../lib/ColorModeContext"
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
                <Link href="#" className="bg-sky-500 w-24 m-auto p-2 rounded-full hover:bg-sky-600">see my work</Link>
            </div>
            <section className="flex relative bg-zinc-800 w-full h-96 text-center justify-center mt-12">
                <div className="absolute -top-8 bg-zinc-800 w-full h-16 skew-y-6 z-0"></div>
                <h2 className="z-20">Elevate Your Business</h2>
            </section>
        </main>
    )
}