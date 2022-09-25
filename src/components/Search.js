import axios from "axios";
import React, { useEffect, useState } from "react";
import wikiResult from "../API/wikipedia";

const Search = () => {
  const [searchTerm,setSearchTerm] = useState('hello')
  const [debouncedTerm, setdebouncedTerm] = useState(null)
  const [responseSummary,setResponseSummary] = useState([]) 
  useEffect(()=> {
    const debouncedTimeout = setTimeout(() => {
      if (searchTerm) {
        search()
      }
    }, 1000);

    return (()=> {
      clearTimeout(debouncedTimeout)
    })
  },[debouncedTerm])

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
      console.log(response)
    }
    if (searchTerm && !search.response) {
      search()
    }
    const searchTimeout = setTimeout(()=>{
      search()
    },500)
    return(()=> {
      clearTimeout(searchTimeout)
    })
  },[searchTerm])

  const renderedList = responseSummary.map((response) => {
    return (
      <div className="item" key={response.pageid}>
        <div className="right floated content">
          <a className="ui button" href={`https://en.wikipedia.org?curid=${response.pageid}/`}>
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">
            {response.title}
          </div>
          <span dangerouslySetInnerHTML={{__html: response.snippet}} />
        </div>
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
        <div className="ui celled list">
          {renderedList}
        </div>
      </div>
    </div>
  )
}

export default Search;