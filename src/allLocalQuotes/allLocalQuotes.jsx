import React, { Component, useEffect, useState } from 'react'
import QuoteCard from '../common-component/quote_card'
import Axios from 'axios'


function AllLocalQuotes(props){
 
    const [localquotes,setlocalquotes]=useState([])


    useEffect(()=>{
      
      setlocalquotes(JSON.parse(localStorage.getItem('quote')))
    },[])

    const handleDelete=(i)=>{
      console.log('index',i)
      setlocalquotes(localquotes.filter((ele,index)=>index!=i)) 
      console.log('filter',localquotes)
      
    }

    useEffect(()=>{
      
      localStorage.setItem('quote',JSON.stringify(localquotes))
    },[localquotes])
    
    
    return(
        
        <div>
              {console.log('alllocalquotes',localquotes)}
              {localquotes.length>0 && localquotes.map((ele,index) => (<>
           <QuoteCard quote={ele.quote} author={ele.character}></QuoteCard> 
           <button >Edit</button><button onClick={()=>handleDelete(index)}>Delete</button>
               </>     
           ))}
           
           
        </div>
    )
}


export default AllLocalQuotes