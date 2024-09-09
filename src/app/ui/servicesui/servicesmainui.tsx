"use client"
import Link from "next/link"
import { Montserrat } from "next/font/google"
const mont = Montserrat({subsets: ["latin"], weight: ["200", "300"]})

export default function ServicesMainUi() {
    return (
        <div className="p-4">
            <h1>Services</h1>
            {/* <Link href="services/service-one">Custom Software</Link>
            <Link href="services/service-two">Web Developement</Link>
            <Link href="services/service-three">Management, Hosting, and Security</Link> */}
            <div className="flex flex-col gap-4 justify-center items-center w-full mt-8">
                    <div className="flex flex-col justify-items-start gap-4 text-left border-4 shadow-lg bg-slate-100 dark:border-zinc-700 dark:bg-zinc-800 px-4 py-8 rounded-3xl w-full max-w-4xl">
                        <div className="flex flex-row items-center gap-4">
                            <img src="/WA_icon_v2.1.png" className="w-12"/>
                            <p className="text-sky-500 text-lg">Custom Software</p>
                        </div>
                        <p className={`${mont.className}`}>As a business owner, it can be challenging to handle all the tasks in a given day;
                            That is where software come in. I can build custom software that would help automate and streamline 
                            your business operations and tasks.</p>
                        <Link href="services/service-one" className="bg-sky-600 w-32 text-center rounded-full py-2">Learn more</Link>
                    </div>
                    <div className="flex flex-col justify-items-start gap-4 text-left border-4 shadow-lg bg-slate-100 dark:border-zinc-700 dark:bg-zinc-800 px-4 py-8 rounded-3xl w-full max-w-4xl">
                        <div className="flex flex-row items-center gap-4">
                            <img src="/WA_icon_v2.2.png" className="w-12"/>
                            <p className="text-sky-500 text-lg">Web Development</p>
                        </div>
                        <p className={`${mont.className}`}>A website is the digital face of your business, and as such it's important to have an
                            optimized and performative website. I design and develop websites with expertly crafted user experience, SEO, and performance.
                        </p>
                        <Link href="services/service-two" className="bg-sky-600 w-32 text-center rounded-full py-2">Learn more</Link>
                    </div>
                    <div className="flex flex-col justify-items-start gap-4 text-left border-4 shadow-lg bg-slate-100 dark:border-zinc-700 dark:bg-zinc-800 px-4 py-8 rounded-3xl w-full max-w-4xl">
                        <div className="flex flex-row items-center gap-4">
                            <img src="/WA_icon_v2.3.png" className="w-12"/>
                            <p className="text-sky-500 text-lg">Management, Hosting, and Security</p>
                        </div>
                        <p className={`${mont.className}`}>Save the headache of managing your website and software. Maintenance, security, 
                            and hosting is done for you. A secure and well-maintained website is important to keep your customers and your
                            business safe.</p>
                        <Link href="services/service-three" className="bg-sky-600 w-32 text-center rounded-full py-2">Learn more</Link>
                    </div>
                    
            </div>
        </div>
    )
}