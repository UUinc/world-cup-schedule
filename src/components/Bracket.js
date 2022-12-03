import React from "react";
import "./Bracket.css";

import worldCupImage from "../assets/images/world-cup.png";
import unknownImage from "../assets/images/unknown.png";

function Bracket() {
    const bracketWidth = 4;
    return (
        <div className="Bracket">
            <div className="Bracket-container">
                <div className="container-round16">
                    <div className="container-title">
                        <h4>Round of 16</h4>
                    </div>
                    <div className="match">
                        <div className="match-team">
                            <div className="match-team-info">
                                <img
                                    src="https://flagsapi.com/NL/flat/64.png"
                                    alt="flag"
                                />
                                <p>Netherlands</p>
                            </div>
                            <div className="match-team-score">
                                <p></p>
                            </div>
                        </div>
                        <div className="match-team">
                            <div className="match-team-info">
                                <img
                                    src="https://flagsapi.com/US/flat/64.png"
                                    alt="flag"
                                />
                                <p>USA</p>
                            </div>
                            <div className="match-team-score">
                                <p></p>
                            </div>
                        </div>
                    </div>
                    <div className="match">
                        <div className="match-team">
                            <div className="match-team-info">
                                <img
                                    src="https://flagsapi.com/AR/flat/64.png"
                                    alt="flag"
                                />
                                <p>Argentina</p>
                            </div>
                            <div className="match-team-score">
                                <p></p>
                            </div>
                        </div>
                        <div className="match-team">
                            <div className="match-team-info">
                                <img
                                    src="https://flagsapi.com/AU/flat/64.png"
                                    alt="flag"
                                />
                                <p>Australia</p>
                            </div>
                            <div className="match-team-score">
                                <p></p>
                            </div>
                        </div>
                    </div>
                    <div className="match">
                        <div className="match-team">
                            <div className="match-team-info">
                                <img
                                    src="https://flagsapi.com/JP/flat/64.png"
                                    alt="flag"
                                />
                                <p>Japan</p>
                            </div>
                            <div className="match-team-score">
                                <p></p>
                            </div>
                        </div>
                        <div className="match-team">
                            <div className="match-team-info">
                                <img
                                    src="https://flagsapi.com/HR/flat/64.png"
                                    alt="flag"
                                />
                                <p>Croatia</p>
                            </div>
                            <div className="match-team-score">
                                <p></p>
                            </div>
                        </div>
                    </div>
                    <div className="match">
                        <div className="match-team">
                            <div className="match-team-info">
                                <img
                                    src="https://flagsapi.com/BR/flat/64.png"
                                    alt="flag"
                                />
                                <p>Brazil</p>
                            </div>
                            <div className="match-team-score">
                                <p></p>
                            </div>
                        </div>
                        <div className="match-team">
                            <div className="match-team-info">
                                <img
                                    src="https://flagsapi.com/KR/flat/64.png"
                                    alt="flag"
                                />
                                <p>South Korea</p>
                            </div>
                            <div className="match-team-score">
                                <p></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-linker">
                    <svg width="50" height="575">
                        <path
                            d="
                    M 0 25
                    L 24 25
                    L 24 130
                    L 0 130
                    M 24 77
                    L 50 77
                    
                    M 0 235
                    L 24 235
                    L 24 340
                    L 0 340
                    M 24 287
                    L 50 287
                    "
                            stroke="white"
                            stroke-width={bracketWidth}
                            fill="none"
                        ></path>
                    </svg>
                </div>
                <div className="container-quarter-finals">
                    <div className="container-title">
                        <h4>Quarter-finals</h4>
                    </div>
                    <div className="match">
                        <div className="match-team">
                            <div className="match-team-info">
                                <img src={unknownImage} alt="flag" />
                                <p>?</p>
                            </div>
                            <div className="match-team-score">
                                <p></p>
                            </div>
                        </div>
                        <div className="match-team">
                            <div className="match-team-info">
                                <img src={unknownImage} alt="flag" />
                                <p>?</p>
                            </div>
                            <div className="match-team-score">
                                <p></p>
                            </div>
                        </div>
                    </div>
                    <div className="match">
                        <div className="match-team">
                            <div className="match-team-info">
                                <img src={unknownImage} alt="flag" />
                                <p>?</p>
                            </div>
                            <div className="match-team-score">
                                <p></p>
                            </div>
                        </div>
                        <div className="match-team">
                            <div className="match-team-info">
                                <img src={unknownImage} alt="flag" />
                                <p>?</p>
                            </div>
                            <div className="match-team-score">
                                <p></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-linker">
                    <svg width="50" height="575">
                        <path
                            d="
                    M 0 77
                    L 24 77
                    L 24 287
                    L 0 287
                    M 24 183
                    L 50 183
                    "
                            stroke="white"
                            stroke-width={bracketWidth}
                            fill="none"
                        ></path>
                    </svg>
                </div>
                <div className="container-semi-finals">
                    <div className="container-title">
                        <h4>Semi-finals</h4>
                    </div>
                    <div className="match">
                        <div className="match-team">
                            <div className="match-team-info">
                                <img src={unknownImage} alt="flag" />
                                <p>?</p>
                            </div>
                            <div className="match-team-score">
                                <p></p>
                            </div>
                        </div>
                        <div className="match-team">
                            <div className="match-team-info">
                                <img src={unknownImage} alt="flag" />
                                <p>?</p>
                            </div>
                            <div className="match-team-score">
                                <p></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-linker">
                    <svg width="50" height="575">
                        <path
                            d="
                    M 0 183
                    L 50 183
                    "
                            stroke="white"
                            stroke-width={bracketWidth}
                            fill="none"
                        ></path>
                    </svg>
                </div>
                <div className="container-final">
                    <div className="container-title">
                        <h4>Final</h4>
                    </div>
                    <div className="final-cup">
                        <img src={worldCupImage} alt="word cup" />
                    </div>
                    <div className="match">
                        <div className="match-team">
                            <div className="match-team-info">
                                <img src={unknownImage} alt="flag" />
                                <p>?</p>
                            </div>
                            <div className="match-team-score">
                                <p></p>
                            </div>
                        </div>
                        <div className="match-team">
                            <div className="match-team-info">
                                <img src={unknownImage} alt="flag" />
                                <p>?</p>
                            </div>
                            <div className="match-team-score">
                                <p></p>
                            </div>
                        </div>
                    </div>
                    <div className="container-title">
                        <h4>Third place play-off</h4>
                    </div>
                    <div className="match">
                        <div className="match-team">
                            <div className="match-team-info">
                                <img src={unknownImage} alt="flag" />
                                <p>?</p>
                            </div>
                            <div className="match-team-score">
                                <p></p>
                            </div>
                        </div>
                        <div className="match-team">
                            <div className="match-team-info">
                                <img src={unknownImage} alt="flag" />
                                <p>?</p>
                            </div>
                            <div className="match-team-score">
                                <p></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-linker">
                    <svg width="50" height="575">
                        <path
                            d="
                    M 0 183
                    L 50 183
                    "
                            stroke="white"
                            stroke-width={bracketWidth}
                            fill="none"
                        ></path>
                    </svg>
                </div>
                <div className="container-semi-finals">
                    <div className="container-title">
                        <h4>Semi-finals</h4>
                    </div>
                    <div className="match">
                        <div className="match-team">
                            <div className="match-team-info">
                                <img src={unknownImage} alt="flag" />
                                <p>?</p>
                            </div>
                            <div className="match-team-score">
                                <p></p>
                            </div>
                        </div>
                        <div className="match-team">
                            <div className="match-team-info">
                                <img src={unknownImage} alt="flag" />
                                <p>?</p>
                            </div>
                            <div className="match-team-score">
                                <p></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-linker">
                    <svg width="50" height="575">
                        <path
                            d="
                    M 50 77
                    L 24 77
                    L 24 287
                    L 50 287
                    M 24 183
                    L 0 183
                    "
                            stroke="white"
                            stroke-width={bracketWidth}
                            fill="none"
                        ></path>
                    </svg>
                </div>
                <div className="container-quarter-finals">
                    <div className="container-title">
                        <h4>Quarter-finals</h4>
                    </div>
                    <div className="match">
                        <div className="match-team">
                            <div className="match-team-info">
                                <img src={unknownImage} alt="flag" />
                                <p>?</p>
                            </div>
                            <div className="match-team-score">
                                <p></p>
                            </div>
                        </div>
                        <div className="match-team">
                            <div className="match-team-info">
                                <img src={unknownImage} alt="flag" />
                                <p>?</p>
                            </div>
                            <div className="match-team-score">
                                <p></p>
                            </div>
                        </div>
                    </div>
                    <div className="match">
                        <div className="match-team">
                            <div className="match-team-info">
                                <img src={unknownImage} alt="flag" />
                                <p>?</p>
                            </div>
                            <div className="match-team-score">
                                <p></p>
                            </div>
                        </div>
                        <div className="match-team">
                            <div className="match-team-info">
                                <img src={unknownImage} alt="flag" />
                                <p>?</p>
                            </div>
                            <div className="match-team-score">
                                <p></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-linker">
                    <svg width="50" height="575">
                        <path
                            d="
                    M 50 25
                    L 24 25
                    L 24 130
                    L 50 130
                    M 24 77
                    L 0 77
                    
                    M 50 235
                    L 24 235
                    L 24 340
                    L 50 340
                    M 24 287
                    L 0 287
                    "
                            stroke="white"
                            stroke-width={bracketWidth}
                            fill="none"
                        ></path>
                    </svg>
                </div>
                <div className="container-round16">
                    <div className="container-title">
                        <h4>Round of 16</h4>
                    </div>
                    <div className="match">
                        <div className="match-team">
                            <div className="match-team-info">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/en/b/be/Flag_of_England.svg"
                                    alt="flag"
                                />
                                <p>England</p>
                            </div>
                            <div className="match-team-score">
                                <p></p>
                            </div>
                        </div>
                        <div className="match-team">
                            <div className="match-team-info">
                                <img
                                    src="https://flagsapi.com/SN/flat/64.png"
                                    alt="flag"
                                />
                                <p>Senegal</p>
                            </div>
                            <div className="match-team-score">
                                <p></p>
                            </div>
                        </div>
                    </div>
                    <div className="match">
                        <div className="match-team">
                            <div className="match-team-info">
                                <img
                                    src="https://flagsapi.com/FR/flat/64.png"
                                    alt="flag"
                                />
                                <p>France</p>
                            </div>
                            <div className="match-team-score">
                                <p></p>
                            </div>
                        </div>
                        <div className="match-team">
                            <div className="match-team-info">
                                <img
                                    src="https://flagsapi.com/PL/flat/64.png"
                                    alt="flag"
                                />
                                <p>Poland</p>
                            </div>
                            <div className="match-team-score">
                                <p></p>
                            </div>
                        </div>
                    </div>
                    <div className="match">
                        <div className="match-team">
                            <div className="match-team-info">
                                <img
                                    src="https://flagsapi.com/MA/flat/64.png"
                                    alt="flag"
                                />
                                <p>Morocco</p>
                            </div>
                            <div className="match-team-score">
                                <p></p>
                            </div>
                        </div>
                        <div className="match-team">
                            <div className="match-team-info">
                                <img
                                    src="https://flagsapi.com/ES/flat/64.png"
                                    alt="flag"
                                />
                                <p>Spain</p>
                            </div>
                            <div className="match-team-score">
                                <p></p>
                            </div>
                        </div>
                    </div>
                    <div className="match">
                        <div className="match-team">
                            <div className="match-team-info">
                                <img
                                    src="https://flagsapi.com/PT/flat/64.png"
                                    alt="flag"
                                />
                                <p>Portugal</p>
                            </div>
                            <div className="match-team-score">
                                <p></p>
                            </div>
                        </div>
                        <div className="match-team">
                            <div className="match-team-info">
                                <img
                                    src="https://flagsapi.com/CH/flat/64.png"
                                    alt="flag"
                                />
                                <p>Switzerland</p>
                            </div>
                            <div className="match-team-score">
                                <p></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    );
}

export default Bracket;
