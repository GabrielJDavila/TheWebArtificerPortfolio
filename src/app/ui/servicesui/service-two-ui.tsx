"use client"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Montserrat } from "next/font/google"
import Image from "next/image"
const mont = Montserrat({subsets: ["latin"], weight: ["200", "300"]})

export default function ServiceTwoUi() {

    return (
        <div className="w-full md:max-w-4xl bg-zinc-800 py-20 md:pt-24 px-8 text-white mb-16">
            <div className="w-full max-w-5xl text-center p-8 flex flex-col justify-center items-center gap-4">
                    {/* <img src="/WA_icon_v2.1.png" className="w-48 h-48 text-center m-auto"/> */}
                    <h1 className="text-3xl">Web Development</h1>
            </div>
            
            <div className="w-full flex flex-col justify-center items-center m-auto text-white lg:hidden">
                <h2 className={`${mont.className} text-2xl text-left md:w-3/4 lg:w-1/2`}>A Well Designed and Performative Website</h2>
                <br></br>
                <Image src="/webdesignimg.png" className="w-full md:w-3/4 lg:w-1/2" alt="image of website on various devices; laptop, tablet, phone." width={500} height={500}/>
                <br></br>
                <div className="md:w-3/4 lg:w-1/2">
                    <p className={`${mont.className}`}>A website is the digital face of your business. It is what your potential customers see and interact with,
                    so it is important to have a well designed site that users love to use and conveys your business mission properly.</p>
                    <br></br>
                    <p className={`${mont.className}`}>It starts with interviewing you - the owner/manager - to better understand your business, story, goals, and ideal customers.</p>
                    <br></br>
                    <p className={`${mont.className}`}>From there, I will design and develop a website that will meet your needs. I have checkpoints where I will check in with you to go
                        over key features. If you already have designs in mind, I can work with that as well! Already have a website, but need to have it freshened up? I work with
                        clients on updates and re-designs as well.
                    </p>
                </div>
                <Link href="/contact" className="w-20 text-center mt-8 bg-sky-500 hover:bg-sky-700 p-2 rounded-full">Contact</Link>
            </div>
            
            <div className="hidden lg:flex flex-row w-full justify-center items-center m-auto gap-12">
                <div className="md:w-3/4 lg:w-1/2 flex flex-col justify-center gap-4">
                    <h2 className={`${mont.className} text-2xl text-left md:w-3/4 lg:w-full`}>A Well Designed and Performative Website</h2>
                    <p className={`${mont.className}`}>A website is the digital face of your business. It is what your potential customers see and interact with,
                    so it is important to have a well designed site that users love to use and conveys your business mission properly.</p>
                    
                    <p className={`${mont.className}`}>It starts with interviewing you - the owner/manager - to better understand your business, story, goals, and ideal customers.</p>
                    
                    <p className={`${mont.className}`}>From there, I will design and develop a website that will meet your needs. I have checkpoints where I will check in with you to go
                        over key features. If you already have designs in mind, I can work with that as well! Already have a website, but need to have it freshened up? I work with
                        clients on updates and re-designs as well.
                    </p>
                    <Link href="/contact" className="w-20 text-center bg-sky-500 hover:bg-sky-700 p-2 rounded-full">Contact</Link>
                </div>
                <Image src="/webdesignimg.png" className="w-full md:w-3/4 lg:w-1/2" alt="image of website on various devices; laptop, tablet, phone." width={500} height={500}/>
            </div>
            
        </div>
    )
}