import { motion } from "framer-motion";
import React from "react";

function Marquee(){
        return (
        <div className="w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]">
            <div className="text border-t-2  whitespace-nowrap border-b-2 flex  text-[#F1F1F1] gap-10 border-zinc-300 ">
                <motion.h1 initial={{x:0}} animate={{x:'-100%'}} transition={{ease:'linear', repeat:Infinity, duration:5}} 
                className="text-[24vw] -mt-[3vw] leading-none font-sans uppercase tracking-tighter font-semibold">we are ochi</motion.h1>
                <motion.h1  initial={{x:0}} animate={{x:'-100%'}} transition={{ease:'linear', repeat:Infinity, duration:5}}
                 className="text-[24vw] ml-[2vw] -mt-[3vw] leading-none font-sans uppercase tracking-tighter font-semibold">we are ochi</motion.h1>
            </div>
        </div>
    )
}

export default Marquee;