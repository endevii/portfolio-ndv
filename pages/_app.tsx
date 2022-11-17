import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/header";
import Footer from "../components/footer";
import Wave from "../components/wave";
import Wavetop from "../components/wavetop";
import { ThemeProvider } from "next-themes";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import Script from "next/script";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system">
        <Header />
        <div className="flex flex-col justify-between">
          <Wavetop />
          <Component {...pageProps} />
          <div className="mt-20 bottom-0 relative w-full">
            <Wave />
            <Footer />
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}
