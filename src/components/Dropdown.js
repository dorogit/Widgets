import React, { useEffect, useRef, useState } from "react";

const Dropdown = ({options,activeOption,setActiveOption, label}) => {
  const [dropOpen,setDropOpen] = useState(null)
  const ref = useRef()

  useEffect(()=>{

    const dropdown = (event) =>{
    if (ref.current.contains(event.target)) {
      return;
    }
    setDropOpen(false)
  }

    document.body.addEventListener('click', dropdown)
    return () => {
      document.body.removeEventListener('click', dropdown)
    }
  },[])

  const renderedOptions = options.map((option)=> {
    if (option.value === activeOption.value) {
      return null;
    }
    return (
     <div key={option.value} className="item" onClick={()=> {setActiveOption(option)}}>
      {option.label}
     </div>
    )
  })
  return (
    <div ref = {ref} className="ui form">
      <div className="ui field">
       <label className="label"> {label} </label>
       <div onClick={()=>{setDropOpen(!dropOpen)}} className= {`ui selection dropdown ${dropOpen ? 'active' : ''}`}>
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