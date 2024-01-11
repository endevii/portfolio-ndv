import React, { useState } from "react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import imge from "../public/images/portfolioss.png";
import teamup from "../public/images/teamup.png";
import scrum from "../public/images/scrum.png";
import historicalsites from "../public/images/historicalsites.png";
import algoracer from "../public/images/algoracer.png";

function PortfolioItem({
  title,
  img,
  alt,
  skills,
  description,
  link,
}: {
  title: string;
  img: StaticImageData;
  alt: string;
  skills: string[];
  description: string[];
  link: string;
}) {
  return (
    <div className="text-left pb-2">
      <h1 className="text-2xl pb-1">/{title}</h1>
      <motion.div
        className="flex flex-row border-black border-2 my-3 bg-white"
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{
          scale: 0.8,
        }}
      >
        <a href={link} target="_blank" rel="noreferrer">
          <Image
            src={img}
            alt={alt}
            priority={true}
            className="object-cover object-center drop-shadow-md opacity-80 md:object-none"
            width={1000}
            height={400}
            placeholder="blur"
          ></Image>
        </a>
      </motion.div>
      <p className="text-lg">
        <b>Skills Used:</b> {skills.join(", ")}
      </p>
      <p className="px-2">
        <b>Description:</b> {description.join(" ")}
      </p>
    </div>
  );
}

export default function Portfol() {
  const [visible, setVisible] = useState(true);

  const projects = [
    {
      title: "Portfolio",
      img: imge,
      alt: "Portfolio",
      skills: ["Next.js", "TailwindCSS", "Framer Motion", "Graphic Design"],
      description: [
        "I wanted to make a portfolio website that incapsulated everything that I did or will do whether that be software engineering, web design, music, or other artistic/practical adventures.",
      ],
      link: "https://github.com/endevii/portfolio-ndv",
    },
    {
      title: "AlgoRacer",
      img: algoracer,
      alt: "AlgoRacer",
      skills: [
        "JavaScript",
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "Heroku",
      ],
      description: [
        "Created a website that aims to gamify the learning of common computer science algorithms in a team of 2.",
        "Contributed to the frontend structure and game elements that made extensive use of React hooks for game interactivity.",
        "Implemented a backend that allowed users to create accounts and store their progress in a MongoDB database.",
        "Facilitated iteration tests to gauge our engagement metrics to which we saw a 10% increase in engagement over 4 iterations.",
      ],
      link: "https://github.com/joshbernsteint/AlgoRacer",
    },
    {
      title: "Scrumptious Solar Services",
      img: scrum,
      alt: "Scrumptious Solar Services",
      skills: [
        "JavaScript",
        "React",
        "Socket.io",
        "Node.js",
        "Express",
        "MongoDB",
        "Firebase",
      ],
      description: [
        "Worked with a team of 3 to create a web application that served to connect people with similar interests.",
        "The main goal of the project was to allow open-source projects to create and foster a community while also along those who want to contribute to a start up an inviting place to do so.",
      ],
      link: "https://github.com/joshbernsteint/team11-scrumptious_7",
    },
    {
      title: "NYC Historical Sites",
      img: historicalsites,
      alt: "NYC Historical Sites",
      skills: [
        "JavaScript",
        "React",
        "Mapbox",
        "Firebase",
        "MongoDB",
        "Node.js",
        "Express",
      ],
      description: [
        "Built a trip planner spanning NY with 40+ sites alongside 4 others that can plan 1 to 3-day trips based on geolocation data.",
        "Implemented Mapbox to display markers to users, allowing users to review and talk to one another with sockets.",
        "Designed a submission system where users can upload a location to be verified by admins, disallowing false information.",
      ],
      link: "https://github.com/endevii/cs554-web-wizards",
    },
    {
      title: "TeamUp!",
      img: teamup,
      alt: "TeamUp!",
      skills: [
        "JavaScript",
        "Node.js",
        "Bootstrap",
        "Express",
        "MongoDB",
        "Handlebars",
      ],
      description: [
        "Worked with a team of 3 to create a web application that served to connect people with similar interests.",
        "The main goal of the project was to allow open-source projects to create and foster a community while also along those who want to contribute to a start up an inviting place to do so.",
      ],
      link: "https://github.com/ninja-arinjay/CS546_Final_Project",
    },
  ];

  return (
    <motion.div
      className="container flex flex-col text-left lg:text-center"
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
      <h1 className="text-2xl lg:text-3xl px-6 lg:p-0">Projects</h1>
      <div
        className="mx-5 px-0 h-auto w-auto rounded-md bg-opacity-50 backdrop-blur-sm drop-shadow-md bg-gray-100 border-black border-2 dark:bg-zinc-800 dark:bg-opacity-50"
        draggable
      >
        <div>
          <div className="align-middle h-6 bg-black border-b-2 border-black bg-opacity-50 p-0 mb-2 z-0">
            <div className="flex flex-row space-x-2 z-1 px-2 w-auto py-1">
              <div className="transition-colors bg-red-500 rounded-full h-4 w-4 border-2 border-black hover:bg-red-700"></div>
              <div
                onClick={() => setVisible(!visible)}
                className="transition-colors bg-yellow-400 rounded-full h-4 w-4 border-2 border-black hover:bg-yellow-600"
              ></div>
              <div className="transition-colors bg-green-600 rounded-full h-4 w-4 border-2 border-black hover:bg-green-800"></div>
            </div>
          </div>
        </div>

        {visible && (
          <div className="flex flex-col justify-between px-4 pb-4">
            <div className="flex flex-col text-left pb-2 pd-5">
              {projects.map((item, index) => {
                return (
                  <div key={index}>
                    <PortfolioItem
                      key={index}
                      title={item.title}
                      img={item.img}
                      alt={item.alt}
                      skills={item.skills}
                      description={item.description}
                      link={item.link}
                    />
                    {index != projects.length - 1 && (
                      <hr className="h-px mt-2 bg-black border-0 dark:bg-white" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
