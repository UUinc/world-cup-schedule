import React, { useState, useEffect } from "react";
import "./Bracket.css";
import { getFromApi } from "../assets/scripts/GetFromApi";

import worldCupImage from "../assets/images/world-cup.png";
import unknownImage from "../assets/images/unknown.png";

function Bracket() {
    const bracketWidth = 4;

    const [bracket, SetBracket] = useState([]);

    useEffect(() => {
        getFromApi(
            "https://uuinc.github.io/projects/world-cup-schedule/bracket.json"
        ).then((result) => SetBracket(result.bracket));
    }, []);

    return (
        <div className="Bracket">
            <div className="Bracket-container">
                <div className="container-round16">
                    <div className="container-title">
                        <h4>{bracket[0]?.name}</h4>
                    </div>
                    {bracket[0]?.games.map((game, index) => {
                        if (index > bracket[0]?.games.length / 2 - 1)
                            return <></>;
                        return (
                            <div className="match">
                                {game.team.map((team) => (
                                    <div className="match-team">
                                        <div className="match-team-info">
                                            <img
                                                src={team.image}
                                                alt={team.name + "flag"}
                                            />
                                            <p>{team.name}</p>
                                        </div>
                                        <div className="match-team-score">
                                            <p>{team.score}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        );
                    })}
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
                        <h4>{bracket[1]?.name}</h4>
                    </div>
                    {bracket[1]?.games.map((game, index) => {
                        if (index > bracket[1]?.games.length / 2 - 1)
                            return <></>;
                        return (
                            <div className="match">
                                {game.team.map((team) => (
                                    <div className="match-team">
                                        <div className="match-team-info">
                                            <img
                                                src={
                                                    team.image === ""
                                                        ? unknownImage
                                                        : team.image
                                                }
                                                alt={team.name + "flag"}
                                            />
                                            <p>{team.name}</p>
                                        </div>
                                        <div className="match-team-score">
                                            <p>{team.score}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        );
                    })}
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
                        <h4>{bracket[2]?.name}</h4>
                    </div>
                    {bracket[2]?.games.map((game, index) => {
                        if (index > bracket[2]?.games.length / 2 - 1)
                            return <></>;
                        return (
                            <div className="match">
                                {game.team.map((team) => (
                                    <div className="match-team">
                                        <div className="match-team-info">
                                            <img
                                                src={
                                                    team.image === ""
                                                        ? unknownImage
                                                        : team.image
                                                }
                                                alt={team.name + "flag"}
                                            />
                                            <p>{team.name}</p>
                                        </div>
                                        <div className="match-team-score">
                                            <p>{team.score}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        );
                    })}
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
                        <h4>{bracket[4]?.name}</h4>
                    </div>
                    <div className="final-cup">
                        <img src={worldCupImage} alt="word cup" />
                    </div>
                    <div className="match">
                        <div className="match-team">
                            <div className="match-team-info">
                                <img
                                    src={
                                        bracket[4]?.games[0].team[0].image ===
                                        ""
                                            ? unknownImage
                                            : bracket[4]?.games[0].team[0].image
                                    }
                                    alt={
                                        bracket[4]?.games[0].team[0].name +
                                        " flag"
                                    }
                                />
                                <p>{bracket[4]?.games[0].team[0].name}</p>
                            </div>
                            <div className="match-team-score">
                                <p>{bracket[4]?.games[0].team[0].score}</p>
                            </div>
                        </div>
                        <div className="match-team">
                            <div className="match-team-info">
                                <img
                                    src={
                                        bracket[4]?.games[0].team[1].image ===
                                        ""
                                            ? unknownImage
                                            : bracket[4]?.games[0].team[1].image
                                    }
                                    alt={
                                        bracket[4]?.games[0].team[1].name +
                                        " flag"
                                    }
                                />
                                <p>{bracket[4]?.games[0].team[1].name}</p>
                            </div>
                            <div className="match-team-score">
                                <p>{bracket[4]?.games[0].team[1].score}</p>
                            </div>
                        </div>
                    </div>
                    <div className="container-title">
                        <h4>{bracket[3]?.name}</h4>
                    </div>

                    <div className="match">
                        <div className="match-team">
                            <div className="match-team-info">
                                <img
                                    src={
                                        bracket[3]?.games[0].team[0].image ===
                                        ""
                                            ? unknownImage
                                            : bracket[3]?.games[0].team[0].image
                                    }
                                    alt={
                                        bracket[3]?.games[0].team[0].name +
                                        " flag"
                                    }
                                />
                                <p>{bracket[3]?.games[0].team[0].name}</p>
                            </div>
                            <div className="match-team-score">
                                <p>{bracket[3]?.games[0].team[0].score}</p>
                            </div>
                        </div>

                        <div className="match-team">
                            <div className="match-team-info">
                                <img
                                    src={
                                        bracket[3]?.games[0].team[1].image ===
                                        ""
                                            ? unknownImage
                                            : bracket[3]?.games[0].team[1].image
                                    }
                                    alt={
                                        bracket[3]?.games[0].team[1].name +
                                        " flag"
                                    }
                                />
                                <p>{bracket[3]?.games[0].team[1].name}</p>
                            </div>
                            <div className="match-team-score">
                                <p>{bracket[3]?.games[0].team[1].score}</p>
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
                        <h4>{bracket[2]?.name}</h4>
                    </div>
                    {bracket[2]?.games.map((game, index) => {
                        if (index <= bracket[2]?.games.length / 2 - 1)
                            return <></>;
                        return (
                            <div className="match">
                                {game.team.map((team) => (
                                    <div className="match-team">
                                        <div className="match-team-info">
                                            <img
                                                src={
                                                    team.image === ""
                                                        ? unknownImage
                                                        : team.image
                                                }
                                                alt={team.name + "flag"}
                                            />
                                            <p>{team.name}</p>
                                        </div>
                                        <div className="match-team-score">
                                            <p>{team.score}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        );
                    })}
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
                        <h4>{bracket[1]?.name}</h4>
                    </div>
                    {bracket[1]?.games.map((game, index) => {
                        if (index <= bracket[1]?.games.length / 2 - 1)
                            return <></>;
                        return (
                            <div className="match">
                                {game.team.map((team) => (
                                    <div className="match-team">
                                        <div className="match-team-info">
                                            <img
                                                src={
                                                    team.image === ""
                                                        ? unknownImage
                                                        : team.image
                                                }
                                                alt={team.name + "flag"}
                                            />
                                            <p>{team.name}</p>
                                        </div>
                                        <div className="match-team-score">
                                            <p>{team.score}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        );
                    })}
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
                        <h4>{bracket[0]?.name}</h4>
                    </div>
                    {bracket[0]?.games.map((game, index) => {
                        if (index <= bracket[0]?.games.length / 2 - 1)
                            return <></>;
                        return (
                            <div className="match">
                                {game.team.map((team) => (
                                    <div className="match-team">
                                        <div className="match-team-info">
                                            <img
                                                src={team.image}
                                                alt={team.name + "flag"}
                                            />
                                            <p>{team.name}</p>
                                        </div>
                                        <div className="match-team-score">
                                            <p>{team.score}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        );
                    })}
                </div>
            </div>
            <hr />
        </div>
    );
}

export default Bracket;
