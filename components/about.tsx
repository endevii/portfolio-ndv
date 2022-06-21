import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import profile from "../public/images/Ispotpic1jpg.jpg";
import profileAlt from "../public/images/IMG_2303p2.jpg";
import { motion, MotionProps } from "framer-motion";

export default function About() {
  const [image, setImage] = useState(profile);

  function handleMouseEnter(imagePath: any) {
    return () => {
      setImage(imagePath);
    };
  }

  const [imageIsLoaded, setImageIsLoaded] = useState(false);
  const testBasic: string = "text-red-900 dark:text-red-300 hover:underline";

  const aboutMotion: any = {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
    },
  };

  return (
    <motion.div
      className="container px-0 w-auto mx-4 border-black border-4 rounded-lg bg-white dark:bg-black dark:bg-opacity-25"
      initial="hidden"
      animate="visible"
      variants={aboutMotion}
    >
      <div className="align-middle h-8 bg-black border-b-4 border-black bg-opacity-50 p-0 mb-2 z-0">
        <div className="flex flex-row space-x-2 z-1 px-2 w-auto pt-1">
          <div className="transition-colors bg-red-500 rounded-full h-4 w-4 border-2 border-black hover:bg-red-700"></div>
          <div className="transition-colors bg-yellow-400 rounded-full h-4 w-4 border-2 border-black hover:bg-yellow-600"></div>
          <div className=" transition-colors bg-green-600 rounded-full h-4 w-4 border-2 border-black hover:bg-green-800"></div>
        </div>
      </div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 2,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.5,
            },
          },
        }}
      >
        <div className="px-7 lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
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
              <motion.h1
                className="text-2xl w-auto hover:dark:text-gray-200 text-gray-900 lg:text-5xl dark:text-white hover:text-gray-600"
                whileHover={{
                  scale: 0.9,
                  transition: {
                    ease: "easeInOut",
                  },
                }}
                whileTap={{
                  scale: 0.8,
                  transition: {
                    ease: "easeInOut",
                  },
                }}
              >
                Hey, I&apos;m{" "}
                <b className="duration-200 hover:text-gray-400 hover:dark:text-gray-200">
                  Joshua
                </b>
                ...
              </motion.h1>
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
                  Welcome to my <b className={testBasic}>page!</b> I am a
                  current <b className={testBasic}>Computer Science</b> major at{" "}
                  <b className={testBasic}>Stevens Institute of Technology</b>,
                  hoping to get my BS by <b className={testBasic}>2024</b> and
                  MS by <b className={testBasic}>2025</b>.
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
      </motion.div>
    </motion.div>
  );
}
