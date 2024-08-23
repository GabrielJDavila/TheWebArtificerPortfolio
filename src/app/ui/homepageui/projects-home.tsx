import Link from "next/link"

const projectsArr = [
    "100onthehill.png",
    "frenchmasteryblueprint.png",
    "mgcleanpros.png",
    "thefitbook.png"
]


export default function ProjectsHomeUi() {
    return (
        <section className="px-4">
            <h2 className="mb-8">Projects</h2>
            <div className="flex flex-wrap justify-center gap-4">

                <Link
                    href="https://100onthehill.com/"
                    target="_blank"
                >
                <div className="relative group">
                    <img
                        src="100onthehill.png"
                        alt="screenshot of 100 On The Hill website homepage."
                        className="w-full h-full max-w-md"
                    />
                    <div className="absolute transition-all ease-in-out duration-300 bottom-0 sm:h-auto w-full md:h-0 md:group-hover:h-16 dark:bg-slate-700 py-2 md:py-0 md:group-hover:py-2 md:overflow-hidden">
                        <h3>One Hundred On The Hill</h3>
                        <p>Charity Fitness Event</p>
                    </div>
                </div>
                </Link>
                <div className="relative group">
                    <img
                        src="frenchmasteryblueprint.png"
                        alt="screenshot of French Mastery Blueprint website homepage."
                        className="w-full max-w-md"
                    />
                    <div className="absolute transition-all ease-in-out duration-300 bottom-0 sm:h-auto w-full md:h-0 md:group-hover:h-16 dark:bg-slate-700 py-2 md:py-0 md:group-hover:py-2 md:overflow-hidden">
                        <h3>French Mastery Blueprint</h3>
                        <p>Online French Tutoring</p>
                    </div>
                </div>
                <div className="relative group">
                    <img
                        src="mgcleanpros.png"
                        alt="screenshot of M&G Clean Pros website homepage."
                        className="w-full max-w-md"
                    />
                    <div className="absolute transition-all ease-in-out duration-300 bottom-0 sm:h-auto w-full md:h-0 md:group-hover:h-16 dark:bg-slate-700 py-2 md:py-0 md:group-hover:py-2 md:overflow-hidden">
                        <h3>M&G Clean Pros</h3>
                        <p>Cleaning Services</p>
                    </div>
                </div>
                <div className="relative group">
                    <img
                        src="thefitbook.png"
                        alt="screenshot of The Fitbook dashboard page."
                        className="w-full max-w-md"
                    />
                    <div className="absolute transition-all ease-in-out duration-300 bottom-0 sm:h-auto w-full md:h-0 md:group-hover:h-16 dark:bg-slate-700 py-2 md:py-0 md:group-hover:py-2 md:overflow-hidden">
                        <h3>The Fitbook</h3>
                        <p>Fitness Journal Web Application</p>
                    </div>
                </div>
            </div>
        </section>
    )
}