import React from "react";

export default function Logo() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="130" height="130" viewBox="0 0 640 512">
            <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor:"#6600cc", stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor:"#00b3e6", stopOpacity:1}} />
                </linearGradient>
                <style>
                    {`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');`}
                </style>
            </defs>
            <circle cx="320" cy="256" r="150" fill="#ffffff" stroke="url(#grad1)" strokeWidth="8">
                <animate attributeName="opacity" from="0" to="1" dur="1s" fill="freeze" begin="0.5s" />
            </circle>
            <text x="240" y="280" fontFamily="Inter" fontSize="130" fill="url(#grad1)" fontWeight="normal" opacity="0">
                A
                <animate attributeName="opacity" from="0" to="1" dur="1s" fill="freeze" begin="0.5s" />
                <animate attributeName="x" from="200" to="240" dur="1s" fill="freeze" begin="0.5s" />
            </text>
            <text x="335" y="315" fontFamily="Inter" fontSize="130" fill="url(#grad1)" fontWeight="normal" opacity="0">
                F
                <animate attributeName="opacity" from="0" to="1" dur="1s" fill="freeze" begin="1s" />
                <animate attributeName="x" from="365" to="325" dur="1s" fill="freeze" begin="1s" />
            </text>
        </svg>
    );
}
