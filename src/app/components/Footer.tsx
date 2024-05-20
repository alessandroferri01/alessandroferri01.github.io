"use client"

import React from "react";
import Logo from "@/icons/Logo";
import SocialIcons from "./SocialIcons";

export default function Footer() {
    return (
        <footer className="footer border-top-gradient flex items-center justify-center">
            <div className="container flex items-center justify-center flex-col">
                <Logo />
                <p className="my-8 text-center text-sm md:text-lg"><strong>Living</strong>, <strong>learning</strong>, & <strong>leveling up</strong> one day at a time.</p>
                <SocialIcons />
                <p className="mt-8 text-sm">Handcrafted by me, made with 🩶 in React</p>
            </div>
        </footer>
    )
}