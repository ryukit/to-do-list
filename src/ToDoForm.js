import React, { Component } from 'react';

class ToDoForm extends Component {
	constructor(props) {
    	super(props);
    	this.state = {
    		title: ''
    	};
    	this.toDoChange = this.toDoChange.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
  	}

	toDoChange(e) {
	    this.setState({ title: e.target.value });
	}

	handleSubmit(e) {
	    e.preventDefault();
	    if (!this.state.title.length) {
	      return;
	    }
	    const newItem = {
	      title: this.state.title,
	      isChecked: false
	    };
	    this.setState({
	    	title: ''
	    })
	    this.props.formSubmit(newItem);
	}

    render() {
        return (
        	<form onSubmit={this.handleSubmit}>
	            <div className="row mainForm">
	        		<div className="col s10">
	        			<div className="input-field">
			            	<input id="first_name" type="text" onChange={this.toDoChange} value={this.state.title} />
				          	<label htmlFor="first_name">Enter Task</label>
				        </div>
	        		</div>
	        		<div className="col s2 mainForm-submit">
	    				<button className="btn waves-effect waves-light" type="submit" name="action">Submit</button>
	        		</div>
	            </div>
            </form>
        );
    }
}

export default ToDoForm;
