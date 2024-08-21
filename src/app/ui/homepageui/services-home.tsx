import { Montserrat } from "next/font/google"

const mont = Montserrat({subsets: ["latin"], weight: "200"})

export default function ServicesUi() {
    return (
        <section className="flex flex-col w-full text-center justify-center px-4 py-8">
                {/* <div className="absolute -top-12 bg-zinc-800 w-full h-32 skew-y-6 z-0"></div> */}
                <h2 className="z-20 my-4 text-xl">Do what you do best.</h2>
                <p className={`${mont.className}`}>Running a business is tough work. There are a million and 1 things to think and work on, and you don't need to add on the stress of building and managing your website.</p>
                <br></br>
                <p className={`${mont.className}`}>That is where my specialty lies: I'll handle the tech, you handle what you do best - running your business and helping your customers.</p>
                <br></br>
                <div className="flex flex-col gap-4 justify-left text-left mt-8">
                    <div className="flex flex-col justify-items-start gap-4 text-left dark:bg-zinc-800 px-4 py-8 rounded-3xl">
                        <div className="flex flex-row items-center gap-4">
                            <img src="/WA_icon_v2.1.png" className="w-12"/>
                            <p className="text-sky-500 text-lg">Custom Software</p>
                        </div>
                        <p className={`${mont.className}`}>Custom software that would help automate and streamline your business.</p>
                        <ul className="list-disc pl-4">
                            <li className={`${mont.className}`}>Customized software to meet your needs</li>
                            <li className={`${mont.className}`}>Lightweight, fast, and great utility</li>
                            <li className={`${mont.className}`}>Systemizes your business processes</li>
                            <li className={`${mont.className}`}>Automates time-consuming activities</li>
                        </ul>
                    </div>
                    <div className="flex flex-col justify-items-start gap-4 text-left dark:bg-zinc-800 px-4 py-8 rounded-3xl">
                        <div className="flex flex-row items-center gap-4">
                            <img src="/WA_icon_v2.2.png" className="w-12"/>
                            <p className="text-sky-500 text-lg">Web Development</p>
                        </div>
                        <p className={`${mont.className}`}>Optimized and performative websites.</p>
                        <ul className="list-disc pl-4">
                            <li className={`${mont.className}`}>Hand-crafted, beautifully designed websites</li>
                            <li className={`${mont.className}`}>High-speed, performative sites</li>
                            <li className={`${mont.className}`}>Optimized SEO to help generate leads for your business</li>
                            <li className={`${mont.className}`}>Uses best practices for user experience and accessibility</li>
                        </ul>
                    </div>
                    <div className="flex flex-col justify-items-start gap-4 text-left dark:bg-zinc-800 px-4 py-8 rounded-3xl">
                        <div className="flex flex-row items-center gap-4">
                            <img src="/WA_icon_v2.3.png" className="w-12"/>
                            <p className="text-sky-500 text-lg">Management, Hosting, and Security</p>
                        </div>
                        <p className={`${mont.className}`}>Save the headache of managing your website and software. Maintenance, security, and hosting is done for you.</p>
                        <ul className="list-disc pl-4">
                            <li className={`${mont.className}`}>General maintenance and updates regularly</li>
                            <li className={`${mont.className}`}>Your data and content, secured. We use best security practices to keep your business safe.</li>
                            <li className={`${mont.className}`}>Hosting your website with us saves the headache of doing it yourself. Host with me to ensure a fast and reliable website.</li>
                            <li className={`${mont.className}`}>Technical support in your back pocket. Think of me as your personal tech concierge.</li>
                        </ul>
                    </div>
                    
                </div>
        </section>
    )
}