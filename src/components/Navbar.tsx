import Link from "next/link";
import SocialMedia from "./SocialMedia";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className=" flex items-center justify-between xs:flex-row py-2 border-b-2 border-secondbgcolor dark:border-maincolor sticky top-0 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-10">
      <nav className=" flex md:flex md:items-center md:justify-center md:gap-x-24 font-bold uppercase">
        <Link href={"/"} className="text-2xl text-dark dark:text-light lg:text-4xl md:text-3xl grid sm:grid-cols-2 gap-2 items-center">
          Malik Hunain<span className="text-2xl lg:text-4xl md:text-3xl text-maincolor ml-14 md:ml-0 lg:ml-0">Blog.</span>
        </Link>
        {/* <Link href={"/blogs"} className="bg-accentDarkSecondary px-4 py-1 rounded-lg text-dark ">Blogs</Link> */}
      </nav>
      <SocialMedia />
      <ThemeToggle />
    </header>
  );
}
