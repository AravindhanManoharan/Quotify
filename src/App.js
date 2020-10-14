import React from 'react';
import logo from './logo.svg';
import './App.css';
import QuotifyHome from './home/quotify_home'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import QuoteCard from '../src/common-component/quote_card'
import RandomQuote from '../src/random/randomQuote'
import LocalQuote from './local/localQuote';


function App() {
  return (
    <div>
    

    <Router>
    <QuotifyHome></QuotifyHome>
    <div>
      <Container>
        <div class='containers'>
          
          <Route path='/randomQuote' component={RandomQuote} exact={true}/>
          <Route path='/localQuote' component={LocalQuote} exact={true}/>
        </div>
      </Container>
    </div>
    </Router>
    </div>


  );
}

export default App;
