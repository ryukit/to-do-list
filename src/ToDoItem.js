import React, { Component } from 'react';

class ToDoItem extends Component {
    render() {
        return (
    		<div className="collection-item left-align mainList-item" key={this.props.id}>
        		{this.props.text}
        		<span className="new badge"></span>
            </div>
        );
    }
}

export default ToDoItem;
