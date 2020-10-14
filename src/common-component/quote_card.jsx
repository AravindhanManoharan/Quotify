import React from 'react'
import { Card } from 'react-bootstrap'

function QuoteCard(props) {

    return (
        <div>
            <Card>
                <Card.Header>Quote</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <p>
                            {' '}
                            {/* to display the random generated quote use props.<quoteVariable> inside {} */}
                            {'RANDOM QUOTE FETCHED FROM API'}
                            {' '}
                        </p>
                        <footer className="blockquote-footer">
                            {/* to display author of the quote displayed use props.<authorName> inside {} */}
                            By <cite title="Source Title">{'Author Name'}</cite>
                        </footer>
                    </blockquote>
                </Card.Body>
            </Card>
        </div>

    )
}

export default QuoteCard
