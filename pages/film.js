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

function Film(props) {
  return (
    <div>
        <h1>Batman TV Shows</h1>
        <ul>
          {props.shows.map(({show}) => (
            <li key={show.id}>
              <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
                <a>{show.network.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>

);
}

Film.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=girls')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    shows: data
  }
}

export default Film;
