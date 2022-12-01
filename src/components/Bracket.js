import React from "react";
import "./Bracket.css";

function Bracket() {
    return (
        <div className="Bracket">
            <h1>Bracket:</h1>
            <svg width="50" height="575">
                <path
                    d="
                    M 0 25
                    L 24 25
                    L 24 100
                    L 0 100
                    M 24 62.5
                    L 50 62.5
                    
                    M 0 175
                    L 24 175
                    L 24 250
                    L 0 250
                    M 24 212.5
                    L 50 212.5
                    "
                    stroke="white"
                    stroke-width="5px"
                    fill="none"
                ></path>
            </svg>
            <svg width="50" height="575">
                <path
                    d="
                    M 0 62.5
                    L 24 62.5
                    L 24 212.5
                    L 0 212.5
                    M 24 137.5
                    L 50 137.5
                    "
                    stroke="white"
                    stroke-width="5px"
                    fill="none"
                ></path>
            </svg>
            {/* Opposite direction */}
            <svg width="50" height="575">
                <path
                    d="
                    M 50 62.5
                    L 24 62.5
                    L 24 212.5
                    L 50 212.5
                    M 24 137.5
                    L 0 137.5
                    "
                    stroke="white"
                    stroke-width="5px"
                    fill="none"
                ></path>
            </svg>
            <svg width="50" height="575">
                <path
                    d="
                    M 50 25
                    L 24 25
                    L 24 100
                    L 50 100
                    M 24 62.5
                    L 0 62.5
                    
                    M 50 175
                    L 24 175
                    L 24 250
                    L 50 250
                    M 24 212.5
                    L 0 212.5
                    "
                    stroke="white"
                    stroke-width="5px"
                    fill="none"
                ></path>
            </svg>
        </div>
    );
}

export default Bracket;
