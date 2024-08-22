

export default function ProjectsHomeUi() {
    return (
        <section>
            <h2 className="mb-8">Projects</h2>
            <div className="flex flex-wrap justify-center gap-4">
                <div>
                    <img
                        src="100onthehill.png"
                        alt="screenshot of 100 On The Hill website homepage."
                        className="w-full max-w-md"
                    />
                    <div className="bg-sky-500">
                        <h3>One Hundred On The Hill</h3>
                        <p>Charity Fitness Event</p>
                    </div>
                </div>
                <div>
                    <img
                        src="frenchmasteryblueprint.png"
                        alt="screenshot of French Mastery Blueprint website homepage."
                        className="w-full max-w-md"
                    />
                    <div className="bg-sky-500">
                        <h3>French Mastery Blueprint</h3>
                        <p>Online French Tutoring</p>
                    </div>
                </div>
                <div>
                    <img
                        src="mgcleanpros.png"
                        alt="screenshot of M&G Clean Pros website homepage."
                        className="w-full max-w-md"
                    />
                    <div className="bg-sky-500">
                        <h3>M&G Clean Pros</h3>
                        <p>Cleaning Services</p>
                    </div>
                </div>
                <div>
                    <img
                        src="thefitbook.png"
                        alt="screenshot of The Fitbook dashboard page."
                        className="w-full max-w-md"
                    />
                    <div className="bg-sky-500">
                        <h3>The Fitbook</h3>
                        <p>Fitness Journal Web Application</p>
                    </div>
                </div>
            </div>
        </section>
    )
}