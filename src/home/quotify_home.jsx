import React from 'react';
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function QuotifyHome(props) {
    return (
        <div class='container' align='center' style={{ display: "flex" }}>
            <Container>
                <h1 align='center'>Quotify</h1>
                {/* <button type="button" class="btn btn-primary btn-lg"></button> */}

                <Link to={'/randomQuote'}><button type="button" class="btn btn-outline-primary btn-lg mr-3" >Random Quote</button></Link>
                <Link to={'/localQuote'}><button type="button" class="btn btn-outline-warning btn-lg mr-3">Random Quote(Local)</button></Link>
                <Link to={'/addQuote'}><button type="button" class="btn btn-outline-success btn-lg mr-3">Add Quote</button></Link>
                <Link to={'/allLocalQuotes'}> <button type="button" class="btn btn-outline-info btn-lg mr-3">List All Quotes(Local)</button></Link>
                <hr></hr><br />
            </Container>

        </div>
    )
}

export default QuotifyHome;