import React, { Component } from 'react';

class ToDoItem extends Component {
	constructor(props) {
    	super(props);
	    this.itemRemove = this.itemRemove.bind(this);
	    this.changeCheckStatus = this.changeCheckStatus.bind(this);
  	}

	itemRemove(e) {
		e.preventDefault();
		this.props.deleteItem(this);
	}	

	changeCheckStatus(e) {
		e.preventDefault();
		this.props.checkStatus(this);
	}
    render() {
    	const itemCheckStatus = this.props.isChecked;
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
        return (
    		<tr className="left-align mainList-item">
    			<td>
					<div>{this.props.title}</div>
				</td>
				<td>
					<ul className="mainList-item-functional">
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
