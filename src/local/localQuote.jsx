import React, { Component, useEffect, useState } from 'react'
import QuoteCard from '../common-component/quote_card'
import Axios from 'axios'

function LocalQuote() {
    const [quote, setQuote] = useState([])

    useEffect(() => {
        setQuote(JSON.parse(localStorage.getItem('quote')))
    }, [])

    const handleClick = () => {
        setQuote(JSON.parse(localStorage.getItem('quote')));
    }

    let ind = Math.floor((quote.length ) * Math.random())
    
    return (
        <div>
            {quote.length > 0 &&
                <p>
                    <QuoteCard color='warning' quote={quote[ind].quote}
                        author={quote[ind].character} >
                    </QuoteCard>
                </p>
            }
            <button onClick={handleClick}>Get Another Local Quote</button>
        </div>
    )
}
export default LocalQuote