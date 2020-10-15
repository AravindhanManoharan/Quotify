import React from 'react';
import logo from './logo.svg';
import './App.css';
import QuotifyHome from './home/quotify_home'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import QuoteCard from '../src/common-component/quote_card'
import RandomQuote from '../src/random/randomQuote'
import AllLocalQuotes from '../src/allLocalQuotes/allLocalQuotes'
import LocalQuote from './local/localQuote';
import AddQuote from '../src/addQuote/addQuote'


function App() {
  return (
    <div>
    

    <Router>
    <QuotifyHome></QuotifyHome>
    <div>
      <Container>
        <div class='containers'>
          
          <Route path='/randomQuote' component={RandomQuote} exact={true}/>
          <Route path='/allLocalQuotes' component={AllLocalQuotes} exact={true}/>
          <Route path='/localQuote' component={LocalQuote} exact={true}/>
          <Route path='/addQuote' component={AddQuote} exact={true}></Route>
        </div>
      </Container>
    </div>
    </Router>
    </div>


  );
}

export default App;
