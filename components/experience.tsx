import React, { useState } from "react";
import { motion } from "framer-motion";

function ExperienceItem({
  title,
  range,
  location,
  skills,
  description,
}: {
  title: string;
  range: [string, string];
  location: string;
  skills: string[];
  description: string[];
}) {
  return (
    <motion.div
      whileHover={{
        scale: [1, 1.1, 1],
      }}
      className="text-left pb-2 p-2 m-3 rounded-md border-2 border-b-2 backdrop-blur-sm drop-shadow-md bg-gray-200 border-black dark:bg-opacity-50 dark:bg-zinc-600"
    >
      <h2 className="text-xl pb-1">{title}</h2>
      <p className="text-lg">
        <b>Range:</b> {range[0]} - {range[1]}
      </p>
      <p className="text-lg">
        <b>Location:</b> {location}
      </p>
      <p className="text-lg">
        <b>Skills Used:</b> {skills.join(", ")}
      </p>
      <hr className="h-px mt-2 bg-black border-0 dark:bg-white" />
      <div className="px-2">
        <ul className="list-disc p-3">
          {description.map((item, index) => (
            <li key={item + index}>{item}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Experiance() {
  const [visible, setVisible] = useState(true);
  const stevens = [
    {
      title: "Research Assistant (Development)",
      range: ["May 2023", "Aug 2023"],
      location: "Hoboken, NJ (Remote)",
      skills: ["PHP", "JavaScript", "SQLite"],
      description: [
        "Researched with NUKEMAP creator to enhance and develop new features for NUKEMAP with 1000s of users monthly.",
        "Translated all PHP code into Node.js in order to allow offline hosting for first/third-party research and analysis.",
        "Designed a new UI for mobile responsiveness and intuitive use to complement the over 50% mobile user base.",
        "Optimized a Javascript program that could convert NetCDF landscan files to an SQLite database in 2 days down to 1 hour.",
      ],
    },
    {
      title: "Student Tutor",
      range: ["Feb 2023", "May 2023"],
      location: "Hoboken, NJ",
      skills: ["Teaching", "Java", "Python", "Time Management"],
      description: [
        "Conducted one-on-one tutoring sessions with 8+ students in CS fundamental courses like Data Structures and Algorithms.",
        "Prepared material ahead of time based on a student's blind spots, keeping in mind their preferred teaching style and format.",
      ],
    },
    {
      title: "Research Assistant",
      range: ["Jun 2022", "Aug 2022"],
      location: "Hoboken, NJ (Remote)",
      skills: ["JavaScript", "HTML", "CSS", "Physics"],
      description: [
        "Researched with NUKEMAP creator to bring similar visualizations to meteor strike models in JavaScript in 8 weeks.",
        "Optimized complex physics-based calculations and translated them into 20+ easy-to-use JavaScript functions.",
        "Prepared a test bed environment with HTML, CSS, and JavaScript to experiment and test equations, saving 2 weeks of development and debug time.",
      ],
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
      <h1 className="text-2xl lg:text-3xl px-6 lg:p-0">Experience</h1>
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
              <h1 className="text-2xl pb-1 px-2">
                /Stevens Institute of Technology
              </h1>
              <div className="flex flex-col">
                {stevens.map((item, index) => {
                  return (
                    <ExperienceItem
                      key={index}
                      title={item.title}
                      range={[item.range[0], item.range[1]]}
                      location={item.location}
                      skills={item.skills}
                      description={item.description}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
