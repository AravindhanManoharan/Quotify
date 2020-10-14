import React, { Component, useEffect, useState } from 'react'
import QuoteCard from '../common-component/quote_card'
import Axios from 'axios'

function RandomQuote(props){

    const [quote,setQuote]=useState([])

    useEffect(()=>{
       Axios.get('https://thesimpsonsquoteapi.glitch.me/quotes')
       .then(response =>
        {
            setQuote(response.data)
          
        }
           
       ) 
       .catch((err) => console.log(err))
    },[])

  const  handleClick=()=>{
        Axios.get('https://thesimpsonsquoteapi.glitch.me/quotes')
        .then(response =>
         {
             setQuote(response.data)
           
         }
            
        ) 
        .catch((err) => console.log(err))
 
    }

//     const  handleClick=()=>{
        
//    }
    return(
       
        <div>

            {quote.length>0 &&
           <QuoteCard quote={quote[0].quote } author={quote[0].character}></QuoteCard>
            }
            <button onClick={handleClick}>Get Another Quote</button>
        </div>
    )
}


export default RandomQuote