import React, { Component } from 'react';
import './App.css';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';
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
    		items: []
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

    checkStatus = (this_el) => {
      let newCheckVal = !this_el.props.isChecked;
      const item = {
        id: this_el.props.id,
        key: this_el.props.id,
        title: this_el.props.title,
        //description: this_el.props.description,
        isChecked: newCheckVal
      }
      let ref = new firebase.database().ref('tasks/').child(item.id);
      ref.update(item);
    }

  	render() {
    	return (
      		<div className="App">
        		<div className="container">
        			<ToDoForm formSubmit={this.formSubmit}/>
        			<ToDoList items={this.state.items} deleteItem={this.deleteItem} checkStatus={this.checkStatus}/>
        		</div>	
      		</div>
    	);
  	}
}

export default App;