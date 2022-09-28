import userEvent from "@testing-library/user-event";
import React, { useEffect, useRef, useState } from "react";

const Dropdown = ({options,activeOption,setactiveOption}) => {
  const [dropOpen,setdropOpen] = useState(null)
  const ref = useRef()

  useEffect(()=>{
    document.body.addEventListener('click', (event)=> {
      if (ref.current.contains(event.target)) {
        return;
      } 
      setdropOpen(false)
    })
  },[])

  const renderedOptions = options.map((option)=> {
    if (option.value === activeOption.value) {
      return null;
    }
    return (
     <div key={option.value} className="item" onClick={()=> {setactiveOption(option)}}>
      {option.label}
     </div>
    )
  })
  return (
    <div ref = {ref} className="ui form">
      <div className="ui field">
       <label className="label">Select a color</label>
       <div onClick={()=>{setdropOpen(!dropOpen)}} className= {`ui selection dropdown ${dropOpen ? 'active' : ''}`}>
        <i className="dropdown icon"></i>
        <div className="text"> {activeOption.label} </div>
        <div className= {`menu ${dropOpen ? 'visible transition' : ''}`}>
          {renderedOptions}
        </div>
       </div>
      </div>
    </div>
  )
}

export default Dropdown;