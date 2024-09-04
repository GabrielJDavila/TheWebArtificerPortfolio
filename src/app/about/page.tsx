"use client"
import { useEffect, useState } from "react"
import AboutPageUi from "../ui/aboutpageui/aboutui"

export default function About() {
    return (
        <main className="flex flex-col text-center gap-10 my-20 md:mt-20 p-8">
            <AboutPageUi />
        </main>
    )  
}