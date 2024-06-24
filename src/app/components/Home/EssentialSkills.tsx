import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

//Chart
import RadarSkills from "./RadarSkills";


export default function EssentialSkills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="essential-skills flex justify-center" ref={ref}>
      <div className="container flex flex-col-reverse lg:flex-row justify-between">
        <div
          className="skills-container flex flex-row flex-wrap justify-between md:justify-center lg:justify-start lg:w-[55%] gap-3 md:gap-6"
          style={{
            transform: isInView ? "none" : "translateY(300px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
            <RadarSkills />
        </div>
        <div className="title mt-4 flex-auto lg:w-[40%] lg:text-right">
          <h2
            className="text-3xl xl:text-5xl font-bold mb-6 md:mb-6 lg:mb-0"
            style={{
              transform: isInView ? "none" : "translateY(200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            <span
              style={{ WebkitTextFillColor: "transparent" }}
              className="bg-clip-text bg-gradient-to-r from-[#6600cc]  to-[#00b3e6]"
            >
              Essential Skills{" "}
            </span>
            ✅
          </h2>
        </div>
      </div>
    </div>
  );
}
