import Head from "next/head";
import About from "../components/about";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Education from "../components/education";
import Skills from "../components/skills";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="space-y-14 lg:space-y-24">
      <Head>
        <title>Joshua Gorman</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-[100px] px-[50px] flex justify-center align-middle">
        <Education />
      </main>
    </div>
  );
}
