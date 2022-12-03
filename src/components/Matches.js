import React from "react";
import "./Matches.css";

function Matches() {
    return (
        <div className="Matches">
            <h1>Matches:</h1>
            <div className="Matches-match">
                <div className="Matches-match-team team-left">
                    <img src="https://flagsapi.com/MA/flat/64.png" alt="flag" />
                    <p>MA</p>
                </div>
                <div className="Matches-match-info">
                    <h2>×</h2>
                    <p>18:30</p>
                </div>
                <div className="Matches-match-team team-right">
                    <img src="https://flagsapi.com/MA/flat/64.png" alt="flag" />
                    <p>MA</p>
                </div>
            </div>
        </div>
    );
}

export default Matches;
