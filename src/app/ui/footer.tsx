import Link from "next/link"
import FooterLogo from "./footerlogo"

export default function Footer() {
    return (
        <footer className="flex flex-col justify-items items-center text center bg-zinc-800 flex justify-between pt-8 pb-2 px-4 items-center mt-auto">
            <Link href="/">
                <FooterLogo/>
            </Link>
            
            <ul className="flex flex-col md:flex-row flex-wrap justify-center items-center text-center p-4 text-white ease-in-out duration-200">
                <li className="p-2"><Link href="/">Home</Link></li>
                <li className="p-2"><Link href="/#about">About</Link></li>
                <li className="p-2"><Link href="/#projects-home">Portfolio</Link></li>
                <li className="p-2"><Link href="/#services">Services</Link></li>
                <li className="p-2"><Link href="/#services">Contact</Link></li>
            </ul>
            
            <small><p className="text-white">&copy; The Web Articifer 2024</p></small>
            <a href="https://gabedavila.com/" target="_blank" className="text-white"><small>Made with ❤️ by Gabriel Davila</small></a>
        </footer>
    )
}