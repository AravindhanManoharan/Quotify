import React from 'react';
import logo from './logo.svg';
import './App.css';
import QuotifyHome from './home/quotify_home'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <Container>
        <div class='containers'>
          <QuotifyHome></QuotifyHome>
        </div>
      </Container>
    </div>


  );
}

export default App;
