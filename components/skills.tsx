import React from "react";
import { motion } from "framer-motion";
import {
  faJava,
  faPython,
  faJsSquare,
  faHtml5,
  faCss3,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export default function Skills() {
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
            delay: 1,
          },
        },
      }}
    >
      <h1 className="text-2xl lg:text-3xl font-bold px-6 lg:p-0">Skills</h1>
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
        <div>
          <h1 className="text-2xl text-left px-4 pb-2">/Languages</h1>
          <div className="grid grid-cols-3 gap-8 px-4 pb-4">
            <div className=" flex flex-col items-center border-black border-2 rounded-md py-1">
              <FontAwesomeIcon
                icon={faJava}
                className="fa-2xl"
              ></FontAwesomeIcon>
              <p>Java </p>
            </div>
            <div className=" flex flex-col items-center border-black border-2 rounded-md py-1">
              <FontAwesomeIcon
                icon={faPython}
                className="fa-2xl"
              ></FontAwesomeIcon>
              <p>Python </p>
            </div>
            <div className=" flex flex-col items-center border-black border-2 rounded-md py-1">
              <FontAwesomeIcon
                icon={faJsSquare}
                className="fa-2xl"
              ></FontAwesomeIcon>
              <p>JavaScript </p>
            </div>
            <div className=" flex flex-col items-center border-black border-2 rounded-md py-1">
              <FontAwesomeIcon
                icon={faHtml5}
                className="fa-2xl"
              ></FontAwesomeIcon>
              <p>HTML </p>
            </div>
            <div className=" flex flex-col items-center border-black border-2 rounded-md py-1">
              <FontAwesomeIcon
                icon={faCss3}
                className="fa-2xl"
              ></FontAwesomeIcon>
              <p>CSS </p>
            </div>
            <div className=" flex flex-col items-center border-black border-2 rounded-md py-1">
              <FontAwesomeIcon
                icon={faJava}
                className="fa-2xl"
              ></FontAwesomeIcon>
              <p>C++ </p>
            </div>
            <div className=" flex flex-col items-center border-black border-2 rounded-md py-1">
              <FontAwesomeIcon
                icon={faJava}
                className="fa-2xl"
              ></FontAwesomeIcon>
              <p>C </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
