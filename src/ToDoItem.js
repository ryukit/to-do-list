import React, { Component } from 'react';

class ToDoItem extends Component {
	constructor(props) {
    	super(props);
    	this.state = {
    		item: {
    			id: this.props.id,
	        	key: this.props.id,
	    		title: this.props.title,
	    		isChecked: this.props.isChecked
    		},
    		isEditing: false
    	}
	    this.itemRemove = this.itemRemove.bind(this);
	    this.changeCheckStatus = this.changeCheckStatus.bind(this);
  		this.editItemTitle = this.editItemTitle.bind(this);
  		this.sendNewTitle = this.sendNewTitle.bind(this);
  		this.openEditField = this.openEditField.bind(this);
  	}

  	editItemTitle(e) {
   		e.preventDefault();
		this.setState({item: {
			id: this.props.id,
        	key: this.props.id,
    		title: e.target.value,
    		isChecked: this.props.isChecked
		}});
  	}

  	sendNewTitle(e) {
  		e.preventDefault();
  		let updatedItem = this.state.item;
		this.props.editItem(updatedItem);
		this.setState({isEditing: false});
  	}

	itemRemove(e) {
		e.preventDefault();
		this.props.deleteItem(this);
	}	

	changeCheckStatus(e) {
		e.preventDefault();
		this.props.checkStatus(this);
	}

	openEditField(e) {
		e.preventDefault();
		let openVal = !this.state.isEditing;
		this.setState({ isEditing: openVal });
	}

    render() {
    	const itemCheckStatus = this.props.isChecked;
    	const itemEdit = this.state.isEditing;
    	let checkIconText = '';
    	let badgeText = '';
    	let badgeStyles = '';
    	if (itemCheckStatus) {
    		checkIconText = 'check_box';
    		badgeText = 'done';
    		badgeStyles = 'new badge blue';
    	} else {
    		checkIconText = 'check_box_outline_blank';
    		badgeText = 'new';
    		badgeStyles = 'new badge red';
    	}
    	let renderMe = '';
		if (!itemEdit) {
			renderMe = (<div>{this.props.title}</div>)
		} else {
			renderMe = (
				<div>
					<form onSubmit={this.sendNewTitle}>
						<div className="input-field">
			            	<input id={this.props.id} type="text" value={this.state.item.title} onChange={this.editItemTitle} />
				          	<label className="active" htmlFor={this.props.id}>Edit Title</label>
				        </div>
					</form>
				</div>
			)
		}
        return (
    		<tr className="left-align mainList-item">
    			<td>
					<div className="mainList-item-inner">
						{renderMe}
					</div>
				</td>
				<td>
					<ul className="mainList-item-functional">
						<li>
							<button className="btn-floating waves-effect waves-light green mainList-item-functional" onClick={this.openEditField}>
								<i className="material-icons">edit</i> 
							</button>
						</li>
						<li>
							<button className="btn-floating waves-effect waves-light blue mainList-item-functional" onClick={this.changeCheckStatus}>
								<i className="material-icons">{checkIconText}</i> 
							</button>
						</li>
						<li>
							<button className="btn-floating waves-effect waves-light red mainList-item-functional" onClick={this.itemRemove}>
								<i className="material-icons">delete</i>
							</button>
						</li>
					</ul>
				</td>
				<td>
					<span className={badgeStyles} data-badge-caption={badgeText}></span>
				</td>
            </tr>
        );
    }
}

export default ToDoItem;
