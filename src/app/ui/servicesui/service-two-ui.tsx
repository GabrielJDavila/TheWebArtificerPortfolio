"use client"
import Link from "next/link"
import { Montserrat } from "next/font/google"
const mont = Montserrat({subsets: ["latin"], weight: ["200", "300"]})

export default function ServiceTwoUi() {
    return (
            <div className="w-full md:max-w-5xl bg-zinc-800 p-8">
                <div className="md:w-3/4 m-auto">
                    <h2 className={`${mont.className} text-2xl`}>A Well Designed and Performative Website</h2>
                    <br></br>
                    <p className={`${mont.className}`}>A website is the digital face of your business. It is what your potential customers see and interact with,
                        so it is important to have a well designed site that users love to use and conveys your business mission properly.
                    </p>
                    <br></br>
                    <p className={`${mont.className}`}>It starts with interviewing you - the owner/manager - to better understand your business, story, goals, and ideal customers.</p>
                    <br></br>
                    <p className={`${mont.className}`}>From there, I will design and develop a website that will meet your needs. I have checkpoints where I will check in with you to go
                        over key features. If you already have designs in mind, I can work with that as well! Already have a website, but need to have it freshened up? I work with
                        clients on updates and re-designs as well.
                    </p>
                    <br></br>
                    <p className={`${mont.className}`}>Contact me for a quote!</p>
                </div>
            </div>
    )
}