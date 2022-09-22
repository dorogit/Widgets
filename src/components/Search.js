import React, { useEffect, useState } from "react";
import wikiResult from "../API/wikipedia";

const Search = () => {
  const [searchTerm,setSearchTerm] = useState(null)

  useEffect(()=> {
    console.log('epic')
  }, [searchTerm])

  return (
    <div>
      <div className="ui form">
        <label className="field">
          Enter search term
        </label>
        <input value = {searchTerm} className="input" onChange={(entered) =>setSearchTerm(entered.target.value)}/>
      </div>
    </div>
  )
}

export default Search;