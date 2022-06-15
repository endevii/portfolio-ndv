import Head from "next/head";
import TestingMotion from "../components/testingMotion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Test() {
  return (
    <div className="space-y-14 lg:space-y-24">
      <Head>
        <title>Testing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-4xl mx-auto mt-16 antialiased">
        <TestingMotion />
      </main>
    </div>
  );
}
