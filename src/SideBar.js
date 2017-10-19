import React, { Component } from 'react';
import MainCategoryForm from './MainCategoryForm';
import CategoriesList from './CategoriesList';

class SideBar extends Component {
    render() {
        return (
            <ul id="slide-out" className="side-nav fixed">
			    <li>
			    	<MainCategoryForm 
			    		addMainCategory={this.props.addMainCategory}
		    		/>
			    </li>
			    <li>
			    	<CategoriesList 
			    		categories={this.props.categories}
			    		sendDeleteCategory={this.props.sendDeleteCategory}
			    		editCategoryItem={this.props.editCategoryItem}
		    		/>
			    </li>
			</ul>
        );
    }
}

export default SideBar;