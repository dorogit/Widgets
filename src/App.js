import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

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
const options = [
  {
    label:'Afrikaans',
    value:'Af'
  },
  {
    label:'Arabic',
    value:'Ar'
  },
  {
    label:'Hindi',
    value:'Hi'
  }
]
export default () => {
  return (
    <div>
      <br/>
      <Translate options = {options}/>
    </div>
  )
}