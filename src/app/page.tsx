import Image from "next/image";
import HomeUi from "./ui/homepageui/home";
import AboutUi from "./ui/homepageui/about";
export default function Page() {
  return (
    <main className="flex flex-col justify-center items-center text-center gap-20 py-24">
      <HomeUi />
      <AboutUi />
    </main>
  );
}
