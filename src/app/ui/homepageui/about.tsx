"use client"
import { useEffect, useState } from "react"
import LogoColorMode from "../logocolormode"
import { useColorTheme } from "../../lib/ColorModeContext"
import Link from "next/link"

export default function HomeUi() {
   const {colorTheme, setColorTheme} = useColorTheme()
   console.log(colorTheme)
    return (
        <section className="flex flex-col gap-12">
            <h2 className="my-4 text-xl">About Me</h2>
            <img
                src="blackshirtvv1.png"
                alt="picture of Gabriel Davila, wearing a black collared shirt against a beige background."
                className="flex flex-col w-1/2 text-center justify-center items-center m-auto rounded-full"
            />
        </section>
    )
}