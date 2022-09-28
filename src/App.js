import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

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
    label:'The colour red',
    value:'red'
  },
  {
    label:'The colour blue',
    value:'blue'
  },
  {
    label:'The color green',
    value:'green'
  }
]
export default () => {
  const [activeOption, setactiveOption] = useState([])
  const [dropDown,setDropDown] = useState(true)
  return (
    <div>
      <button onClick={() => {setDropDown(!dropDown)}}>Toggle</button>
      <br/>
      {dropDown ?
      <Dropdown 
      options = {options}
      activeOption = {activeOption}
      setactiveOption = {setactiveOption}
      /> : null
      }
    </div>
  )
}