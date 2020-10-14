import React, { Component, useEffect, useState } from 'react'
import QuoteCard from '../common-component/quote_card'
import Axios from 'axios'

function LocalQuote() {
    const [quote, setQuote] = useState([])
    const [author, setAuthor] = useState([])

    const handleClick = () => {
     setQuote(localStorage.getItem('quote'))   ;
     setAuthor(localStorage.getItem('author'))  ;

    }

    return (
        <div>
            
            
            {quote.length >0 && 
            <div>
            <QuoteCard quote={quote} author={author}></QuoteCard>
            
            </div>
           }
           <button onClick={handleClick}>Get Another Local Quote</button>
            
        </div>
    )
}

export default LocalQuote