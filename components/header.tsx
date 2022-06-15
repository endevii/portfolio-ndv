import React from "react";
import Link from "next/link";
import ThemeSwitch from "./themeSwitch";

// Making a gradient background
// bg-gradient-to-r from-slate-50 to-yellow-100 md:py-6

export default function Header() {
  return (
    <div className="sticky backdrop-blur-sm top-0 z-20 py-2 bg-slate-50 md:mb-6 dark:bg-zinc-900">
      <div className="container px-4 mx-auto lg:max-w-4xl flex items-center justify-between">
        <Link href={"/"}>
          <a
            className={
              "font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-200 dark:text-white dark:hover:text-yellow-200"
            }
          >
            <b>Joshua</b> Gorman
          </a>
        </Link>
        <div className="flex items-center font-light">
          <button className="transition-colors text-gray-900 hover:text-sky-200 dark:text-white dark:hover:text-yellow-200">
            Portfolio
          </button>
          <ThemeSwitch></ThemeSwitch>
        </div>
      </div>
    </div>
  );
}
