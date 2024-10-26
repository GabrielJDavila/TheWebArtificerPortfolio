"use client"
import { useEffect, useState } from "react"
import { Inter, Montserrat } from "next/font/google"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"], weight: ["200", "300"] })
const mont = Montserrat({subsets: ["latin"], weight: ["200",  "300"]})

export default function AboutPageUi() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {
        if(typeof window !== "undefined") {
            const handleResize = () => setWindowWidth(window.innerWidth)
            window.addEventListener("resize", handleResize)

            return () => window.removeEventListener("resize", handleResize)
        }
    }, [])

    console.log(windowWidth)
    
    return (
        windowWidth < 1024 ?
        <div className="flex flex-col justify-center text-center items-center gap-8 md:w-3/4 lg:max-w-5xl m-auto items-center">
            <div className="flex flex-col flex-wrap text-center justify-center items-center w-3/4 max-w-96 m-auto mx-8 my-4 lg:my-8">
                <img
                    src="blackshirtvv1.png"
                    alt="picture of Gabriel Davila, wearing a black collared shirt against a beige background."
                    className="w-full rounded-3xl rotate-3 shadow"
                />
          
            </div>

            <div className="text-left lg:w-full">
                <h1 className="my-4 text-2xl">Hi, I'm Gabriel.</h1>
                <p className={`${mont.className} dark:text-white text-left`}>I'm not your traditional developer. I started my career in the fitness industry as a personal trainer. As a trainer, I got to meet so many different types of people, and learned so much. I developed excellent skills
                    such as customer service, sales, coaching, leadership qualities, and more.
                </p>
                <br></br>
                <p className={`${mont.className} dark:text-white text-left`}>While I love training, I had a certain creative and analytical itch that needed to be scratched. I did some research, and found programming.
                    What started as some tinkering turned into a passion; I love the creative yet problem-solving aspect of programming, as I get to see my projects come to life like a carpenter sees the house they built.
                </p>
                <br></br>
                <p className={`${mont.className} dark:text-white text-left`}>
                    I now use my unique skillset to create stunning websites and helpful applications for small businesses. I love solving problems for people,
                    and whether it's to improve a business function, troubleshoot a technical problem, designing a website, or creating an application, I do it all while providing an unparalled customer experience.
                </p>
            </div>


            <div className="text-left flex flex-col justify-items-start gap-2 w-full lg:order-last">

                    <div className="flex flex-row text-left items-center justify-center gap-4 mr-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>
                        <p className="text-left">gabe.oroscodavila@gmail.com</p>
                    </div>

                    <div className="flex flex-row text-left items-center justify-center gap-4 mr-auto">
                        <i className="devicon-github-original"></i>
                        <p className="text-left">Follow me on GitHub</p>
                    </div>

                    <div className="flex flex-row text-left items-center justify-center gap-4 mr-auto">
                        <i className="devicon-linkedin-plain mr-auto"></i>
                        <p>Follow me on LinkedIn</p>
                    </div>
            </div>
        </div>
        :
        <div className="flex flex-row justify-center text-center items-center gap-8 md:w-3/4 lg:max-w-5xl m-auto items-center">
            <div className="flex flex-col flex-wrap text-center justify-center items-center gap-12 w-3/4 md:w-full sm:max-w-96 lg:max-w-md m-auto mx-8 my-4 lg:my-8">
                <img
                    src="blackshirtvv1.png"
                    alt="picture of Gabriel Davila, wearing a black collared shirt against a beige background."
                    className="w-full rounded-3xl rotate-3 shadow"
                />
                <div className="text-left flex flex-col justify-items-start gap-2 w-full lg:order-last">

                    <div className="flex flex-row text-left items-center justify-center gap-4 mr-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>
                        <p className="w-4">gabe.oroscodavila@gmail.com</p>
                    </div>

                    <div className="flex flex-row text-left items-center justify-center gap-4 mr-auto">
                        <i className="devicon-github-original"></i>
                        <p className="text-left">Follow me on GitHub</p>
                    </div>

                    <div className="flex flex-row text-left items-center justify-center gap-4 mr-auto">
                        <i className="devicon-linkedin-plain mr-auto"></i>
                        <p>Follow me on LinkedIn</p>
                    </div>
                </div>
            </div>

            <div className="text-left lg:w-full lg:order-first">
                <h1 className="my-4 text-2xl">Hi, I'm Gabriel.</h1>
                <p className={`${mont.className} dark:text-white text-left`}>I'm not your traditional developer. I started my career in the fitness industry as a personal trainer. As a trainer, I got to meet so many different types of people, and learned so much. I developed excellent skills
                    such as customer service, sales, coaching, leadership qualities, and more.
                </p>
                <br></br>
                <p className={`${mont.className} dark:text-white text-left`}>While I love training, I had a certain creative and analytical itch that needed to be scratched. I did some research, and found programming.
                    What started as some tinkering turned into a passion; I love the creative yet problem-solving aspect of programming, as I get to see my projects come to life like a carpenter sees the house they built.
                </p>
                <br></br>
                <p className={`${mont.className} dark:text-white text-left`}>
                    I now use my unique skillset to create stunning websites and helpful applications for small businesses. I love solving problems for people,
                    and whether it is to improve a business function, troubleshoot a technical problem, designing a website, or creating an application, I do it all while providing an unparalled customer experience.
                </p>
            </div>
        </div>
    )
}