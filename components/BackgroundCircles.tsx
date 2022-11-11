import React from 'react'
import { motion } from 'framer-motion';

type Props = {}

function BackgroundCircles({ }: Props) {
    return (
        <motion.div 
        initial={{
            opacity: 0,
        }}
        animate={{
            scale: [1,2,2,3,1],
            opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
            borderRadius: ["20%", "20%", "50%", "80%", "20%"]
        }}
        transition={{
            duration:2.5,
        }}
        className ="absolute flex justify-center items-center mt-16">
            <div className=" absolute border border-[#333333] rounded-full h-[140px] w-[140px] animate-ping opacity-31" />
            <div className=" absolute border border-[#333333] rounded-full h-[150px] w-[150px] opacity-50" />
            <div className=" absolute border border-[#333333] rounded-full h-[170px] w-[170px] animate-pulse opacity-75" />
            <div className="rounded-full border border-[#4679A4] opacity-10 h-[195px] w-[195px] absolute animate-pulse" />
            <div className="rounded-full border border-[#333333] h-[215px] w-[215px] absolute" />
        </motion.div>
    )
}

export default BackgroundCircles