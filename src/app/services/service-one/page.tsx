"use client"
import ServiceOneUi from "@/app/ui/servicesui/service-one-ui"

export default function CustomSoftware() {
    return (
        <div className="text-left flex flex-col justify-center items-center">
            <ServiceOneUi />
            {/* <div className="md:px-4">
                <ServiceOneUi />
            </div> */}
        </div>
    )
}