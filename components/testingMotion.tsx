import { motion } from "framer-motion";

export default function TestingMotion() {
  return (
    <div className="container px-4 mx-auto">
      <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
        <div className="lg:px-4 lg:mt-12 ">
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
                  delay: 0.4,
                },
              },
            }}
          >
            <h1 id="title" className=" font-bold text-xl">
              Hello there, you!
            </h1>
            <motion.div>
              <iframe
                className="rounded-2xl bg-transparent"
                src="https://open.spotify.com/embed/track/3qHpd6ztTWI5UTtrOkqctJ?utm_source=generator&theme=0"
                width="100%"
                height="352"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </motion.div>
            <p className="pl-5 pt-4 text-lg">
              Glad you are here! Hope everything is going great for you!
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
