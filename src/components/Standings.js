import React from "react";
import "./Standings.css";

function Standings() {
    return (
        <div className="Standings">
            <h1>Standings:</h1>
            <div className="Standing-container">
                <div className="Standing">
                    <div className="Standing-header">
                        <h2>Group F</h2>
                    </div>
                    <table className="Standing-table">
                        <tr className="Standing-table-header">
                            <th>Team</th>
                            <th>W</th>
                            <th>L</th>
                            <th>D</th>
                            <th>Pts</th>
                        </tr>
                        <tr>
                            <td>
                                <div className="Standing-table-team">
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Morocco.svg"
                                        alt="flag"
                                        width="40"
                                    />
                                    <h4>MA</h4>
                                </div>
                            </td>
                            <td>2</td>
                            <td>0</td>
                            <td>1</td>
                            <td>7</td>
                        </tr>
                        <tr>
                            <td>
                                <div className="Standing-table-team">
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Morocco.svg"
                                        alt="flag"
                                        width="40"
                                    />
                                    <h4>MA</h4>
                                </div>
                            </td>
                            <td>2</td>
                            <td>0</td>
                            <td>1</td>
                            <td>7</td>
                        </tr>
                        <tr>
                            <td>
                                <div className="Standing-table-team">
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Morocco.svg"
                                        alt="flag"
                                        width="40"
                                    />
                                    <h4>MA</h4>
                                </div>
                            </td>
                            <td>2</td>
                            <td>0</td>
                            <td>1</td>
                            <td>7</td>
                        </tr>
                        <tr>
                            <td>
                                <div className="Standing-table-team">
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Morocco.svg"
                                        alt="flag"
                                        width="40"
                                    />
                                    <h4>MA</h4>
                                </div>
                            </td>
                            <td>2</td>
                            <td>0</td>
                            <td>1</td>
                            <td>7</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Standings;
