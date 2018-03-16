//NEW
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

/**
 *@description - This component will list all categories on main page.
 */
class CategoryList extends Component {

  render() {
  	const {categories} =this.props;
  	return (
  		<div>
      	{categories.map((category)=>{
      		return <Link to={'/'+category.name} key={category.name}><div className="category">{category.name}</div></Link>
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