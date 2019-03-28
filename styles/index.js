import css from "styled-jsx/css";

// In an attempt to keep all configuration in one place, css variables
// are currently stored in config.yml. Move these variables into a
// variables file in this style/ directory if that is your preference.
import { config } from "../config/config.yml";

// used in pages/about.js, pages/index.js
export const centeredPageStyles = css`
    .centered-container {
        height: 80vh;
        width: 98vw;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        `;

// used in _app.js
export const globalStyles = css.global`
@font-face {
  font-family: 'ArimaKoshi Regular';
  font-display: auto;
  src: url('/static/fonts/ArimaKoshi-Regular.otf') format('opentype');
}

html {
    scroll-behavior: smooth;
}
body {
    font-family: ff-tisa-sans-web-pro, sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: .5em;
    position: relative;
    top: 0;
    padding: 0;
    color: ${config.css.primaryColor};
}
#__next {
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 100vh;
    background: ${config.css.backgroundColor};
}
.footer {
    background: ${config.css.backgroundColor};
    height: 12vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1vw;
    position: absolute;
    bottom: 0;
}
/* text elements */
strong,
h3,
h3 > *,
h4,
h4 > *,
h5,
h5 > *,
h6,
h6 > * {
    font-family: "ArimaKoshi Regular";
    letter-spacing: 1px;
}
strong {
    color: ${config.css.accentColor}
}
h1 {
  font-family: ff-tisa-sans-web-pro, sans-serif;
	font-size: 3vw;
	margin: .69vw 0 0 0;
	font-weight: lighter;
	text-transform: uppercase;
	color:  ${config.css.midPink};
}

h2 {
  font-size: 1.25vw;
  margin: .69vw 0 0 0;
  font-weight: lighter;
  color:  ${config.css.midPink};
}

a {
    border-bottom: .4vmin ${config.css.midPink} solid;
    display: inline-block;
    position: relative;
    text-decoration: none;

  }

  a:hover {
    background: ${config.css.accentColor};
    padding: .1vmin;
    }
    label {
        color: ${config.css.accentColor};
        font-weight: 600;
        font-family: sans-serif;
        font-size: 1.25vw;
    }
    p,
    b,
    em,
    span,
    li,
    ul,
    ol {
        font-family: ff-tisa-sans-web-pro, sans-serif;
        font-size: 1.8vmin;
        line-height: 3.5vmin;
        word-break: break-word /* This prevents a bug with the reading progress bar. Leave this style here unless you are removing the reading progress bar. */
    }
    .X {
      fill: pink;

    }

    .X:hover {
      fill: yellowgreen;
      stroke: yellowgreen;
    }

    /* Footer styling */

  .social-icon {
      border-bottom: none;
    }
    /* Home page small screen styling */

    #paraStyle {
      margin: 20vmin;
    }
  #phone {
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

/* Home page svg styling */


#curve {
  fill: transparent;
  z-index: -2;
}
  }

  #sakura {
    opacity: .25;
    box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
   }

/* flower */

#fade-stop-1 {
  stop-color: #FF0000;
  }

#fade-stop-2 {
  stop-color: #00ffff;
  }

#outer-petals {
  opacity: .75;
  }

#outer-petals  {
  fill: #FF0000;
  stroke: #00FFFF;
  stroke-width: 1;
  }

  .segment-fill {
  fill: azure;
  stroke: lightsteelblue;
  stroke-width: 1;
  }

#outer-petals  {
  fill: none;
  stroke: #008080;
  stroke-width: 3;
  }
  .segment-edge {
  fill: none;
  stroke: deepskyblue;
  stroke-width: 3;
  }

#inner-petals  {
  fill: #ffff00;
  stroke: #ffff00;
  stroke-width: 1;

  }
  .segment-fill {
    fill: pink;
    stroke: yellow;
    stroke-width: 1;

    }
#inner-petals {
  fill: none;
  stroke: #FF0000;
  stroke-width: 9;
  }

  .segment-edge {
    fill: none;
    stroke: yellowgreen;
    stroke-width: 9;
    }
    text {
      font-family: "ArimaKoshi Regular";
      fill:  ${config.css.midPink};
    }

    #link {
        text-decoration-line: underline;
        text-decoration-stroke: black;
        text-decoration-color: black;

    }
    #line {
      fill: none;
      stroke: red;
      stroke-width: 1;
    }


/* About page css chape -- balloon */
#balloon {
	height: 25vmin;
  width: 15vmin;
  align: right;
  margin-left: 90%;
  position: absolute;
  display: inline-block;
	box-sizing: border-box;
	border: .3rem white solid;
	border-radius: 50% 50% 50% 50% / 40% 40% 60% 60%;
	z-index: 2;
	box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
  background: ${config.css.accentColor};
  animation: move 20s infinite;
  animation-direction: alternate;
}
#balloon:before {
  color: #eeeeee;
  display:block;
  text-align:center;
  width:100%;
  position:absolute;
  bottom:-3vmin;
  z-index:-1;
  content:"▲";
  font-size: 2vmin;
}

#balloon:hover {
  cursor: pointer;
}

@keyframes move {
  0% {
    transform: translate(-330px, -30px);
  }
  50% {
    transform: translate(-20px, -100px);
  }
  75% {
    transform: translate(-180px, -800px);
  }
  100% {
    transform: translate(-50px, -550px);
  }
}

/* about page etc */


#writer:hover  #title {
	display: block;
}

#title {
	display: none;

	color: #ffffff;
	background-color: #000000;
  text-align: right;

  width: 95vw;
  padding: 10px;
}

#writer2:hover #title2 {
	display: block;
}

#title2 {
	display: none;

	color: #ffffff;
	background-color: #000000;
  text-align: center;

  width: 95vw;
  padding: 10px;
}
#writer3:hover #title3 {
	display: block;
}

#title3 {
	display: none;

	color: #ffffff;
	background-color: #000000;
  text-align: center;

  width: 95vw;
  padding: 10px;
}
#writer4:hover #title4 {
	display: block;
}

#title4 {
	display: none;

	color: #ffffff;
	background-color: #000000;
  text-align: center;

  width: 95vw;
  padding: 10px;
}
#writer5:hover + #title5 {
	display: block;
}

#title5 {
	display: none;

	color: #ffffff;
	background-color: #000000;
  text-align: center;

  width: 95vw;
  padding: 10px;
}
/* etc */

.search-layout,
.blog-layout,
.blog-post-list {
  height: auto;
  width: 98vw;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.blog-layout > div {
    display: flex;
    flex-direction: column;
}
img {
    max-width: 100%;
}
img.img-centered {
    align-self: center;
    margin: 10px 0px;
}
.icon-button {
    outline: none;
    border: none;
    background: ${config.css.accentColor};
}
.icon-button.hamburger {
    position: fixed;
    left: 0px;
    top: 0px;
    z-index: 3; /* the navigation menu is z-index: 4 */
    border: 1px solid ${config.css.black};
    padding-top: 4px;
    border-radius: 3px;
}

code > span {
    font-size: inherit; /* make sure code font size is set in <CodeBlock /> */
    background: inherit !important; /* Fixes code block style bug*/
}

/* media queries */
@media (min-width: 500px)  {
  #phone {
     display: none;
   }
   #paraStyle {
     display: none;
   }
}
@media (max-width: 500px)  {
  #shape {
    display: none;
  }
  #balloon {
    display: none;
  }
}

`;
