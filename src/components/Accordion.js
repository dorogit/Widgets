import React, { useState } from "react";

const Accordion = ({items}) => {
  const [activeIndexState, setActiveIndexState] = useState(null)
  const titleClicked = (index) => {
    setActiveIndexState(index)
  }
    const renderedItems = items.map((item,index) => {
      const active = index === activeIndexState ? 'active' : ''
      return(
        <div key = {item.title}>
          <div className= {`title ${active}`} onClick={()=>titleClicked(index)}>
            <i className="dropdown icon"/>
            {item.title}
          </div>
          <div className={`content ${active}`}>
            <p>
              {item.content}
            </p>
          </div>
        </div>
      )
    })

    return(
      <div className="ui styled accordion">
        {renderedItems}
      </div>
    )
}

export default Accordion;