"use client"

import React from "react";
import { motion } from "framer-motion";

//Lottie
import Lottie from "lottie-react";
import developer_animation from '../../../../public/developer_animation.json'
import background_hero from '../../../../public/background_hero.json'

//animation
import { titleVariants } from "@/utils/animation";

export default function HeroContent() {
    return (
        <div className="hero-content relative min-h-screen flex items-center justify-between flex-col">
            <div className="hero-background">
                <Lottie animationData={background_hero} loop={true}/>
            </div>
            <div className="title mt-4">
                <motion.h1 
                    className="text-center text-3xl xl:text-6xl font-bold"
                    initial="hidden"
                    animate="visible"
                    variants={titleVariants}>
                    <span style={{WebkitTextFillColor: "transparent"}} className="bg-clip-text bg-gradient-to-r from-[#6600cc]  to-[#00b3e6]">Softawer Engineer </span>😎
                </motion.h1>
                <p className="text-center text-sm md:text-lg mt-8 text-white">
                    Hi, my name is <strong>Alessandro Ferri</strong>, and I have always been passionate about computer science and software development 🚀
                </p>
            </div>
            <div className="animation">
                <Lottie animationData={developer_animation} loop={false} width={800} height={800}/>
            </div>
        </div>
    )
}