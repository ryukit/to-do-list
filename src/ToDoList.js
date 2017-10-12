import React, { Component } from 'react';
import ToDoItem from './ToDoItem';

class ToDoList extends Component {
    render() {
    	const toDoItem = this.props.items.map(item => (
			<ToDoItem 
				key={item.id}
        		text={item.text}
			/>
        ))
        console.log(this.props.items.length > 0)
        if(this.props.items.length > 0){
            return (
                <div className="collection mainList">
                    {toDoItem}
                </div>
            );
        }
        return null;
    }
}

export default ToDoList;
