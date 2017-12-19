import React, { Component } from 'react';
import './App.css';
import Todo from './components/Todo';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Todo 
          BobRoss = {52}
          TimAllen = {'living'}
        />
      </div>
    );
  }
}

export default App;
