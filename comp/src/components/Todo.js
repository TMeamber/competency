import React, { Component } from 'react';
import {connect} from 'react-redux';
import{createTodo} from '../ducks/todoReducer'


// COMP 36D, 36D, 36E, 36F, 38G 36I 36J 37C

class Todo extends Component {
    constructor(props) {
      super(props)
  
      this.state = {
        text: ''
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e){
      this.setState({
        text: e.target.value
      })
    }
    
    handleClick(){
      createTodo(this.state.text)
      this.setState({
        text:''
      })
    }

    render() {
      var todos = this.props.todos.map((todo, i) => {
        return <p key={i}>{todo}</p>
      })
      return (
        <div>
          <h1>To Do List</h1>
          <input value = {this.state.text}
          onChange={this.handleChange} 
          placeholder= 'Add here...' />
          <button onClick={this.handleClick}
          type='' 
          className=''>ADD</button>
          {todos}
        </div>
      );
    }
  }

  function mapStateToProps(state){
    return{
      todos: state.todos
    }
  }


  export default connect(mapStateToProps, {createTodo})(Todo);