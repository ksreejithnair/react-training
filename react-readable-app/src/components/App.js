import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import CategoryList from './CategoryList.js'
//NEW
class App extends Component {

  render() {
  	const {categories} =this.props;
  	console.log(categories);
  	return (
      <div className="App">
      	<CategoryList/>
      </div>
    );
  }
}



export default App;
