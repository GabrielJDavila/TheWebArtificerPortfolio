import Image from "next/image";
import HomeUi from "./ui/homepageui/home";
import AboutUi from "./ui/homepageui/about-home";
import ServicesUi from "./ui/homepageui/services-home";
export default function Page() {
  return (
    <main className="flex flex-col justify-center items-center text-center gap-20 py-24">
      <HomeUi />
      <ServicesUi />
      <AboutUi />
    </main>
  );
}
