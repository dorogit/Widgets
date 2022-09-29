import axios from "axios";
import React, { useEffect, useState } from "react";

//API key:
//AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM

const Convert = ({language, text}) => {
  const [translated,setTranslated] = useState('')

  useEffect(()=> {
    const Translation = async () => {
      const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
        params: {
          q: text,
          target: language.value,
          key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
        }
      })
      setTranslated(data.data.translations[0].translatedText)
    }
    Translation()
  },[language,text])

  return (
    <div>
      {translated}
    </div>
  )
}

export default Convert