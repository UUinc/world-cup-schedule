import React from "react";
import "./AppFooter.css";

import githubLogo from "../assets/images/github.png";
import instagramLogo from "../assets/images/instagram.png";
import twitterLogo from "../assets/images/twitter.png";
import linkedinLogo from "../assets/images/linkedin.png";

function AppFooter() {
    return (
        <div className="Footer">
            <div className="Footer-Top">
                <h2>Contact:</h2>
                <div className="Footer-Social">
                    <div className="Footer-Social-Icon">
                        <a
                            href="https://github.com/UUinc"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={githubLogo} alt="github icon" />
                        </a>
                    </div>
                    <div className="Footer-Social-Icon">
                        <a
                            href="https://www.instagram.com/yahya.lz/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={instagramLogo} alt="instagram icon" />
                        </a>
                    </div>
                    <div className="Footer-Social-Icon">
                        <a
                            href="https://twitter.com/yahya_lz"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={twitterLogo} alt="twitter icon" />
                        </a>
                    </div>
                    <div className="Footer-Social-Icon">
                        <a
                            href="https://www.linkedin.com/in/yahyalazrek/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={linkedinLogo} alt="linkedin icon" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="Footer-Bottom">
                <hr />
                <span>
                    © {new Date().getFullYear()}, Yahya Lazrek All rights
                    reserved
                </span>
            </div>
        </div>
    );
}

export default AppFooter;
