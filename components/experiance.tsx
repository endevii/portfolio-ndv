import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Experiance() {
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
      <h1 className="text-2xl lg:text-3xl font-bold px-6 lg:p-0">Experiance</h1>
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
          <div className="flex flex-col text-left pb-2 pd-5 rounded-md border-2 bg-opacity-30 border-black bg-gray-500 backdrop-blur-sm drop-shadow-md dark:bg-opacity-50 dark:bg-zinc-600">
            <h1 className="text-2xl pb-1 px-2">/Stevens Institute of Technology</h1>
            <div className="flex flex-col">
              <motion.div whileHover={{
                scale: 1.1,
              }}
              whileTap={{
                scale: 0.8,
              }}
              className="text-left pb-2 p-2 m-3 rounded-md border-2 border-b-2 backdrop-blur-sm drop-shadow-md bg-gray-200 border-black dark:bg-opacity-50 dark:bg-zinc-600">
                <h2 className="text-xl pb-1">/Research Assistant (Development)</h2>
                <p className="text-lg">
                  <b>Range:</b> May 2023 - Aug 2023 
                </p>
                <p className="text-lg">
                  <b>Location:</b> Hoboken, NJ (Remote)
                </p>
                <p className="text-lg">
                  <b>Skills Used:</b> PHP, JavaScript, SQLite
                </p>
                <p className="px-2">
<hr className="h-px mt-2 bg-black border-0 dark:bg-white"/>
                  <ul className="list-disc p-3">
                    <li>Researched with NUKEMAP creator to enhance and develop new features for NUKEMAP with 1000s of users monthly.</li>
                    <li>Translated all PHP code into Node.js in order to allow offline hosting for first/third-party research and analysis.</li>
                    <li>Designed a new UI for mobile responsiveness and intuitive use to complement the over 50% mobile user base.</li>
                    <li>Optimized a Javascript program that could convert NetCDF landscan files to an SQLite database in 2 days down to 1 hour.</li>
                  </ul>
                </p>
              </motion.div>
              <motion.div whileHover={{
                scale: 1.1,
              }}
              whileTap={{
                scale: 0.8,
              }}
              className="text-left pb-2 p-2 m-3 rounded-md border-2 border-b-2 backdrop-blur-sm drop-shadow-md bg-gray-200 border-black dark:bg-opacity-50 dark:bg-zinc-600">
                <h2 className="text-xl pb-1">/Student Tutor</h2>
                <p className="text-lg">
                  <b>Range:</b> Feb 2023 - May 2023
                </p>
                <p className="text-lg">
                  <b>Location:</b> Hoboken, NJ
                </p>
                <p className="text-lg">
                  <b>Skills Used:</b> Teaching, Java, Python, Time Management
                </p>
                <p className="px-2">
<hr className="h-px mt-2 bg-black border-0 dark:bg-white"/>
                  <ul className="list-disc p-3">
                    <li>Conducted one-on-one tutoring sessions with 8+ students in CS fundamental courses like Data Structures and Algorithms.</li>
                    <li>Prepared material ahead of time based on a student&apos;s blind spots, keeping in mind their preferred teaching style and format.</li>
                  </ul>
                </p>
              </motion.div>
              <motion.div whileHover={{
                scale: 1.1,
              }}
              whileTap={{
                scale: 0.8,
              }}
              className="text-left pb-2 p-2 m-3 rounded-md border-2 border-b-2 backdrop-blur-sm drop-shadow-md bg-gray-200 border-black dark:bg-opacity-50 dark:bg-zinc-600">
                <h2 className="text-xl pb-1">/Research Assistant</h2>
                <p className="text-lg">
                  <b>Range:</b> Jun 2022 - Aug 2022 
                </p>
                <p className="text-lg">
                  <b>Location:</b> Hoboken, NJ (Remote)
                </p>
                <p className="text-lg">
                  <b>Skills Used:</b> JavaScript, HTML, CSS, Physics
                </p>
                <p className="px-2">
<hr className="h-px mt-2 bg-black border-0 dark:bg-white"/>
                  <ul className="list-disc p-3">
                    <li>Researched with NUKEMAP creator to bring similar visualizations to meteor strike models in JavaScript in 8 weeks.</li>
                    <li>Optimized complex physics-based calculations and translated them into 20+ easy-to-use JavaScript functions.</li>
                    <li>Prepared a test bed environment with HTML, CSS, and JavaScript to experiment and test equations, saving 2 weeks of development and debug time.</li>
                  </ul>
                </p>
              </motion.div>
            </div>
          </div>
          </div>
      </div>
    </motion.div>
  );
}
