"use client"
import Link from "next/link"
import { Montserrat } from "next/font/google"
const mont = Montserrat({subsets: ["latin"], weight: ["200", "300"]})

export default function ServiceOneUi() {
    return (
        <div className="w-full md:max-w-5xl bg-zinc-800 p-8 my-8">
            {/* <div>
                <img src="/WA_icon_v2.1.png" className="w-20"/>
                <h1>Custom Software</h1>
            </div> */}

            <div>
                <h2 className={`${mont.className} text-2xl`}>Why a Business Needs Software</h2>
                <br></br>
                <p className={`${mont.className}`}>As a business owner/manager, you know that there are so many things to do in a day, and only so much time.</p>
                <br></br>
                <p className={`${mont.className}`}>There are many minute tasks that suck up your time - time that could be better used to serve customers or build the business.</p>
                <br></br>
                <p className={`${mont.className}`}>What if you could automate or streamline certain business tasks? That is where software comes in. Custom software that is tailored
                    to your business needs can increase productivity, decrease costs, and allow you the time to focus on what you do best - running
                    the business!
                </p>
                
            </div>
        </div>
    )
}