import React, { Component } from 'react';
import shortid from 'shortid';

class MainCategoryForm extends Component {
    constructor(props) {
    	super(props);
    	this.state = {
    		title: ''
    	};
    	this.mainCategoryFieldChange = this.mainCategoryFieldChange.bind(this);
	    this.submitMainCategory = this.submitMainCategory.bind(this);
  	}

	mainCategoryFieldChange(e) {
	    this.setState({ title: e.target.value });
	}

	submitMainCategory(e) {
	    e.preventDefault();
	    if (!this.state.title.length) {
	      return;
	    }
	    const datestamp = Date.now();
	    const generatedId = shortid.generate();
	    const newMainCategory = {
	      title: this.state.title,
	      id: generatedId,
	      key: generatedId,
	      datestamp: datestamp
	    };
	    this.setState({
	    	title: ''
	    })
	    this.props.addMainCategory(newMainCategory);
	}

    render() {
        return (
        	<form onSubmit={this.submitMainCategory}>
	            <div className="categoryForm">
	        		<div className="categoryForm-input">
	        			<div className="input-field">
			            	<input id="add_main_category" type="text" onChange={this.mainCategoryFieldChange} value={this.state.title} />
				          	<label htmlFor="add_main_category">Enter Task</label>
				        </div>
	        		</div>
	        		<div className="categoryForm-submit">
	    				<button type="submit">
    						<i className="material-icons">add</i>
	    				</button>
	        		</div>
	            </div>
            </form>
        );
    }
}

export default MainCategoryForm;
