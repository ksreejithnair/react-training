//NEW
import {fetchAllCategories} from '../utils/api.js'

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';
export const ADD_RECIPE = 'ADD_RECIPE';
export const REMOVE_FROM_CALANDER = 'REMOVE_FROM_CALANDER';

export const receiveCategories = categories => ({
  type: RECEIVE_CATEGORIES,
  categories:categories.categories //TODO:Not sure why it is coming as {categories:{categories:[{},{}]}
});

export const fetchCategories = () => dispatch => (
  fetchAllCategories()
  //{categories: [{name: "react", path: "react"}, {name: "redux", path: "redux"}, {name: "udacity", path: "udacity"}]}
      .then(categories => {dispatch(receiveCategories(categories))
      })
);

export function addRecipe({day, recipe, meal}) {
	return {
		type: ADD_RECIPE,
		recipe,
		day,
		meal
	}
}

export function removeFromCalendar({day, meal}){
	return {
		type: REMOVE_FROM_CALANDER,
		day,
		meal
	}
}