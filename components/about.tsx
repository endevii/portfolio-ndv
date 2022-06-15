import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import profile from "../public/images/Ispotpic1jpg.jpg";
import profileAlt from "../public/images/IMG_2303p2.jpg";
import { motion } from "framer-motion";

export default function About() {
  const [image, setImage] = useState(profile);

  function handleMouseEnter(imagePath: any) {
    return () => {
      setImage(imagePath);
    };
  }

  const [imageIsLoaded, setImageIsLoaded] = useState(false);

  return (
    <div className="container px-4 mx-auto">
      <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
        <div className="lg:px-4 lg:mt-12 ">
          <motion.div
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
                  delay: 1.0,
                },
              },
            }}
          >
            <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white">
              Hey, I&apos;m Joshua...
            </h1>
          </motion.div>
          <motion.div
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
                  delay: 1.2,
                },
              },
            }}
          >
            <div className="mt-6 text-gray-800 dark:text-white">
              <p className="mb-4">
                Welcome to my{" "}
                <b className="text-red-900 dark:text-red-300">page!</b> I am a
                current{" "}
                <b className="text-red-900 dark:text-red-300">
                  Computer Science
                </b>{" "}
                major at{" "}
                <b className="text-red-900 dark:text-red-300">
                  Stevens Institute of Technology
                </b>
                , hoping to get by BS by{" "}
                <b className="text-red-900 dark:text-red-300">2024</b> and MS by{" "}
                <b className="text-red-900 dark:text-red-300">2025</b>.
              </p>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 0.8,
              opacity: 0,
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
          <div className="flex-shrink-0 sm:w-fit sm:mx-auto lg:mt-12 lg:px-2 mb-10">
            <motion.div
              className="p-0 m-0"
              whileHover={{
                scale: 1.2,
                transition: {
                  duration: 0.2,
                },
              }}
            >
              <Image
                src={image}
                alt="Profile"
                priority={true}
                className="object-cover rounded-full drop-shadow-md opacity-80"
                width={250}
                height={250}
                placeholder="blur"
                onMouseEnter={handleMouseEnter(profileAlt)}
                onMouseLeave={handleMouseEnter(profile)}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
