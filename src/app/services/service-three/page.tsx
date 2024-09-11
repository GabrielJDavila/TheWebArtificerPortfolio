"use client"
import ServiceThreeUi from "@/app/ui/servicesui/service-three-ui"

export default function Management() {
    return (
        <div className="text-left flex flex-col justify-center items-center">
            {/* <div className="w-full flex flex-col justify-center items-center md:px-4 m-auto pt-20">
                <div className="w-full max-w-5xl bg-zinc-900 text-center p-8 flex flex-col justify-center items-center gap-4">
                    <img src="/WA_icon_v2.3.png" className="w-48 h-48 text-center m-auto"/>
                    <h1 className="text-3xl">Management, Hosting, & Security</h1>
                </div>
            </div> */}
            <div className="md:px-4">
                <ServiceThreeUi />
            </div>
        </div>
    )
}