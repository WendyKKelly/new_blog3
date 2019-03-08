import React from "react";
import ReactDOM from "react-dom";
import { SocialIcon } from "react-social-icons";
import { config } from "../config/config.yml";

export default function Footer() {
    return (
        <div className="footer">
<SocialIcon url="http://twitter.com/wendykkelly" network="twitter" bgColor="#ff616b" /> <SocialIcon url="http://github.com/wendykkelly" />
</div>
    );
}
