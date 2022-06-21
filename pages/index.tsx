import Head from "next/head";
import About from "../components/about";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Education from "../components/education";
import Skills from "../components/skills";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="space-y-14 lg:space-y-24">
      <Head>
        <title>Joshua Gorman</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-4xl mx-auto mt-16 antialiased">
        <About />
      </main>
      <section className="container px-4 mx-auto">
        <motion.div
          className="h-auto grid grid-rows-2 gap-4 content-center lg:grid-cols-2 antialiased"
          initial="hidden"
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
          <div className="">
            <Education />
          </div>
          <div className="">
            <Skills />
          </div>
        </motion.div>
      </section>
    </div>
  );
}
