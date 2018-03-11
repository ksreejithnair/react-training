//NEW
import React, { Component } from 'react';
import {connect} from 'react-redux';


class CategoryList extends Component {

  render() {
  	const {categories} =this.props;
  	//console.log(categories);
  	return (
  		<div>
      	{categories.map((category)=>{
      		return <div className="category" key={category.name}>{category.name}</div>
      	})}
      </div>
    );
  }
}

function mapStateToProps({categories}){
	return {
		categories: Object.keys(categories).map((categoryKey)=>(categories[categoryKey]))
	};
};

export default connect(mapStateToProps)(CategoryList);