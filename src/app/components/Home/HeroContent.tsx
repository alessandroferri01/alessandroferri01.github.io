"use client"

import React from "react";
import { motion } from "framer-motion";

//Lottie
import Lottie from "lottie-react";
import developer_animation from '../../../../public/developer_animation.json'

export default function HeroContent() {
    const h1Variants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <div className="hero-content min-h-screen flex items-center justify-between flex-col">
            <div className="title mt-4">
                <motion.h1 
                    className="text-center text-lg md:text-2xl xl:text-5xl font-semibold"
                    initial="hidden"
                    animate="visible"
                    variants={h1Variants}>
                    <span style={{WebkitTextFillColor: "transparent"}} className="bg-clip-text bg-gradient-to-r from-[#6600cc]  to-[#00b3e6]">Softawer Engineer (Back-end Oriented) </span>😎
                </motion.h1>
                <p className="text-center text-sm md:text-lg mt-8">
                    Hi, my name is <strong>Alessandro Ferri</strong>, and I have always been passionate about computer science and software development 🚀
                </p>
            </div>
            <div className="animation">
                <Lottie animationData={developer_animation} loop={true} width={800} height={800}/>
            </div>
        </div>
    )
}