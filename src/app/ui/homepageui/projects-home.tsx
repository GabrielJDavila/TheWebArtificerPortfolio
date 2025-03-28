import Link from "next/link"
import { Montserrat } from "next/font/google"
import Image from "next/image"

const mont = Montserrat({subsets: ["latin"], weight: ["200", "300"]})

export default function ProjectsHomeUi() {
    return (
        <section id="projects-home" className="px-4 max-w-5xl">
            <h2 className="mb-8 text-2xl">Portfolio</h2>
            <div className="flex flex-wrap justify-center gap-4">

                <Link
                    href="https://100onthehill.com/"
                    target="_blank"
                >
                    <div className="relative group overflow-hidden border-2 border-zinc-200 shadow-md dark:border-none dark:shadow-none">
                        <Image
                            src="/100onthehill.png"
                            alt="screenshot of 100 On The Hill website homepage."
                            width={500}
                            height={500}
                            className="w-full h-full max-w-md object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
                        />
                        <div className="absolute transition-all ease-in-out duration-300 bottom-0 sm:h-auto w-full md:h-0 md:group-hover:h-16 bg-slate-700 text-white py-2 md:py-0 md:group-hover:py-2 md:overflow-hidden">
                            <h3 className={`${mont.className}`}>One Hundred On The Hill</h3>
                            <p className={`${mont.className}`}>Charity Fitness Event</p>
                        </div>
                    </div>
                </Link>
                <Link
                    href="https://frenchmasteryblueprint.com/"
                    target="_blank"
                >
                    <div className="relative group overflow-hidden border-2 border-zinc-200 shadow-md dark:border-none dark:shadow-none">
                        <Image
                            src="/frenchmasteryblueprint.png"
                            alt="screenshot of French Mastery Blueprint website homepage."
                            width={500}
                            height={500}
                            className="w-full max-w-md object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
                        />
                        <div className="absolute transition-all ease-in-out duration-300 bottom-0 sm:h-auto w-full md:h-0 md:group-hover:h-16 bg-slate-700 text-white py-2 md:py-0 md:group-hover:py-2 md:overflow-hidden">
                            <h3 className={`${mont.className}`}>French Mastery Blueprint</h3>
                            <p className={`${mont.className}`}>Online French Tutoring</p>
                        </div>
                    </div>
                </Link>
                <Link
                    href="https://mgcleanpros.com/"
                    target="_blank"
                >
                    <div className="relative group overflow-hidden border-2 border-zinc-200 shadow-md dark:border-none dark:shadow-none">
                        <Image
                            src="/mgcleanpros.png"
                            alt="screenshot of M&G Clean Pros website homepage."
                            width={500}
                            height={500}
                            className="w-full max-w-md object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
                        />
                        <div className="absolute transition-all ease-in-out duration-300 bottom-0 sm:h-auto w-full md:h-0 md:group-hover:h-16 bg-slate-700 text-white py-2 md:py-0 md:group-hover:py-2 md:overflow-hidden">
                            <h3 className={`${mont.className}`}>M&G Clean Pros</h3>
                            <p className={`${mont.className}`}>Cleaning Services</p>
                        </div>
                    </div>
                </Link>
                <Link
                    href="https://thefitbook.netlify.app/"
                    target="_blank"
                >
                    <div className="relative group overflow-hidden border-2 border-zinc-200 shadow-md dark:border-none dark:shadow-none">
                        <Image
                            src="/thefitbook.png"
                            alt="screenshot of The Fitbook dashboard page."
                            width={500}
                            height={500}
                            className="w-full max-w-md object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
                        />
                        <div className="absolute transition-all ease-in-out duration-300 bottom-0 sm:h-auto w-full md:h-0 md:group-hover:h-16 bg-slate-700 text-white py-2 md:py-0 md:group-hover:py-2 md:overflow-hidden">
                            <h3 className={`${mont.className}`}>The Fitbook</h3>
                            <p className={`${mont.className}`}>Fitness Web App</p>
                        </div>
                    </div>
                </Link>
            </div>
        </section>
    )
}