"use client"

import { useFormState } from "react-dom"
import { useState, useRef } from "react"
import { Montserrat } from "next/font/google"

const mont = Montserrat({subsets: ["latin"], weight: ["200", "300"]})

export default function ContactUi() {
    const ref = useRef<HTMLFormElement>(null)

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        console.log(formData)
        if(ref.current) {
            ref.current.reset()
        }
    }
    return (
        <form ref={ref} onSubmit={handleSubmit} className="flex flex-col justify-center text-left items-center dark:bg-zinc-800 dark:border-gray-700 border-gray-200 border-2 p-4 rounded-xl w-full md:w-3/4 max-w-4xl shadow-lg">
            <div className="flex flex-col gap-4 mt-4 mb-8">
                <h2 className={`${mont.className}`}>Fill out the form below to get started!</h2>
                {/* <div className="text-center flex flex-row justify-center gap-4">
                    <a href="mailto:gabe.oroscodavila@gmail.com" className={`${mont.className} bg-sky-500 p-2 rounded hover:bg-sky-700 text-white`}>gabe.oroscodavila@gmail.com</a>
                    <a href="tel:6308640607" className={`${mont.className} bg-sky-500 p-2 rounded hover:bg-sky-700 text-white`}>(630) 864-0607</a>
                </div> */}
            </div>

            <fieldset className="flex flex-col gap-4 w-full p-4 md:w-3/4 my-4">
                <div className="flex flex-col w-full">
                    <label htmlFor="name" className={`${mont.className}`}>Name *</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className={`${mont.className} dark:bg-zinc-800 dark:border-b-gray-700 border-b-gray-200 border-b-2 w-full p-2`}
                        required
                    />
                </div>
                
                <div className="flex flex-col">
                    <label htmlFor="email" className={`${mont.className}`}>Email *</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className={`${mont.className} dark:bg-zinc-800 dark:border-b-gray-700 border-b-gray-200 border-b-2 w-full p-2`}
                        required
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="phone" className={`${mont.className}`}>Phone number *</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        className={`${mont.className} dark:bg-zinc-800 dark:border-b-gray-700 border-b-gray-200 border-b-2 w-full p-2`}
                        required
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="company-name" className={`${mont.className}`}>Company</label>
                    <input
                        type="text"
                        id="company"
                        name="company-name"
                        className={`${mont.className} dark:bg-zinc-800 dark:border-b-gray-700 border-b-gray-200 border-b-2 w-full p-2`}
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="website-name" className={`${mont.className}`}>Website</label>
                    <input
                        type="text"
                        id="website"
                        name="website-name"
                        className={`${mont.className} dark:bg-zinc-800 dark:border-b-gray-700 border-b-gray-200 border-b-2 w-full p-2`}
                    />
                </div>

                <div className="flex flex-col mt-2">
                    <label htmlFor="message" className={`${mont.className} mb-2`}>Tell us more about your project</label>
                    <textarea
                        id="message"
                        name="message"
                        className={`${mont.className} w-full h-48 resize-none rounded-xl dark:bg-zinc-800 bg-gray-100 dark:border-gray-500 border-gray-200 border-2 p-4`}
                    ></textarea>
                </div>
            </fieldset>
            <button type="submit" className="w-32 m-auto bg-sky-500 p-2 rounded hover:bg-sky-700 text-white">Send</button>
        </form>
    )
}