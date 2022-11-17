import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import imge from "../public/images/portfolioss.png";
export default function Education() {
  return (
    <motion.div
      className="container flex flex-col text-left lg:text-center"
      whileHover={{
        scale: [1, 1.1, 1],
      }}
      variants={{
        hidden: {
          opacity: 0,
          scale: 0,
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: 0.8,
          },
        },
      }}
    >
      <h1 className="text-2xl lg:text-3xl font-bold px-6 lg:p-0">Projects</h1>
      <div className="mx-5 px-0 h-auto w-auto rounded-md bg-opacity-50 backdrop-blur-sm drop-shadow-md bg-gray-100 border-black border-2 dark:bg-zinc-800 dark:bg-opacity-50">
        <div>
          <div className="align-middle h-6 bg-black border-b-2 border-black bg-opacity-50 p-0 mb-2 z-0">
            <div className="flex flex-row space-x-2 z-1 px-2 w-auto py-1">
              <div className="transition-colors bg-red-500 rounded-full h-4 w-4 border-2 border-black hover:bg-red-700"></div>
              <div className="transition-colors bg-yellow-400 rounded-full h-4 w-4 border-2 border-black hover:bg-yellow-600"></div>
              <div className="transition-colors bg-green-600 rounded-full h-4 w-4 border-2 border-black hover:bg-green-800"></div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between px-4 pb-4">
          <div className="text-left pb-2">
            <h1 className="text-2xl pb-1">/Portfolio</h1>
            <motion.div
              className="flex flex-row border-black border-2 my-3 bg-white"
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{
                scale: 0.8,
              }}
            >
              <Link href="/">
                <Image
                  src={imge}
                  alt="Profile"
                  priority={true}
                  className="object-cover drop-shadow-md opacity-80"
                  width={1000}
                  height={400}
                  placeholder="blur"
                ></Image>
              </Link>
            </motion.div>
            <p className="text-lg">
              <b>Skills Used:</b> Next.js, TailwindCSS, Framer Motion, Graphic
              Design
            </p>
            <p className="px-2">
              <b>Description:</b> I wanted to make a portfolio website that
              incapsulated everything that I did or will do whether that be
              software engineering, web design, music, or other
              artistic/practical adventures.
            </p>
          </div>
          <div>
            <h1 className="text-2xl text-left pb-1">/title</h1>
            <div className="flex flex-row border-black border-2 my-3">
              <p>Skill </p>
              <p>Skills text</p>
            </div>
          </div>

          <div className="flex flex-row border-black border-2 my-3">
            <p>Skill </p>
            <p>Skills text</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
