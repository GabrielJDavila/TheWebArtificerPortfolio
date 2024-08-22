import Image from "next/image";
import HeroHomeUi from "./ui/homepageui/hero-home";
import AboutHomeUi from "./ui/homepageui/about-home";
import ServicesHomeUi from "./ui/homepageui/services-home";
import ProjectsHomeUi from "./ui/homepageui/projects-home";
export default function Page() {
  return (
    <main className="flex flex-col justify-center items-center text-center gap-20 py-24">
      <HeroHomeUi />
      <ServicesHomeUi />
      <AboutHomeUi />
      <ProjectsHomeUi />
    </main>
  );
}
