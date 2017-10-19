import React, { Component } from 'react';
import './App.css';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';
import SideBar from './SideBar';
import firebase from 'firebase';

let config = {
	apiKey: "AIzaSyDAnRNaE2A61TW0Wmue1ohQuH_HOpskUUo",
	authDomain: "ryu-todo.firebaseapp.com",
	databaseURL: "https://ryu-todo.firebaseio.com",
	projectId: "ryu-todo",
	storageBucket: "ryu-todo.appspot.com",
	messagingSenderId: "1068128281504"
};
firebase.initializeApp(config);

class App extends Component {
	constructor(props) {
    	super(props);
    	this.state = { 
    		items: [],
        categories: []
    	};
  	}

  	loadData() {
        let ref = new firebase.database().ref('tasks/');
        ref.on('value', function(snapshot) {
            const items = [];
            //var sorted = [];

            snapshot.forEach(function(itemSnap) {
                const item = itemSnap.val();
                item.key = itemSnap.key;
                item.id = itemSnap.key;
                items.push(item);
            });

            this.setState({
                items: items
            });
        }.bind(this));

        let categories = new firebase.database().ref('categories/').orderByChild('datestamp');
        categories.on('value', function(snapshot) {
            const categories = [];
            //var sorted = [];

            snapshot.forEach(function(itemSnap) {
                const item = itemSnap.val();
                item.key = itemSnap.key;
                item.id = itemSnap.key;
                categories.push(item);
            });

            this.setState({
                categories: categories
            });
        }.bind(this));
    }

    componentDidMount() {
        this.loadData();
    }

  	formSubmit = (newItem) => {
      let ref = new firebase.database().ref('tasks/');
      ref.push(newItem);
  	}

    deleteItem = (item) => {
      let ref = new firebase.database().ref('tasks/').child(item.props.id);
      ref.remove();
    }

    editItem = (updatedItem) => {
      let ref = new firebase.database().ref('tasks/').child(updatedItem.id);
      ref.update(updatedItem);
    }

    checkStatus = (this_el) => {
      let newCheckVal = !this_el.props.isChecked;
      const item = {
        id: this_el.props.id,
        key: this_el.props.id,
        title: this_el.props.title,
        //description: this_el.props.description,
        isChecked: newCheckVal,
        isEditing: false
      }
      let ref = new firebase.database().ref('tasks/').child(item.id);
      ref.update(item);
    }

    addMainCategory = (newMainCategory) => {
      let ref = new firebase.database().ref('categories/');
      ref.push(newMainCategory);
    }

    sendDeleteCategory = (item) => {
      let ref = new firebase.database().ref('categories/').child(item.props.id);
      ref.remove();
    }

    editCategoryItem = (updatedItem) => {
      let ref = new firebase.database().ref('categories/').child(updatedItem.id);
      ref.update(updatedItem);
    }

  	render() {
    	return (
      		<div className="App">
            <SideBar 
              categories={this.state.categories} 
              addMainCategory={this.addMainCategory} 
              sendDeleteCategory={this.sendDeleteCategory}
              editCategoryItem={this.editCategoryItem}
            />
        		<div className="main-container">
        			<ToDoForm formSubmit={this.formSubmit}/>
        			<ToDoList items={this.state.items} deleteItem={this.deleteItem} checkStatus={this.checkStatus} editItem={this.editItem}/>
        		</div>	
      		</div>
    	);
  	}
}

export default App;