import React, { Component } from 'react';
import shortid from 'shortid';

class CategoryItem extends Component {
	constructor(props) {
    	super(props);
    	this.state = {
    		item: {
    			id: this.props.id,
	        	key: this.props.id,
	    		title: this.props.title,
	    		datestamp: this.props.datestamp,
	    		parentId: this.props.parentId,
	    		childId: this.props.childId
    		},
    		isEditing: false,
    		isAddingSubCategory: false,
    		subItemTitle: ''
    	}
	    this.deleteCategory = this.deleteCategory.bind(this);
  		this.editCategoryItemTitle = this.editCategoryItemTitle.bind(this);
  		this.sendCategoryNewTitle = this.sendCategoryNewTitle.bind(this);
  		this.openCategoryEditField = this.openCategoryEditField.bind(this);
  		this.openInputNewSubCategory = this.openInputNewSubCategory.bind(this);
  		this.changeSubCategoryItemTitle = this.changeSubCategoryItemTitle.bind(this);
  		this.submitSubCategoryItem = this.submitSubCategoryItem.bind(this);
  		this.setCategoryState = this.setCategoryState.bind(this);
  	}

  	editCategoryItemTitle(e) {
   		e.preventDefault();
		this.setState({item: {
			id: this.props.id,
        	key: this.props.id,
    		title: e.target.value,
    		datestamp: this.props.datestamp,
    		parentId: this.props.parentId,
    		childId: this.props.childId
		}});
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

	openInputNewSubCategory(e) {
		e.preventDefault();
		let openAddNewCategory;
		openAddNewCategory = !this.state.isAddingSubCategory;;
		this.setState({ isAddingSubCategory: openAddNewCategory });
	}

	changeSubCategoryItemTitle(e) {
		e.preventDefault();
		this.setState({ subItemTitle: e.target.value})
	}

	submitSubCategoryItem(e) {
		e.preventDefault();
		if (!this.state.subItemTitle.length) {
	      return;
	    }
	    const datestamp = Date.now();
	    const generatedId = shortid.generate();
		const newSubCategoryItem = {
			id: generatedId,
        	key: datestamp,
    		title: this.state.subItemTitle,
    		datestamp: datestamp,
    		parentId: this.props.id,
    		childId: this.props.childId
		}
		const parentCategoryItem = {
			id: this.props.id,
        	key: this.props.datestamp,
    		title: this.props.title,
    		datestamp: this.props.datestamp,
    		parentId: this.props.parentId,
    		childId: ( this.props.childId + ',' + generatedId ).replace('null,','')
		}
		this.setState({
	    	subItemTitle: ''
	    })
	    this.setState({isAddingSubCategory: false});
	    console.log(parentCategoryItem);
	    debugger;
	    this.props.createSubCategoryItem(newSubCategoryItem, parentCategoryItem);
	}

	setCategoryState(e) {
		let newState = this.props.id;
		this.props.changeCategoryState(newState);
	}

    render() {
    	const itemEdit = this.state.isEditing;
    	let renderCategoryTitle = '';
		if (!itemEdit) {
			renderCategoryTitle = (<div>{this.props.title}</div>)
		} else {
			renderCategoryTitle = (
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
		const addSubCategory = this.state.isAddingSubCategory;
		let renderAddSubCategory = '';
		if (addSubCategory) {
			renderAddSubCategory = (
				<div>
					<form onSubmit={this.submitSubCategoryItem}>
						<div className="input-field">
			            	<input id={this.props.id} type="text" value={this.state.subItemTitle} onChange={this.changeSubCategoryItemTitle} />
				          	<label htmlFor={this.props.id}>Add New Sub Item</label>
				        </div>
					</form>
				</div>
			)
		}
		// const itemParent = this.props.parentId;
		// let renderSubCategory = '';
		// if(itemParent.length &&  itemParent !== 'null') {
		// 	//renderSubCategory = 'has parent'
		// 	//itemRender = 
		// 	let thisItem = document.getElementById(this.props.id);
		// 	let parentElement = document.getElementById(itemParent);
		// 	//parentElement.appendChild(thisItem)
		// 	console.log('has parent', itemParent);
		// 	console.log(parentElement);
		// 	console.log(this);
		// 	debugger;
		// }
		let itemRender = (
			<div className="row">
                <div className="col s12" id={this.props.id}>
                   <div className="categoryItem">
               			<div className="categoryItem-title" onClick={this.setCategoryState}>{renderCategoryTitle}</div>
               			<div className="categoryItem-edit" onClick={this.openCategoryEditField}>
               				<i className="material-icons">edit</i>
               			</div>
               			<div className="categoryItem-newSub" onClick={this.openInputNewSubCategory}>
               				<i className="material-icons">add</i>
               			</div>
               			<div className="categoryItem-delete" onClick={this.deleteCategory}>
               				<i className="material-icons">delete</i>
               			</div>
                   </div>
                   {renderAddSubCategory}
                   
                </div>
            </div>
		)

		//if ( )

    	return (
    		<div>
            	{itemRender}
    		</div>
        );
    }
}

export default CategoryItem;
