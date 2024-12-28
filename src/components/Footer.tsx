import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className=" w-full bg-bgcolor mt-6">
      <section className="flex flex-col md:flex-row"></section>
      <section className=" px-6 xs:px-8 sm:px-12  lg:px-16 xl:px-24 2xl:px-32 py-4 text-center flex flex-col sm:flex-row justify-between items-center gap-2 bg-transparent outline-none border-[0.2rem] border-maincolor shadow-[0_0_2em] text-[2rem] text-bgcolor transition-all duration-500 hover:bg-transparent hover:text-maincolor hover:ring-2 hover:ring-maincolor scroll-m-20 text-base font-semibold tracking-tight  dark:shadow-[0_0_2rem] dark:text-light/90 dark:hover:text-maincolor dark:hover:ring-2 dark:hover:ring-maincolor dark:hover:bg-transparent dark:hover:shadow-[0_0_2rem] dark:scroll-m-20">
        <div className="flex justify-center items-center gap-x-2 text-sm text-light">
          <p className="">
            Developed
            <span>&nbsp;💖&nbsp;with&nbsp;</span>
          </p>
          <Link href={"https://nextjs.org/"} target="_blank">
            <Image src="/nextjs.svg" alt="next.js 14" width={24} height={24} />
          </Link>
          <span className="text-light">&nbsp;&&nbsp;</span>
          <Link href={"https://sanity.io/"} target="_blank">
            <Image src="/sanity.svg" alt="sanity" width={24} height={24} />
          </Link>
        </div>

        <div>
          <p className="text-xs text-light">
            © 2024{" "}
            <span className="text-light font-bold">&nbsp;Malik Hunain</span>
            <span className="text-maincolor font-bold">Blog.&nbsp;</span> All
            rights reserved.
          </p>
        </div>
      </section>
    </footer>
  );
}
