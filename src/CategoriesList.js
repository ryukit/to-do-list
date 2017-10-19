import React, { Component } from 'react';
import CategoryItem from './CategoryItem';

class CategoriesList extends Component {
	render() {
	    const categoryItem = this.props.categories.map(category => ( 
			<CategoryItem
	            title={category.title}
	            id={category.id}
	            key={category.key}
	            datestamp={category.datestamp}
	            sendDeleteCategory={this.props.sendDeleteCategory}
	            editCategoryItem={this.props.editCategoryItem}
			/>
	    ))
	    if(this.props.categories.length > 0){
	        return (
	            <div className="row">
	                <div className="col s12">
	                    {categoryItem}
	                </div>
	            </div>
	        );
	    }
	    return null;
	}
}

export default CategoriesList;