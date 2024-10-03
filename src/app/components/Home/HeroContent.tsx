"use client"

import React from "react";
import { Button, Link } from "@nextui-org/react";

//Lottie
import Lottie from "lottie-react";
import developer_animation from '../../../../public/developer_animation.json'
import background_hero from '../../../../public/background_hero.json'

//animation
import { titleVariants } from "@/utils/animation";
import { motion } from "framer-motion";

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
                <div className="container-button mt-8 flex flex-row justify-center gap-4">
                    {/* <Button as={Link} color="primary" href="#" variant="flat">
                        Say Hello 😎
                    </Button> */}
                    <Button as={Link} color="secondary" href="/Resume_Alessandro_Ferri.pdf" target="blank" variant="flat">
                        Download CV 📁
                    </Button>
                </div>
            </div>
            <div className="animation">
                <Lottie animationData={developer_animation} loop={true} width={800} height={800}/>
            </div>
        </div>
    )
}