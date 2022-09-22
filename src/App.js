import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";

const items = [
  {
    title:"what is react?",
    content: "React is a front-end javascript framework"
  },
  {
    title:"why use React?",
    content: "React is a favourite library among software engineers"
  },
  {
    title: "Who is awesome?",
    content: "Dororo"
  }
]

export default () => {
  return (
    <div>
      <br/>
      <Search/>
    </div>
  )
}