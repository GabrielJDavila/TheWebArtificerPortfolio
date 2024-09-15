"use client"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Montserrat } from "next/font/google"
const mont = Montserrat({subsets: ["latin"], weight: ["200", "300"]})

export default function ServiceOneUi() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {
        if(typeof window !== "undefined") {
            const handleResize = () => setWindowWidth(window.innerWidth)
            window.addEventListener("resize", handleResize)

            return () => window.removeEventListener("resize", handleResize)
        }
    }, [])

    return (
        <div className="w-full md:max-w-5xl bg-zinc-800 py-20 md:pt-24 px-8">
            <div className="w-full flex flex-col justify-center items-center md:px-4 m-auto">
                <div className="w-full max-w-5xl text-center p-8 flex flex-col justify-center items-center gap-4">
                    {/* <img src="/WA_icon_v2.1.png" className="w-48 h-48 text-center m-auto"/> */}
                    <h1 className="text-3xl text-white">Custom Software</h1>
                </div>
            </div>
            {windowWidth < 1024 ?
            <div className="w-full flex flex-col justify-center items-center m-auto">
                <h2 className={`${mont.className} text-2xl text-left md:w-3/4 lg:w-1/2 text-white`}>Why a Business Needs Software</h2>
                <br></br>
                <img src="/softwareimg.png" className="w-full md:w-3/4 lg:w-1/2"/>
                <br></br>
                <div className="md:w-3/4 lg:w-1/2 text-white">
                    <p className={`${mont.className}`}>As a business owner/manager, you know that there are so many things to do in a day, and only so much time.</p>
                    <br></br>
                    <p className={`${mont.className}`}>There are many minute tasks that suck up your time, time that could be better used to serve customers or build the business.</p>
                    <br></br>
                    <p className={`${mont.className}`}>What if you could automate or streamline certain business tasks? That is where software comes in. Custom software that is tailored
                    to your business needs can increase productivity, decrease costs, and allow you the time to focus on what you do best - running
                    the business!
                    </p>
                </div>
                <Link href="/contact" className="w-20 text-center text-white mt-8 bg-sky-500 hover:bg-sky-700 p-2 rounded-full">Contact</Link>
            </div>
            :
            <div className="w-full flex flex-row justify-center items-center m-auto gap-12">
                <div className="md:w-3/4 lg:w-1/2 flex flex-col justify-center gap-4 text-white">
                    <h2 className={`${mont.className} text-2xl text-left md:w-3/4 lg:w-full text-white`}>Why a Business Needs Software</h2>
                    <p className={`${mont.className}`}>As a business owner/manager, you know that there are so many things to do in a day, and only so much time.</p>
                    
                    <p className={`${mont.className}`}>There are many minute tasks that suck up your time, time that could be better used to serve customers or build the business.</p>
                    
                    <p className={`${mont.className}`}>What if you could automate or streamline certain business tasks? That is where software comes in. Custom software that is tailored
                    to your business needs can increase productivity, decrease costs, and allow you the time to focus on what you do best - running
                    the business!
                    </p>
                    <Link href="/contact" className="w-20 text-center bg-sky-500 hover:bg-sky-700 p-2 rounded-full">Contact</Link>
                </div>
                <img src="/softwareimg.png" className="w-full md:w-3/4 lg:w-1/2"/>
            </div>
            }
        </div>
    )
}

// import Link from "next/link"
// import { Montserrat } from "next/font/google"
// const mont = Montserrat({subsets: ["latin"], weight: ["200", "300"]})

// export default function ServiceOneUi() {
//     return (
//         <div className="w-full md:max-w-5xl bg-zinc-800 p-8">
//             {/* <div>
//                 <img src="/WA_icon_v2.1.png" className="w-20"/>
//                 <h1>Custom Software</h1>
//             </div> */}

//             <div>
//                 <h2 className={`${mont.className} text-2xl`}>Why a Business Needs Software</h2>
//                 <br></br>
//                 <p className={`${mont.className}`}>As a business owner/manager, you know that there are so many things to do in a day, and only so much time.</p>
//                 <br></br>
//                 <p className={`${mont.className}`}>There are many minute tasks that suck up your time - time that could be better used to serve customers or build the business.</p>
//                 <br></br>
//                 <p className={`${mont.className}`}>What if you could automate or streamline certain business tasks? That is where software comes in. Custom software that is tailored
//                     to your business needs can increase productivity, decrease costs, and allow you the time to focus on what you do best - running
//                     the business!
//                 </p>
                
//             </div>
//         </div>
//     )
// }