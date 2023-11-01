import Head from "next/head";
import About from "../components/about";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Portfol from "../components/portfolio";
import Skills from "../components/skills";
import Education from "../components/education";
import Experiance from "../components/experiance";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col content-center space-y-14 lg:space-y-24">
      <Head>
        <title>Joshua Gorman</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-4xl mx-auto mt-16 antialiased">
        <About />
      </main>
      <section className="container px-4 mx-auto">
        {/* grid-rows-2 */}
        <motion.div
          className="flex flex-col h-auto lg:grid  gap-4 content-center lg:grid-cols-2 antialiased"
          initial="hidden"
          // whileInView="visible"
          // viewport={{ once: true }}
          animate="visible"
          variants={{
            hidden: {
              scale: 0,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                when: "beforeChildren",
                delay: 1.6,
                staggerChildren: 1,
                staggerDirection: 1,
              },
            },
          }}
        >
          <div className="flex flex-col">
            <Skills />
            <Education />
            <Experiance />
          </div>
          <div className="flex flex-col">
            <Portfol />
          </div>
        </motion.div>
      </section>
    </div>
  );
}
