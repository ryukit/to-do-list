import React, { Component } from 'react';

class ToDoForm extends Component {
    render() {
        return (
        	<form onSubmit={this.props.handleSubmit}>
	            <div className="row mainForm">
	        		<div className="col s10">
	        			<div className="input-field">
			            	<input id="first_name" type="text" onChange={this.props.handleChange} value={this.props.text} />
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
