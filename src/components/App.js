import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { connect } from 'react-redux';
import {addRecipe, removeFromCalendar} from '../actions';
import { capitalize } from '../utils/helper';
import CalendarIcon from 'react-icons/lib/fa/calendar-plus-o';

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
    const { calendar, remove } = this.props;
    const mealOrder = ['breakfast', 'lunch', 'dinner'];

    console.log(calendar.calendar);
    return (
      <div className='container'>

        <ul className='meal-types'>
          {mealOrder.map((mealType) => (
            <li key={mealType} className='subheader'>
              {capitalize(mealType)}
            </li>
          ))}
        </ul>

        <div className='calendar'>
          <div className='days'>
            {calendar.map(({ day }) => <h3 key={day} className='subheader'>{capitalize(day)}</h3>)}
          </div>
          <div className='icon-grid'>
            {calendar.map(({ day, meals }) => (
              <ul key={day}>
                {mealOrder.map((meal) => (
                  <li key={meal} className='meal'>
                    {meals[meal]
                      ? <div className='food-item'>
                          <img src={meals[meal].image} alt={meals[meal].label}/>
                          <button onClick={() => remove({meal, day})}>Clear</button>
                        </div>
                      : <button className='icon-btn'>
                          <CalendarIcon size={30}/>
                        </button>}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

      </div>
    );
  }
}

function mapStateToProps({food,calendar}) {
  const dayOrder = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  return {
    calendar: dayOrder.map((day) => ({
      day,
      meals: Object.keys(calendar[day]).reduce((meals,meal) => {
        meals[meal] = calendar[day][meal]?
          food[calendar[day][meal]]:null
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
