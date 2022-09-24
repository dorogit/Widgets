import axios from "axios";
import React, { useEffect, useState } from "react";
import wikiResult from "../API/wikipedia";

const Search = () => {
  const [searchTerm,setSearchTerm] = useState('hello')
  const [responseSummary,setResponseSummary] = useState([]) 
  console.log(responseSummary)
  useEffect(()=> {
    const search = async () => {
      const response = await axios.get('https://en.wikipedia.org/w/api.php',{
        params:{
          action:'query',
          list: 'search',
          origin: '*',
          format:'json',
          srsearch: searchTerm
        }
      })
      setResponseSummary(response.data.query.search)
    }
    if (searchTerm) {
      search()
    }
  },[searchTerm])

  const renderedList = responseSummary.map((response) => {
    return (
      <div>
        {response.snippet}
      </div>
    )
  })

  return (
    <div>
      <div className="ui form">
        <label className="field">
          Enter search term
        </label>
        <input value = {searchTerm} className="input" onChange={(entered) =>setSearchTerm(entered.target.value)}/>
        {renderedList}
      </div>
    </div>
  )
}

export default Search;