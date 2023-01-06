import Head from "next/head";
import MyResume from "../components/myResume";

export default function Resume() {
  return (
    <div className="space-y-14 lg:space-y-24">
      <Head>
        <title>Joshua Gorman</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="m-10 p-5 flex justify-center align-middle">
        <MyResume />
      </main>
    </div>
  );
}
