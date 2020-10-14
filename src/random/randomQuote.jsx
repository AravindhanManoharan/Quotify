import React from 'react';

function randomQuote(props){
    return(
        <div>
            handleClick=()=>{
                 Axios.get('https://jsonplaceholder.typicode.com/users')
                 .then(response =>
                     response.data
                 ) 
                 .catch((err) => console.log(err))
            }
        </div>
    )
}


export default randomQuote