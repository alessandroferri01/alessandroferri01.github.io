"use client"

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function Logo() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
      }, [])
    
    if(!mounted) return null

    return (
        <svg width="65px" height="65px" xmlns = "http://www.w3.org/2000/svg" viewBox = "166 102 308 308" >  
            <defs>    
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">     
                    <stop offset="0%" style={{stopColor:"#6600cc", stopOpacity: 1}}></stop>      
                    <stop offset="100%" style={{stopColor:"#00b3e6", stopOpacity:1}}></stop>    
                </linearGradient>  
                <style>
                    {`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');`}
                </style>
            </defs>  

            <circle cx="320" cy="256" r="150" stroke="url(#grad1)" strokeWidth="8" fill={theme === 'light' ? 'white' : '#121212'}></circle>  
 
            <text x="240" y="280" fontFamily="Inter" fontSize="120" fill="url(#grad1)" fontWeight="normal" opacity="0">    
                A    
                <animate attributeName="opacity" from="0" to="1" dur="1s" fill="freeze" begin="0.5s"></animate>    
                <animate attributeName="x" from="200" to="240" dur="1s" fill="freeze" begin="0.5s"></animate>  
            </text>  
            <text x="325" y="315" fontFamily="Inter" fontSize="120" fill="url(#grad1)" fontWeight="normal" opacity="0">    
                F    
                <animate attributeName="opacity" from="0" to="1" dur="1s" fill="freeze" begin="1s"></animate>    
                <animate attributeName="x" from="365" to="325" dur="1s" fill="freeze" begin="1s"></animate>  
            </text>
        </svg >
    );
}
