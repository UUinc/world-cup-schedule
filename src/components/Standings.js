import React, { useState, useEffect } from "react";
import "./Standings.css";
import { getFromApi } from "../assets/scripts/GetFromApi";

function Standings() {
    const [standings, SetStandings] = useState([]);

    useEffect(() => {
        getFromApi(
            "https://uuinc.github.io/projects/world-cup-schedule/standings.json"
        ).then((result) => SetStandings(result.standings));
    }, []);

    return (
        <div className="Standings">
            <h1>Standings</h1>
            {standings.map((standing) => (
                <div className="Standing-container">
                    <div className="Standing">
                        <div className="Standing-header">
                            <h2>Group {standing.group}</h2>
                        </div>
                        <table className="Standing-table">
                            <tr className="Standing-table-header">
                                <th>Team</th>
                                <th>W</th>
                                <th>L</th>
                                <th>D</th>
                                <th>Pts</th>
                            </tr>
                            {standing.team.map((team) => (
                                <tr>
                                    <td>
                                        <div className="Standing-table-team">
                                            <img
                                                src={team.image}
                                                alt="flag"
                                                width="40"
                                            />
                                            <h4>{team.name}</h4>
                                        </div>
                                    </td>
                                    <td>{team.info.win}</td>
                                    <td>{team.info.draw}</td>
                                    <td>{team.info.lose}</td>
                                    <td>
                                        {parseInt(team.info.win) * 3 +
                                            parseInt(team.info.draw)}
                                    </td>
                                </tr>
                            ))}
                        </table>
                    </div>
                </div>
            ))}
            <hr />
        </div>
    );
}

export default Standings;
