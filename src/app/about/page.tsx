"use client"
import { useEffect, useState } from "react"
import { Inter, Montserrat } from "next/font/google"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"], weight: ["200", "300"] })
const mont = Montserrat({subsets: ["latin"], weight: ["200",  "300"]})

export default function About() {
    return (
        <main className="flex flex-col text-center gap-10 my-20 md:mt-20 p-8">
            <h1>About Me</h1>
            <p className={`${mont.className} dark:text-white text-left`}>I'm Gabriel, and I'm not your traditional developer. I have 7+ years in the fitness industry, developing excellent customer service and soft skills.
                In 2019 I learned how to code, and fell in love with the creative and problem-solving nature of web & software development.
                I now use my unique skillset to create stunning websites and helpful applications for small businesses, all while providing an unparalleled customer experience.
            </p>
        </main>
    )  
}