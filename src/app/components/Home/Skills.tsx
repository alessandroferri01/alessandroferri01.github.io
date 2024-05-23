import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardFooter, Image, Button, Progress, CardHeader } from "@nextui-org/react";

//Animation
import { titleVariants } from "@/utils/animation";

//Skills
import { skills } from "@/utils/skills";


export default function Skills() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const renderSkills = skills.map((skill) => {
        return (
            <Card
                className={`${skill.negative ? 'negative' : ''} skill-card border-none selection:flex p-2 md:p-3 flex-col justify-center items-center`}
                radius="lg"
                key={skill.name}
            >
                <CardHeader className="skill-header justify-start before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large top-1 w-[calc(100%_-_8px)] shadow-small z-20">
                    <div className="title-technology text-sm font-medium">
                        {skill.name}
                    </div>
                </CardHeader>
                <Image
                    alt={skill.name}
                    className="object-cover"
                    height={140}
                    src={`/${skill.filename}`}
                    width={140}
                />
                <CardFooter className="skill-footer justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small z-10">
                    <Progress
                        size="sm"
                        radius="sm"
                        classNames={{
                            base: "max-w-md",
                            track: "drop-shadow-md border border-default",
                            indicator: "bg-gradient-to-r from-[#6600cc]  to-[#00b3e6]",
                            label: "tracking-wider font-medium",
                            value: "",
                        }}
                        label="Knowledge"
                        value={skill.knowledge}
                        showValueLabel={true}
                    />
                </CardFooter>
            </Card>
        )
    })


    return (
        <div className="skills flex justify-center" ref={ref}>
            <div className="container lg:flex justify-between">
                <div className="title mt-4 flex-auto lg:w-[20%]">
                    <h2
                        className="text-3xl xl:text-5xl font-bold mb-4 md:mb-6 lg:mb-0"
                        style={{
                            transform: isInView ? "none" : "translateX(-200px)",
                            opacity: isInView ? 1 : 0,
                            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                        }}
                    >
                        <span style={{ WebkitTextFillColor: "transparent" }} className="bg-clip-text bg-gradient-to-r from-[#6600cc]  to-[#00b3e6]">Skills </span>🧑🏻‍💻
                    </h2>
                </div>
                <div
                    className="skills-container flex flex-row flex-wrap justify-between md:justify-center lg:justify-end lg:w-[75%] gap-3 md:gap-6"
                    style={{
                        transform: isInView ? "none" : "translateY(300px)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                    }}
                >
                    {renderSkills}
                </div>
            </div>
        </div>
    )
}