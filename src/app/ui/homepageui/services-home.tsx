
export default function ServicesUi() {
    return (
        <section className="flex flex-col w-full text-center justify-center px-4 py-8">
                {/* <div className="absolute -top-12 bg-zinc-800 w-full h-32 skew-y-6 z-0"></div> */}
                <h2 className="z-20 my-4 text-xl">Do what you do best.</h2>
                <p>Running a business is tough work. There are a million and 1 things to think and work on, and you don't need to add on the stress of building and managing your website.</p>
                <br></br>
                <p>That is where my specialty lies: I'll handle the tech, you handle what you do best: running your business and helping your customers.</p>
                <br></br>
                <div className="flex flex-row flex-wrap gap-4 justify-center items-center mt-8">
                    <div className="flex flex-col justify-center gap-4 items-center text-center dark:bg-zinc-800 px-4 py-8 rounded-3xl">
                        {/* <img src="/WA_logos_1.png" className="w-1/2"/> */}
                        <p className="text-green-400 text-lg">🔹Optimized websites</p>
                    </div>
                    <div className="flex flex-col justify-center gap-4 items-center text-center dark:bg-zinc-800 px-4 py-8 rounded-3xl">
                        {/* <img src="/WA_logos_2.png" className="w-1/2"/> */}
                        <p className="text-green-400 text-lg">🔹Hand-crafted design</p>
                    </div>
                    <div className="flex flex-col justify-center gap-4 items-center text-center dark:bg-zinc-800 px-4 py-8 rounded-3xl">
                        {/* <img src="/WA_logos_3.png" className="w-1/2"/> */}
                        <p className="text-green-400 text-lg">🔹Secure</p>
                    </div>
                    <div className="flex flex-col justify-center gap-4 items-center text-center dark:bg-zinc-800 px-4 py-8 rounded-3xl">
                        {/* <img src="/WA_logos_4.png" className="w-1/2"/> */}
                        <p className="text-green-400 text-lg">🔹Maintained for you</p>
                    </div>
                    
                </div>
        </section>
    )
}