"use client"
import { useEffect, useState } from "react"
import LogoColorMode from "./logocolormode"
import { useColorTheme } from "../lib/ColorModeContext"

export default function HomeUi() {
   const {colorTheme, setColorTheme} = useColorTheme()
   console.log(colorTheme)
    return (
        <section className="flex flex-col gap-8">
            <LogoColorMode />
            {/* {colorTheme ?
                <img src="/twalightmodelogo.png" className="w-10"/> :
                <img src="/twadarkmodelogo.png" className="w-10"/>
            } */}
            <h1 className="text-3xl font-bold">Craftsman of code, creating stunning and performative websites.</h1>
        </section>
    )
}