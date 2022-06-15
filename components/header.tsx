import React from "react";
import Link from "next/link";
import ThemeSwitch from "./themeSwitch";

export default function Header() {
  return (
    <div className="sticky top-0 z-20 py-2 bg-white md:py-6 md:mb-6 dark:bg-black">
      <div className="container px-4 mx-auto lg:max-w-4xl flex items-center justify-between">
        <Link href={"/"}>
          <a
            className={
              "font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 dark:text-white dark:hover:text-yellow-200"
            }
          >
            Joshua Gorman
          </a>
        </Link>
        <div>
          <Link href={"/"}>
            <a className=""></a>
          </Link>
          <ThemeSwitch></ThemeSwitch>
        </div>
      </div>
    </div>
  );
}
