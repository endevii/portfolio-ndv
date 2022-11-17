import React from "react";
import { motion } from "framer-motion";

export default function Wavetop() {
  return (
    <motion.div
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          className="block w-full h-full z-0 top-0 absolute fill-current text-gray-100 dark:text-zinc-700"
          fill="#273036"
          d="M0,128L21.8,112C43.6,96,87,64,131,80C174.5,96,218,160,262,186.7C305.5,213,349,203,393,208C436.4,213,480,235,524,245.3C567.3,256,611,256,655,266.7C698.2,277,742,299,785,256C829.1,213,873,107,916,80C960,53,1004,107,1047,128C1090.9,149,1135,139,1178,122.7C1221.8,107,1265,85,1309,85.3C1352.7,85,1396,107,1418,117.3L1440,128L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"
        ></path>
      </svg>
    </motion.div>
  );
}
