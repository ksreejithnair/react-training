import { RECEIVED_DECKS } from '../actions'

function decks(state = {}, action) {
	//console.log(action);
	switch(action.type) {
		case RECEIVED_DECKS:
			const {decks} = action;
			//console.log(decks);
			return decks;
		default:
			return state;
	}
}

export default decks;