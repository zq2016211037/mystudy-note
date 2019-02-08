import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import AddTodo from './container/AddTodo';
import VisibleToDoList from './container/VisibleToDoList';
import Footer from './container/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
         <div className="btn-group" role="group" aria-label="...">
            <h1>{this.props.value}</h1>
            <button type="button" onClick={this.props.onIncrement} className="btn btn-primary">Left</button>
            <button type="button" onClick={this.props.onDecrement} className="btn btn-danger">Right</button>
          </div>
          <AddTodo/>
          <VisibleToDoList/>
          <Footer/>
      </div>
    );
  }
}

App.propTypes = {
  value:PropTypes.number.isRequired,
  onIncrement:PropTypes.func.isRequired,
  onDecrement:PropTypes.func.isRequired
}
export default App;
