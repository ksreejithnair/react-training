import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { connect } from 'react-redux';
import {addRecipe, removeFromCalendar} from '../actions';

class App extends Component {
 /* doThings () {
    this.props.dispatch(addRecipe({
      day: 'monday',
      meal: 'lunch',
      recipe: {
        label: 'pizza'
      }
    }))
  }*/
  doThings () {
    this.props.selectRecipe({
      day: 'monday',
      meal: 'lunch',
      recipe: {
        label: 'pizza'
      }
    })
  }
  render() {
    console.log(this.props);
    return (
      <div className='App' on="tap:this.doThings()">
        hello
      </div>
    );
  }
}

function mapStateToProps(calendar) {
  const dayOrder = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  return {
    calendar: dayOrder.map((day) => ({
      day,
      meals: Object.keys(calendar[day]).reduce((meals,meal) => {
        meals[meal] = calendar[day][meal]?
          calendar[day][meal]:null
        return meals;
      }, {})
    }))
  }
}

function mapDispatchToProps (dispatch) {
  return {
    selectRecipe: (data) => dispatch(data),
    remove: (data) => dispatch(data)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
