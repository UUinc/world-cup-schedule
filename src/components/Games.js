import React, { useState, useEffect } from "react";
import "./Games.css";
import { getFromApi } from "../assets/scripts/GetFromApi";

function Games() {
    const [games, SetGames] = useState([]);

    useEffect(() => {
        const res = getFromApi(
            "https://uuinc.github.io/projects/world-cup-schedule/games.json"
        ).then((result) => SetGames(result.games));
        console.log(res);
    }, []);

    return (
        <div className="Matches">
            <h1>Games</h1>
            {console.log(games)}
            {games.map((game) => (
                <div className="Matches-match">
                    <div className="Matches-match-team team-left">
                        <img
                            src={game.team[0].image}
                            alt={game.team[0].name + " flag"}
                        />
                        <p>{game.team[0].name}</p>
                    </div>
                    <div className="Matches-match-info">
                        <p>{game.info.date}</p>
                        <h2>×</h2>
                        {game.info.time === "Full time" ? (
                            <p style={{ color: "#0f9d58", fontWeight: "bold" }}>
                                {game.info.time}
                            </p>
                        ) : (
                            <p style={{ color: "black" }}>{game.info.time}</p>
                        )}
                    </div>
                    <div className="Matches-match-team team-right">
                        <img
                            src={game.team[1].image}
                            alt={game.team[1].name + " flag"}
                        />
                        <p>{game.team[1].name}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Games;
