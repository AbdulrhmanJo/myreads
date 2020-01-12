import React, { Component } from 'react';
import Navigation from './Navigation';
import Content from './Content'


import '../styles/App.scss';

class App extends Component {
  render(){
    return (
      <main className="container">
        <Navigation />
        <Content />
      </main>
    );
  }
  
}

export default App;
