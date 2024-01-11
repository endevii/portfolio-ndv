import React from "react";
import { useState } from "react";
import Image from "next/image";
import profile from "../public/images/Ispotpic1jpg.jpg";
import profileAlt from "../public/images/IMG_2303p2.jpg";
import { AnimatePresence, motion, MotionProps } from "framer-motion";

export default function About() {
  const [image, setImage] = useState(profile);
  const [visible, setVisible] = useState(true);

  function handleMouseEnter(imagePath: any) {
    return () => {
      setImage(imagePath);
    };
  }

  const [imageIsLoaded, setImageIsLoaded] = useState(false);
  const testBasic: string =
    "text-red-900 dark:text-red-300 hover:underline hover:transition-all hover:text-xl hover:font-extrabold";

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

  const [showInfo, setShowInfo] = useState(false);

  function toggle() {
    setShowInfo(!showInfo);
  }

  return (
    <motion.div
      className="container px-0 w-auto mx-4 border-black border-4 rounded-lg bg-white dark:bg-black dark:bg-opacity-25"
      initial="hidden"
      animate="visible"
      variants={aboutMotion}
      draggable
    >
      <div className="align-middle h-8 bg-black border-b-4 border-black bg-opacity-50 p-0 mb-2 z-0">
        <div className="flex flex-row space-x-2 z-1 px-2 w-auto pt-1">
          <div className="transition-colors bg-red-500 rounded-full h-4 w-4 border-2 border-black hover:bg-red-700"></div>
          <div
            onClick={() => setVisible(!visible)}
            className="transition-colors bg-yellow-400 rounded-full h-4 w-4 border-2 border-black hover:bg-yellow-600"
          ></div>
          <div className=" transition-colors bg-green-600 rounded-full h-4 w-4 border-2 border-black hover:bg-green-800"></div>
        </div>
      </div>
      {visible && (
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
                <div className="mt-6 text-lg text-gray-800 dark:text-white">
                  <p className="mb-4">
                    Welcome to my <b className={testBasic}>portflio!</b> I am a
                    current <b className={testBasic}>Computer Science</b> major
                    at{" "}
                    <b className={testBasic}>Stevens Institute of Technology</b>
                    , getting my BS in <b className={testBasic}>2024</b> and MS
                    in <b className={testBasic}>2025</b>.
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
              <div className="flex-shrink-0 py-auto sm:w-fit sm:mx-auto lg:mt-12 lg:px-2 mb-10">
                <motion.div
                  className="p-0 m-0"
                  whileHover={{
                    scale: 1.2,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                >
                  <div className="border-4 border-black rounded-lg overflow-hidden lg:mr-6 w-[250px] h-[250px] mx-auto lg:w-[140px] lg:h-[140px]">
                    <Image
                      src={image}
                      alt="Profile"
                      priority={true}
                      className="object-cover drop-shadow-md opacity-80"
                      width={250}
                      height={250}
                      placeholder="blur"
                      onMouseEnter={handleMouseEnter(profileAlt)}
                      onMouseLeave={handleMouseEnter(profile)}
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
          {/* Wierd plus thing */}
          <motion.button
            initial="hidden"
            animate="visible"
            whileHover="hover"
            variants={{
              hover: {
                scale: 1.2,
              },
              hidden: {
                opacity: 0,
                scale: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 1.5,
                },
              },
            }}
            whileTap={{
              scale: 0.8,
              rotate: [-2, 2, 0],
              transition: {
                duration: 0.2,
              },
            }}
            onClick={toggle}
            className={`flex z-0 opacity-50 bg-black dark:bg-white dark:opacity-80 w-6 h-1 justify-center mx-auto ${
              showInfo ? "mb-4" : "mb-6"
            }`}
          >
            <div className="flex z-1 opacity-50 bg-black dark:bg-white items-center text-center dark:opacity-80 translate-y-[-11px] w-1 h-6 justify-center mx-auto"></div>
          </motion.button>
          <div
            className={`text-gray-800 transition-all dark:text-white mb-6 mx-auto px-14
            ${showInfo ? "visible" : "hidden"}
          `}
          >
            <AnimatePresence>
              <motion.span
                initial="hidden"
                whileInView="inView"
                exit="onLeave"
                variants={{
                  hidden: {
                    scale: 0,
                    opacity: 0,
                  },
                  inView: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                      delayChildren: 1,
                    },
                  },
                  onLeave: {
                    scale: 0,
                    opacity: 0,
                    transition: {
                      delay: 1,
                    },
                  },
                }}
                className="text-lg"
              >
                <hr className="h-px my-5 bg-black border-0" />
                My programming journey began in high school with{" "}
                <b className={testBasic}>Visual Basic</b> and later{" "}
                <b className={testBasic}>Java</b>. By the time I graduated I had
                become very well versed in these languages. Now I am striving to
                utilize modern web development frameworks like{" "}
                <b className={testBasic}>Nextjs</b> and{" "}
                <b className={testBasic}>Angular</b> to create web apps and
                small projects like <b className={testBasic}>this portfolio</b>.
                I also enjoy diving into mobile applications with{" "}
                <b className={testBasic}>React Native</b> and{" "}
                <b className={testBasic}>Swift</b> when I can. I am a{" "}
                <b className={testBasic}>self-motivated</b> learner that often
                goes <b className={testBasic}>above</b> and{" "}
                <b className={testBasic}>beyond</b> of what I am asked for. I
                also enjoy working in group settings where ideas can both be{" "}
                <b className={testBasic}>shared</b> and{" "}
                <b className={testBasic}>challenged</b> to better our end
                product.
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
