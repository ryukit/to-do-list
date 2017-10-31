import React, { Component } from 'react';
import ToDoItem from './ToDoItem';

class ToDoList extends Component {

    render() {
        let currentCategoryState = this.props.listCategory;
        let deleteItem=this.props.deleteItem;
        let checkStatus=this.props.checkStatus;
        let editItem=this.props.editItem;

        const toDoItem = this.props.items.map(function(item) { 
            if (currentCategoryState === item.parentCategory) {
                return ( <ToDoItem 
                    id={item.id}
                    key={item.id}
                    title={item.title}
                    parentCategory={item.parentCategory}
                    //description={item.description}
                    deleteItem={deleteItem}
                    checkStatus={checkStatus}
                    editItem={editItem}
                    isChecked={item.isChecked}
                /> )
            } else if ( currentCategoryState === 'none' ) {
                return ( <ToDoItem 
                    id={item.id}
                    key={item.id}
                    title={item.title}
                    parentCategory={item.parentCategory}
                    //description={item.description}
                    deleteItem={deleteItem}
                    checkStatus={checkStatus}
                    editItem={editItem}
                    isChecked={item.isChecked}
                /> )
            }
        });
        if(this.props.items.length > 0){
            return (
                <div className="row">
                    <div className="col s12">
                        <table className="striped bordered mainList">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th width="140">Action</th>
                                    <th width="70">label</th>
                                </tr>  
                            </thead>
                            <tbody>
                                {toDoItem}
                            </tbody>
                        </table>
                    </div>
                </div>
            );
        }
        return null;
    }
}

export default ToDoList;
