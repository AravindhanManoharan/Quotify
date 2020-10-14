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

    const handleLocalStorage=()=>{
        let temp=JSON.parse(localStorage.getItem('quote'))
        console.log('temp',temp)
        if(temp){
            
            console.log('temp',temp)
            let a=quote[0]
            temp.push(a)
            localStorage.setItem('quote',JSON.stringify(temp))

        }else{
            let b=[]
            b.push(quote[0])
            localStorage.setItem('quote',JSON.stringify(b))
            
        }
    //    localStorage.setItem('quote',quote[0].quote)
    //    localStorage.setItem('author',quote[0].character)
    }

//     const  handleClick=()=>{
        
//    }
    return(
       
        <div>

            {quote.length>0 &&
           <QuoteCard quote={quote[0].quote } author={quote[0].character}></QuoteCard>
            }
            <button onClick={handleClick}>Get Another Quote</button>
            <button onClick={handleLocalStorage}>Save</button>
        </div>
    )
}


export default RandomQuote