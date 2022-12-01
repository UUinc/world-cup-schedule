import React from "react";
import "./Matches.css";

function Matches() {
    return (
        <div className="Matches">
            <h1>Matches:</h1>
            <div className="Matches-match">
                <div className="Matches-match-team team-left">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Morocco.svg"
                        alt="flag"
                    />
                    <p>MA</p>
                </div>
                <div className="Matches-match-info">
                    <h2>X</h2>
                    <p>18:30</p>
                </div>
                <div className="Matches-match-team team-right">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Morocco.svg"
                        alt="flag"
                    />
                    <p>MA</p>
                </div>
            </div>
        </div>
    );
}

export default Matches;
