import React from 'react'
import { useState } from 'react'

function AddQuote(props) {

    const [quote, setQuote] = useState('')
    const [character, setCharacter] = useState('')

    let handleChange = (e) => {
        let propsName = e.target.name
        let value = e.target.value
        propsName === 'quote' ? setQuote(value) : setCharacter(value)
    }
    const handleSubmit = () => {
        let tempQuoteObject = {
            quote: quote,
            character: character
        }
        let localQuotes = []
        localQuotes = JSON.parse(localStorage.getItem('quote'))

        if (localQuotes) {
            localQuotes.push(tempQuoteObject)
            localStorage.setItem('quote', JSON.stringify(localQuotes))
        }
        else {
            let templocalQuotes = []
            templocalQuotes.push(tempQuoteObject)
            localStorage.setItem('quote', JSON.stringify(templocalQuotes))
        }

    }

    return (
        <div>
            <form onSubmit={() => handleSubmit()} autocomplete="off" >
                <textarea rows="4" cols="50" name='quote' value={quote} placeholder='Enter your Quote here' onChange={(e) => handleChange(e)}></textarea>
                <br /><br />
                <input type='text' name='character' value={character} placeholder='Enter your Name' onChange={(e) => handleChange(e)}></input>
                <br /><br />
                <input type='submit'></input>
            </form>
        </div>
    )

}

export default AddQuote