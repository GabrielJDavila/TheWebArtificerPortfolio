import ContactUi from "../ui/contactui/contactui"

export default function Contact() {
    return (
        <main className="flex flex-col justify-center items-center my-20 md:my-32 w-full p-4">
            <h1 className="text-2xl mb-4">Contact</h1>
            <ContactUi />
        </main>
    )
}