import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import profile from "../public/images/Ispotpic1jpg.jpg";
import profileAlt from "../public/images/IMG_2303p2.jpg";

export default function About() {
  const [image, setImage] = useState(profile);

  function handleMouseEnter(imagePath: any) {
    return () => {
      setImage(imagePath);
    };
  }
  return (
    <div className="container px-4 mx-auto">
      <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
        <div className="lg:px-4 lg:mt-12 ">
          <div className="">
            <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white">
              Hey, I&apos;m Joshua...
            </h1>
          </div>

          <div className="mt-6 text-gray-800 dark:text-white">
            <p className="mb-4">
              Welcome to my{" "}
              <b className="text-red-900 dark:text-red-300">page!</b> I am a
              current{" "}
              <b className="text-red-900 dark:text-red-300">Computer Science</b>{" "}
              major at{" "}
              <b className="text-red-900 dark:text-red-300">
                Stevens Institute of Technology
              </b>
              , hoping to get by BS by{" "}
              <b className="text-red-900 dark:text-red-300">2024</b> and MS by{" "}
              <b className="text-red-900 dark:text-red-300">2025</b>.
            </p>
          </div>
        </div>
        <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10">
          <Image
            src={image}
            alt="Profile"
            priority={true}
            className="object-cover rounded-full"
            width={250}
            height={250}
            placeholder="blur"
            onMouseEnter={handleMouseEnter(profileAlt)}
            onMouseLeave={handleMouseEnter(profile)}
          />
        </div>
      </div>
    </div>
  );
}
