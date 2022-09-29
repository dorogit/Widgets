import React, { useEffect, useState } from "react";
import Dropdown from "./Dropdown";
import axios from "axios";
import Convert from "../API/GoogleTranslate";
const Translate = ({options}) => {

  const [language, setLanguage] = useState(options[0])
  const [text,setText] = useState('')
  const label = "Select a language"
  
  return (
    <div>
      Translate
      <div className="ui form">
        <div className="field">
          <label>
            Enter Text
          </label>
        </div>
      <input value = {text} onChange = {(event)=> {setText(event.target.value)}} />
      </div>
      <Dropdown options = {options} activeOption = {language} setActiveOption = {setLanguage} label = {label} />
      <h3> Output</h3>
      <Convert text = {text} language = {language} />
    </div>
  )
}

export default Translate;