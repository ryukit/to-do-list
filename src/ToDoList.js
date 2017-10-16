import React, { Component } from 'react';
import ToDoItem from './ToDoItem';

class ToDoList extends Component {
    render() {
    	const toDoItem = this.props.items.map(item => (
			<ToDoItem 
				id={item.id}
                key={item.id}
                title={item.title}
        		//description={item.description}
                deleteItem={this.props.deleteItem}
                checkStatus={this.props.checkStatus}
                isChecked={item.isChecked}
			/>
        ))
        if(this.props.items.length > 0){
            return (
                <table className="striped bordered mainList">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th width="100">Action</th>
                            <th width="70">label</th>
                        </tr>  
                    </thead>
                    <tbody>
                        {toDoItem}
                    </tbody>
                </table>
            );
        }
        return null;
    }
}

export default ToDoList;
