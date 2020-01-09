import React, { Component } from 'react';
import Navigation from './Navigation';
import Content from './Content'


import '../styles/App.scss';

class App extends Component {
  constructor(props){
    super(props);
  }

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
