"use client"
import { useEffect, useState } from "react"
import { Inter, Montserrat } from "next/font/google"
import LogoColorMode from "../logocolormode"
import { useColorTheme } from "../../lib/ColorModeContext"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"], weight: ["200", "300"] })
const mont = Montserrat({subsets: ["latin"], weight: ["200",  "300"]})

export default function AboutHomeUi() {
   const {colorTheme, setColorTheme} = useColorTheme()
   console.log(colorTheme)

    return (
        <section className="flex flex-col gap-12 mt-20 bg-slate-100 dark:bg-zinc-800 p-8">
            <h2 className="my-4 text-2xl">About Me</h2>
            <div className="flex flex-col gap-8">
                <img
                    src="blackshirtvv1.png"
                    alt="picture of Gabriel Davila, wearing a black collared shirt against a beige background."
                    className="flex flex-col w-1/2 lg:w-1/4 text-center justify-center items-center m-auto rounded-3xl rotate-3 shadow"
                />
                <p className={`${mont.className} dark:text-white text-left`}>I'm Gabriel, and I'm not your traditional developer. I have 7+ years in the fitness industry, developing excellent customer service and soft skills.
                    In 2019 I learned how to code, and fell in love with the creative and problem-solving nature of web & software development.
                    I now use my unique skillset to create stunning websites and helpful applications for small businesses, all while providing an unparalleled customer experience.</p>
                <Link href="#" className="bg-sky-600 text-white w-24 m-auto p-2 rounded-full hover:bg-sky-700">Read more</Link>
            </div>
            
        </section>
    )
}