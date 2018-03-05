import { combineReducers } from 'redux';

import {
	ADD_RECIPE,
	REMOVE_FROM_CALANDER,
	RECEIVE_CATEGORIES
} from '../actions/index.js'

function categories(state={},action) {
	const {categories} = action;
console.log(action);
	switch(action.type) {
		case RECEIVE_CATEGORIES:
			let result = categories.reduce((result,category)=> {
				result[category.name] = category;
				return result;
			},{})
			return result;
		default:
			return state;
	}
}

//NEW

export default combineReducers({categories})