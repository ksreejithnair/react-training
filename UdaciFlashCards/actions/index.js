import { fetchDecksApi, addDeck, addDecks, addCard } from '../utils/api.js'

export const RECEIVED_DECKS = 'RECEIVED_DECKS';

export const receivedDecksAction = (decks)=>({
	type: RECEIVED_DECKS,
	decks
})

export const fetchDecks = ()=>dispatch=> {
	return fetchDecksApi().then((data)=>{dispatch(receivedDecksAction({decks:data}))})
}


//export const receiveDecks