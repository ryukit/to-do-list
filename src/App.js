import React, { Component } from 'react';
import './App.css';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

class App extends Component {
	constructor(props) {
    	super(props);
    	this.state = { 
    		items: [], 
    		text: ''
    	};
    	this.handleChange = this.handleChange.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
  	}

	handleChange(e) {
	    this.setState({ text: e.target.value });
	}

	handleSubmit(e) {
	    e.preventDefault();
	    if (!this.state.text.length) {
	      return;
	    }
	    const newItem = {
	      text: this.state.text,
	      id: Date.now()
	    };
	    this.setState((prevState) => ({
	      items: prevState.items.concat(newItem),
	      text: ''
	    }));
	}

  	render() {
    	return (
      		<div className="App">
        		<div className="container">
        			<ToDoForm text={this.state.text} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        			<ToDoList items={this.state.items}/>
        		</div>	
      		</div>
    	);
  	}
}

export default App;
