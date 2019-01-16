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
        background: ${config.css.black};
`;

// used in _app.js
export const globalStyles = css.global`
@font-face {
  font-family: 'ArimaKoshi Regular';
  src: url('/static/fonts/ArimaKoshi-Regular.otf') format('opentype');
}

@keyframes fade-in-right {
  from {
    opacity: 0;
    transform: translateX(-15px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes grow-left {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}


html {
    scroll-behavior: smooth;
}
body {
    margin-left: 2em;
    font-size: .5em;
    position: relative;
    top: 0;
    padding: 0;
    color: ${config.css.primaryColor};
    background: ${config.css.backgroundColor};
}
#__next {
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 100vh;
}
.footer {
    background: ${config.css.backgroundColor};
    height: 80px;
    width: 100%;
    border-top: 15px solid #eeeeee;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    position: absolute;
    bottom: 0;
}
strong,
h1,
h1 > *,
h2,
h2 > *,
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



#space {
  height: 20rem;
}
#container {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
  z-index: 2;
}


@keyframes float {
	0% {
		box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
		transform: translatey(0px);
	}
	50% {
		box-shadow: 0 25px 15px 0px rgba(0,0,0,0.2);
		transform: translatey(-20px);
	}
	100% {
		box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
		transform: translatey(0px);
	}
}





h1 {
	font-size: 24px;
	margin: 10px 0 0 0;
	font-weight: lighter;
	text-transform: uppercase;
	color: #eeeeee;
}

p {
	font-size: 12px;
	font-weight: light;
	color: #eeeeee;
}


#balloon {
	height: 280px;
  width: 190px;
  align: right;
  margin-left: 90%;
  position: absolute;
	box-sizing: border-box;
	border: 5px white solid;
	border-radius: 50% 50% 50% 50% / 40% 40% 60% 60%;
	z-index: 1;
	box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
  animation: float 6s ease-in-out infinite;
  -moz-transform: rotate(25deg);
  background: ${config.css.accentColor};


}
path {
  fill: transparent;
  z-index: -2;

}

text {
  fill: #eeeeee;
}


#balloon:before {
  color: #eeeeee;
  display:block;
  text-align:center;
  width:100%;
  position:absolute;
  bottom:-44px;
  z-index:-1;
  content:"▲";
  font-size: 5em;
}

  /* BAllOON 0*/
  @-webkit-keyframes balloon3 {
    0%,100%{ -webkit-transform:translate(0, -10px) rotate(6eg);}
    50%{ -webkit-transform:translate(-20px, 30px) rotate(-8deg); }
  }
  @-moz-keyframes balloon3 {
   0%,100%{ -moz-transform:translate(0, -10px) rotate(6eg);}
    50%{ -moz-transform:translate(-20px, 30px) rotate(-8deg); }
  }
  @-o-keyframes balloon3 {
   0%,100%{ -o-transform:translate(0, -10px) rotate(6eg);}
    50%{ -o-transform:translate(-20px, 30px) rotate(-8deg); }
  }
  @keyframes balloon3 {
   0%,100%{ transform:translate(0, -10px) rotate(6eg);}
    50%{ transform:translate(-20px, 30px) rotate(-8deg); }
  }


.content {
	width: 100%;
	max-width: 600px;
	padding: 20px 40px;
	box-sizing: border-box;
	text-align: center;
}
.search-layout,
.blog-layout,
.blog-post-list {
    max-width: 740px;
    padding: 40px 20px 100px 20px;
    position: relative;
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
a {
    color: ${config.css.primaryColor};
}
label {
    color: ${config.css.accentColor};
    font-weight: 600;
    font-family: sans-serif;
    font-size: 18px;
}
p,
p a,
b,
em,
span,
li,
ul,
ol {
    font-family: ArimaKoshi Regular;
    font-size: 18px;
    line-height: 24px;
    word-break: break-word /* This prevents a bug with the reading progress bar. Leave this style here unless you are removing the reading progress bar. */
}

code > span {
    font-size: inherit; /* make sure code font size is set in <CodeBlock /> */
    background: inherit !important; /* Fixes code block style bug*/
}


`;
