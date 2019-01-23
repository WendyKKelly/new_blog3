import React from "react";
import { centeredPageStyles } from "../styles";
import Emoji from "../components/Emoji";
import Link from "next/link";

export const meta = {
    title: "About",
    tags: ["Next.js", "MDX"],
    layout: "page",
    publishDate: "2011-01-01",
    modifiedDate: false,
    seoDescription: "This is an about page."
};

function About() {
    return (
        <div className="centered-container">
            <h1>Hello, I'm Wendy <Emoji symbol="🌸" label="cherry-blossom" size={500}/> </h1>
            <h2><Emoji symbol="✍" label="writer" size={200}/>I write fiction & non-fiction</h2>
            <h2><Emoji symbol="👩‍💻" label="technologist" size={200}/> I <Emoji symbol="💖" label="heart" size={200}/> Programming</h2>
            <h2><Emoji symbol="🧘" label="yoga" size={200}/> I enjoy yoga </h2>
            <h2><Emoji symbol="🧖‍♀️" label="sauna" size={200}/> ...and hotsprings and sauna and cold pools</h2>
            <h2><Emoji symbol="🤸‍♀️" label="cartwheel" size={200}/> Play is extremely important to me.</h2>
            <h2><Emoji symbol="👫" label="family" size={200}/> <Emoji symbol="👨‍👨‍👦‍👦" label="family" size={200}/>I  <Emoji symbol="💖" label="heart" size={200}/> my family.</h2>
            <h2><Emoji symbol="🍻" label="beer" size={200}/> I love craft beer. Married to a brewer </h2>

        <Link prefetch href={`../blog/post-four-acknowledgement`}><div  id="balloon"><a></a></div></Link>

            <style jsx>{centeredPageStyles}</style>
        </div>
    );
}

export default About;
