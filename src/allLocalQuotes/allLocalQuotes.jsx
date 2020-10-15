import React, { Component, useEffect, useState } from 'react'
import QuoteCard from '../common-component/quote_card'
import Axios from 'axios'


function AllLocalQuotes(props){
 
    const [localquotes,setlocalquotes]=useState([])


    useEffect(()=>{

      setlocalquotes(JSON.parse(localStorage.getItem('quote')))
    },[])

    
    
    return(
        
        <div>
              {console.log('alllocalquotes',localquotes)}
              {localquotes.map((ele) => (
           <QuoteCard quote={ele.quote} author={ele.character}></QuoteCard>
           
           ))}
           
           
        </div>
    )
}


export default AllLocalQuotes