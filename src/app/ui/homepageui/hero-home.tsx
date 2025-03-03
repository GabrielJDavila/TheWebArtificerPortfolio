"use client"
import { useEffect, useState } from "react"
import LogoColorMode from "../logocolormode"
import { useColorTheme } from "../../lib/ColorModeContext"
import Link from "next/link"

export default function HeroHomeUi() {
   const {colorTheme, setColorTheme} = useColorTheme()
   
    return (
        <section className="flex flex-col gap-10 mt-4 mb-20 md:mt-20">
            <LogoColorMode />
            {/* {colorTheme ?
                <img src="/twalightmodelogo.png" className="w-10"/> :
                <img src="/twadarkmodelogo.png" className="w-10"/>
            } */}
            
            <div className="flex flex-col gap-8 px-8">
                <h1 className="text-3xl font-bold">Craftsman of code, creating stunning and performative websites.</h1>
                <Link href="#projects-home" className="bg-sky-600 w-24 m-auto p-2 rounded-full hover:bg-sky-600 text-white">see my work</Link>
            </div>
            
        </section>
    )
}