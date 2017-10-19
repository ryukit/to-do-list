import React, { Component } from 'react';

class CategoryItem extends Component {
	constructor(props) {
    	super(props);
    	this.state = {
    		item: {
    			id: this.props.id,
	        	key: this.props.id,
	    		title: this.props.title,
	    		datestamp: this.props.datestamp
    		},
    		isEditing: false
    	}
	    this.deleteCategory = this.deleteCategory.bind(this);
  		this.editCategoryItemTitle = this.editCategoryItemTitle.bind(this);
  		this.sendCategoryNewTitle = this.sendCategoryNewTitle.bind(this);
  		this.openCategoryEditField = this.openCategoryEditField.bind(this);
  	}

  	editCategoryItemTitle(e) {
   		e.preventDefault();
		this.setState({item: {
			id: this.props.id,
        	key: this.props.id,
    		title: e.target.value,
    		datestamp: this.props.datestamp
		}});
		console.log(this.state)
		debugger;
  	}

  	sendCategoryNewTitle(e) {
  		e.preventDefault();
  		let updatedItem = this.state.item;
		this.props.editCategoryItem(updatedItem);
		this.setState({isEditing: false});
  	}

  	openCategoryEditField(e) {
		e.preventDefault();
		let openVal = !this.state.isEditing;
		this.setState({ isEditing: openVal });
	}

	deleteCategory(e) {
		e.preventDefault();
		this.props.sendDeleteCategory(this);
	}	

    render() {
    	const itemEdit = this.state.isEditing;
    	let renderMe = '';
		if (!itemEdit) {
			renderMe = (<div>{this.props.title}</div>)
		} else {
			renderMe = (
				<div>
					<form onSubmit={this.sendCategoryNewTitle}>
						<div className="input-field">
			            	<input id={this.props.id} type="text" value={this.state.item.title} onChange={this.editCategoryItemTitle} />
				          	<label className="active" htmlFor={this.props.id}>Edit Title</label>
				        </div>
					</form>
				</div>
			)
		}
    	return (
            <div className="row">
                <div className="col s12">
                   <div className="categoryItem">
               			<div className="categoryItem-title">{renderMe}</div>
               			<div className="categoryItem-edit" onClick={this.openCategoryEditField}>
               				<i className="material-icons">edit</i>
               			</div>
               			<div className="categoryItem-newSub">
               				<i className="material-icons">add</i>
               			</div>
               			<div className="categoryItem-delete" onClick={this.deleteCategory}>
               				<i className="material-icons">delete</i>
               			</div>
                   </div>
                </div>
            </div>
        );
    }
}

export default CategoryItem;
