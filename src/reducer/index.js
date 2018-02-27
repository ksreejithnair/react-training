import {
	ADD_RECIPE,
	REMOVE_FROM_CALANDER
} from '../actions/index.js'

const initialCalendarState = {
  sunday: {
    breakfast: null,
    lunch: null,
    dinner: null,
  },
  monday: {
    breakfast: null,
    lunch: null,
    dinner: null,
  },
  tuesday: {
    breakfast: null,
    lunch: null,
    dinner: null,
  },
  wednesday: {
    breakfast: null,
    lunch: null,
    dinner: null,
  },
  thursday: {
    breakfast: null,
    lunch: null,
    dinner: null,
  },
  friday: {
    breakfast: null,
    lunch: null,
    dinner: null,
  },
  saturday: {
    breakfast: null,
    lunch: null,
    dinner: null,
  },
}

function calander (state = initialCalendarState,action) {
	const {day,recipe, meal} = action;

	switch(action.type){
		case ADD_RECIPE:
			return {
				...state,
				[day]:{
					...state[day],
					[meal]:recipe.label
				}
			}
		case REMOVE_FROM_CALANDER:
			return {
				...state,
				[day]:{
					...state[day],
					[meal]:null
				}
			}
		default:
			return state
	}
}

export default calander;