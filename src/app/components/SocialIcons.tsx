import React from "react";
import Link from "next/link";

//icons
import { AiFillLinkedin, AiFillGithub, AiTwotoneMail } from "react-icons/ai";

export default function SocialIcons() {
    return (
        <div className="social-icons flex flex-row gap-3">
            <Link href="https://www.linkedin.com/in/alessandro-ferri-68939818a/" target="blank">
                <AiFillLinkedin fontSize="50px" fill="#6600cc" className="icon"/>
            </Link>
            <Link href="https://github.com/alessandroferri01" target="blank">
                <AiFillGithub fontSize="50px" fill="#6600cc" className="icon"/>
            </Link>
            <Link href="mailto:ferri.alessandro2001@gmail.com" target="blank">
                <AiTwotoneMail fontSize="50px" fill="#6600cc" className="icon"/>
            </Link>
        </div>
    )
} 