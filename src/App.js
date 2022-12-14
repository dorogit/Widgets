import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

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
  const [activeOption,setActiveOption] = useState(options[0])

  return (
    <div>
      <Header/>
      <Route path = '/'>
        <Accordion items = {items}/>
      </Route>
      <Route path = '/Dropdown' >
        <Dropdown options={options} activeOption = {activeOption} setActiveOption={setActiveOption} label= 'Select a color'/>
      </Route>
      <Route path = '/Search'>
        <Search/>
      </Route>
      <Route path = '/Translate'>
        <Translate options = {options}/>
      </Route>
    </div>
  )
}