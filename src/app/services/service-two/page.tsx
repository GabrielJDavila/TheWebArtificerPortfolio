"use client"

import ServiceTwoUi from "@/app/ui/servicesui/service-two-ui"

export default function WebDevelopment() {
    return (
        <div className="text-left flex flex-col justify-center items-center">
            {/* <div className="w-full flex flex-col justify-center items-center md:px-4 m-auto">
                <div className="w-full max-w-5xl bg-sky-400 text-center p-8 flex flex-col justify-center items-center gap-4">
                    <img src="/WA_icon_v2.2.png" className="w-48 h-48 text-center m-auto"/>
                    <h1 className="text-3xl">Web Development</h1>
                </div>
            </div> */}
            <div className="md:px-4">
                <ServiceTwoUi />
            </div>
        </div>
    )
}