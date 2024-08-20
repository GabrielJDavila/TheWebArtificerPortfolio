"use client"
import { useEffect, useState } from "react"
import LogoColorMode from "../logocolormode"
import { useColorTheme } from "../../lib/ColorModeContext"
import Link from "next/link"

export default function AboutUi() {
   const {colorTheme, setColorTheme} = useColorTheme()
   console.log(colorTheme)
    return (
        <section className="flex flex-col gap-12 mt-20 dark:bg-zinc-800 p-8">
            <h2 className="my-4 text-xl">About Me</h2>
            <div className="flex flex-col gap-8">
                <img
                    src="blackshirtvv1.png"
                    alt="picture of Gabriel Davila, wearing a black collared shirt against a beige background."
                    className="flex flex-col w-1/2 lg:w-1/4 text-center justify-center items-center m-auto rounded-3xl rotate-3"
                />
                <p>I'm Gabriel, I'm a former fitness coach turned web developer. I use my skills to create stunning websites and helpful applications for small businesses.</p>
            </div>
            
        </section>
    )
}