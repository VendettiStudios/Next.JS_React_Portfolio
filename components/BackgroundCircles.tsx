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
        className ="backgroundCircles">
            <div className="circleA h-[140px] w-[140px] animate-ping opacity-31" />
            <div className="circleA h-[150px] w-[150px] opacity-50" />
            <div className="circleA h-[170px] w-[170px] animate-pulse opacity-75" />
            <div className="circleB border border-[#4679A4] opacity-10 h-[195px] w-[195px] animate-pulse" />
            <div className="circleA h-[215px] w-[215px]" />
        </motion.div>
    )
}

export default BackgroundCircles