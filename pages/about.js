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
            <div id="writer"><h2><Emoji symbol="✍" label="writer" size={200}/><a href="#">I write fiction & non-fiction.</a></h2>
            <div id="title">  <p >I'm an independent writer and front-end developer from a small town in British Columbia, Canada. I'm obesessed with story, design, and using the Web to build healthy community. I also frankly love making stuff and can tinker for hours and hours and days learning a new development skill. </p></div>
            </div>
            <div id="writer2"><h2><Emoji symbol="👩‍💻" label="technologist" size={200}/> <a href="#">I <Emoji symbol="💖" label="heart" size={200}/> programming.</a></h2>
            <div id="title2"><p >I've got a knack for nailing voice — I have spent decades helping people, brands, and fictional characters find and use their voice for maximum effect. I've got an ecclectic background full of diverse experiences (formal and informal) that help me when I tackle a writing project and help me to know clearly when a project might be a good fit and when to refer projects to colleagues.</p></div>
            </div>
            <div id="writer3"><h2><Emoji symbol="🧘" label="yoga" size={200}/><a id="writer3" href="#"> I enjoy yoga </a></h2>
            <div id="title3"> <p >My BA is in English, I have a few diplomas in language and 99.99% of an MSc in mental health counseling (Capstone on mindfulness). At this point, however, much of the value that I bring to the table is self-taught, either from my decades in the trenches of life <Emoji symbol="🌸" label="cherry-blossom" size={500}/> or from the gazillion MOOCs I have taken. Lifelong learning is the only constant.</p></div>
            </div>
            <div id="writer4"><h2><Emoji symbol="🧖‍♀️" label="sauna" size={200}/> <a id="writer4" href="#">...and hotsprings and sauna and cold pools.</a></h2>
            <div id="title4"> <p >Projects I am interested in: front-end development work using javascript & css (and of course html5), writing projects working closely with design teams, and teaching opportunities (teaching voice / story / narrative).</p></div>
            </div>

            <div id="writer5"><h2><Emoji symbol="🤸‍♀️" label="cartwheel" size={200}/><a id="writer5" href="#"> Play is extremely important to me.</a></h2></div>
            <h2><Emoji symbol="👫" label="family" size={200}/> <Emoji symbol="👨‍👨‍👦‍👦" label="family" size={200}/>I  <Emoji symbol="💖" label="heart" size={200}/> my family.</h2>
            <h2><Emoji symbol="🍻" label="beer" size={200}/> I love craft beer. I'm married to a brewer and we own <Link prefetch href={`https://backroadsbrewing.com/`}>Backroads Brewing Company.</Link> </h2>

            <div>
              </div>

      <Link prefetch href={`../blog/post-eight-hire-me`}><div  id="balloon"><a></a></div></Link>

            <style jsx>{centeredPageStyles}</style>
        </div>

    );
}

export default About;
