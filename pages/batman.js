import React from "react";
import { Component } from "react";
import { centeredPageStyles } from "../styles";
import Emoji from "../components/Emoji";
import Link from "next/link";
import fetch from 'isomorphic-unfetch';


export const meta = {
    title: "About",

    tags: ["Next.js", "MDX"],
    layout: "page",
    publishDate: "2011-01-01",
    modifiedDate: false,
    seoDescription: "This is an about page."
};

function Batman(props) {
  return (
<div>
    <h1>Batman TV Shows</h1>
    <ul>
      {props.cows.map(({show}) => (
        <li key={show.id}>
          <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </div>

);
}

Batman.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    cows: data
  }
}

export default Batman;
