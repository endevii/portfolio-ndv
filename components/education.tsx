import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import stevens_logo from "../public/images/stevens_logo.png";

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
      <h1 className="text-2xl lg:text-3xl font-bold px-6 lg:p-0">Education</h1>
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
<h1 className="text-2xl text-left px-4 pb-2">/Stevens Insititue of Technology</h1>
        <div className="flex flex-col align-middle justify-center m-2 rounded-md bg-gray-200 dark:bg-zinc-500 px-4 pb-4 border-black bg-opacity-50 backdrop-blur-sm drop-shadow-md border-2 dark:bg-opacity-50">
          <div className="flex flex-row justify-between">
            <div className="drop-shadow-md">
            <Image src={stevens_logo} alt="Stevens Logo"></Image>

            </div>
            <div className="flex flex-col align-middle justify-center m-5 border-black border-2 p-2 rounded-md bg-gray-200 bg-opacity-25 backdrop-blur-sm drop-shadow-md dark:bg-zinc-400 dark:bg-opacity-30">
              <p className="text-lg text-left">B.S. in Computer Science</p> 
              <p className="text-lg text-left">GPA: 3.9</p>
              <p className="text-lg text-left">Expected Grad date: May 2024</p>
            </div>
          </div>
              <div>
                <h2 className="text-xl text-left pb-2">/Relevant Coursework</h2>
                <hr className="h-px bg-black border-0 dark:bg-white"/>
                <p className="text-left"> Data Structures & Algorithms, Web Programming I & II, Computer Architecture and Organization, Operating Systems, Systems Programming, Principles of Programming Languages, Agile Methods for Software Development, Database Management Systems, TCP/IP Networking, Human-Computer Interaction</p>
              </div>
        </div>
      </div>
    </motion.div>
  );
}
