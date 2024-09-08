"use client"

import { useFormState } from "react-dom"
import { useState, useRef } from "react"

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
        <form ref={ref} onSubmit={handleSubmit} className="flex flex-col justify-center text-left items-center">
            <div>
                <h2>Fill out the form below to get started. Or contact me at</h2>
                <div>
                    <a href="mailto:gabe.oroscodavila@gmail.com">gabe.oroscodavila@gmail.com</a>
                    <a href="tel:6308640607">(630) 864-0607</a>
                </div>
            </div>

            <fieldset>
                <div>
                    <label htmlFor="name">Name *</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                    />
                </div>
                
                <div>
                    <label htmlFor="email">Email *</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="phone">Phone number *</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="company-name">Company</label>
                    <input
                        type="text"
                        id="company"
                        name="company-name"
                    />
                </div>

                <div>
                    <label htmlFor="website-name">Website</label>
                    <input
                        type="text"
                        id="website"
                        name="website-name"
                    />
                </div>

                <div>
                    <label htmlFor="message">Tell us more about your project</label>
                    <textarea
                        id="message"
                        name="message"
                    ></textarea>
                </div>
            </fieldset>
            <button type="submit">Send</button>
        </form>
    )
}