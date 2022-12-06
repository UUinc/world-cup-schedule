import React, { useEffect } from "react";

function HorizontalAd() {
    useEffect(() => {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }, []);

    return (
        <div>
            <ins
                class="adsbygoogle"
                style={{ display: "block" }}
                data-ad-client="ca-pub-2596681790141086"
                data-ad-slot="6328695547"
                data-ad-format="auto"
                data-full-width-responsive="true"
            ></ins>
        </div>
    );
}

export default HorizontalAd;
