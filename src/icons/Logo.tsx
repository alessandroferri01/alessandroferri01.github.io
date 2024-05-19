import React from "react";

export default function Logo() {
    return (
        <svg width="65px" height="65px" xmlns = "http://www.w3.org/2000/svg" viewBox = "166 102 308 308" >  
            <defs>    
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">     
                    <stop offset="0%" style={{stopColor:"#6600cc", stopOpacity: 1}}></stop>      
                    <stop offset="100%" style={{stopColor:"#00b3e6", stopOpacity:1}}></stop>    
                </linearGradient>  
            </defs>  

            <circle cx="320" cy="256" r="150" fill="#ffffff" stroke="url(#grad1)" stroke-width="8"></circle>  
 
            <text x="240" y="280" font-family="Courier New" font-size="140" fill="url(#grad1)" font-weight="normal" opacity="0">    
                A    
                <animate attributeName="opacity" from="0" to="1" dur="1s" fill="freeze" begin="0.5s"></animate>    
                <animate attributeName="x" from="200" to="240" dur="1s" fill="freeze" begin="0.5s"></animate>  
            </text>  
            <text x="325" y="315" font-family="Courier New" font-size="140" fill="url(#grad1)" font-weight="normal" opacity="0">    
                F    
                <animate attributeName="opacity" from="0" to="1" dur="1s" fill="freeze" begin="1s"></animate>    
                <animate attributeName="x" from="365" to="325" dur="1s" fill="freeze" begin="1s"></animate>  
            </text>
        </svg >
    );
}
