import React, { Component } from 'react';
import CategoryItem from './CategoryItem';

class CategoriesList extends Component {
	render() {
		let sendDeleteCategory=this.props.sendDeleteCategory;
        let editCategoryItem=this.props.editCategoryItem;
        let createSubCategoryItem=this.props.createSubCategoryItem;
        let changeCategoryState=this.props.changeCategoryState;
	    const categoryItem = this.props.categories.map(function(category) {
	    	//if (category.parentId === 'null') {
	    		//debugger;
				return ( 
					<CategoryItem
			            title={category.title}
			            id={category.id}
			            key={category.key}
			            datestamp={category.datestamp}
			            parentId={category.parentId}
		            	childId={category.childId}
			            sendDeleteCategory={sendDeleteCategory}
			            editCategoryItem={editCategoryItem}
			            createSubCategoryItem={createSubCategoryItem}
			            changeCategoryState={changeCategoryState}
					/> 
				);
			//} else {
			// 	debugger;
			// 	let parentElement = document.getElementById(category.parentId);
		 // 		if (parentElement != null) {
		 // 			debugger;
		 // 			return ( 
			//  			parentElement.appendChild(
			// 	 			<CategoryItem
			// 		            title={category.title}
			// 		            id={category.id}
			// 		            key={category.key}
			// 		            datestamp={category.datestamp}
			// 		            parentId={category.parentId}
			// 	            	childId={category.childId}
			// 		            sendDeleteCategory={sendDeleteCategory}
			// 		            editCategoryItem={editCategoryItem}
			// 		            createSubCategoryItem={createSubCategoryItem}
			// 		            changeCategoryState={changeCategoryState}
			// 				/>
			// 	 		)
			//  		)
			//  	}
			// }
	    })
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