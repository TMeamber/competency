import React, { Component } from 'react';
import './App.css';
import Todo from './components/Todo';
import Func from './components/Func'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Todo 
          BobRoss = {52}
          TimAllen = {'living'}
        />
        <Func/>
      </div>
    );
  }
}

export default App;
