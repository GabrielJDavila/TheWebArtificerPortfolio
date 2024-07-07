"use client"
import { useEffect, useState } from "react"
import LogoColorMode from "./logocolormode"

export default function HomeUi() {
    return (
        <section className="flex flex-col gap-8">
            <LogoColorMode />
            {/* <img src="/twadarkmodelogo.png" className="w-52 rounded-full m-auto"/> */}
            <h1 className="text-3xl font-bold">Craftsman of code, creating stunning and performative websites.</h1>
        </section>
    )
}