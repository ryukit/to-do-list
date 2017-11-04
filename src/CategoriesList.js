import React, { Component } from 'react';
import CategoryItem from './CategoryItem';

const tree = [
	{id: 'c-01', name: 'Cat 1', sub: ['c-01'], parentId: null},
	{id: 'c-02', name: 'Cat 2', sub: [], parentId: null},
	{id: 'c-03', name: 'Cat 3', sub: [], parentId: null},
	{id: 'c-04', name: 'Cat 4', sub: [], parentId: null},
	{id: 'c-05', name: 'Cat 1.1', sub: ['c-06'], parentId: 'c-01'},
	{id: 'c-06', name: 'Cat 1.1.1', sub: [], parentId: 'c-05'}
];

const Categories = ({ tree, source }) => {
	debugger;
	return (
		<ul>
			{
				tree.map(cat => 
					<CategoryItemRener key={cat.id} {...cat} source={tree}/>)
			}
		</ul>
	)
};

function getCatById(source, id) {
	for ( let i = 0; i < source.length; i++ ) {
		if (source[i].id === id) {
			return source[i];
		}
	}
}

const CategoryItemRener = ({id, name, sub, source}) => {
	const shouldRenderChildren = !!sub.length;
	const subTree = sub.map(id => getCatById(source, id) )
	debugger;
	return (
		<li>
			{name}
			{
				shouldRenderChildren && (
					<Categories tree={ subTree } />
				)	
			}
		</li>
	)
};

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
	                <Categories tree={tree} source={tree} />
	            </div>
	        );
	    }
	    return null;
	}
}

export default CategoriesList;