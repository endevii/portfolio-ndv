import React from "react";
import Link from "next/link";
import ThemeSwitch from "./themeSwitch";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useScrollPosition from "../hooks/useScrollPosition";
// Making a gradient background
// bg-gradient-to-r from-slate-50 to-yellow-100 md:py-6

export default function Header() {
  function classNames(...classes: String[]) {
    return classes.filter(Boolean).join(" ");
  }
  const scrollPosition = useScrollPosition();

  return (
    // md:mb-6
    <motion.div
      className={classNames(
        scrollPosition > 0
          ? "bg-opacity-50 bg-slate-50 dark:bg-slate-500 dark:bg-opacity-50 drop-shadow-xl backdrop-blur-sm"
          : "bg-opacity-100 bg-gray-100 dark:bg-zinc-700 dark:bg-opacity-100",
        "sticky top-0 z-20 py-2 rounded-sm transition-color duration-300 ease-in-out"
      )}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          opacity: 0,
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: 0.4,
          },
        },
      }}
    >
      <div className="container px-4 mx-auto lg:max-w-4xl flex items-center justify-between">
        <Link href={"/"}>
          <motion.a
            whileHover={{
              scale: 0.9,
            }}
            whileTap={{
              scale: 0.9,
            }}
            className={
              "text-lg lg:text-xl font-medium tracking-wider cursor-pointer transition-colors text-gray-900 hover:text-red-900 dark:text-white dark:hover:text-yellow-200"
            }
          >
            <b>Joshua</b> Gorman
          </motion.a>
        </Link>
        <div className="flex items-center font-light">
          <motion.button
            whileHover={{
              scale: 0.9,
            }}
            className="text-gray-900 text-center rounded-md hover:drop-shadow-md hover:border-1 border-black/20 transition-all hover:px-2 hover:bg-gray-300/30 dark:hover:bg-slate-700/20 hover:text-red-900 dark:text-white dark:hover:text-yellow-200"
          >
            Resume
          </motion.button>
          <Link href="portfolio">
            <motion.a
              whileHover={{
                scale: 0.9,
              }}
              className="pl-4 text-gray-900 transition-colors cursor-pointer hover:text-red-900 dark:text-white dark:hover:text-yellow-200"
            >
              Portfolio{" "}
            </motion.a>
          </Link>
          <Link href="test">
            <motion.a
              whileHover={{
                scale: 0.9,
              }}
              className="pl-4 text-gray-900 transition-colors cursor-pointer hover:text-red-900 dark:text-white dark:hover:text-yellow-200"
            >
              Hello{" "}
            </motion.a>
          </Link>
          <ThemeSwitch></ThemeSwitch>
        </div>
      </div>
    </motion.div>
  );
}
