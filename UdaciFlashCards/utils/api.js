import { AsyncStorage } from 'react-native'

const FLASH_CARD_STORAGE_KEY = 'FlashCardStorageKey1'

/**
 *@description - This function will get all the decks stored under above key.
 */
export function fetchDecksApi () {
  return AsyncStorage.getItem(FLASH_CARD_STORAGE_KEY)
    .then((data)=>JSON.parse(data))
}

/**
 *
 * @description - This function will add a deck to DB
 *
 * @param {object} entry - object with title and empty question array
 * @param {string} title - title of the deck
 */
export function addDeck(entry, title) {
  return AsyncStorage.mergeItem(FLASH_CARD_STORAGE_KEY, JSON.stringify({
    [title]: entry
  }))
}

//Testing purpose - this will add sample deck
export function addDecks(entry) {
  return AsyncStorage.setItem(FLASH_CARD_STORAGE_KEY, JSON.stringify(
    entry
  ))
}

//This will add card to a specific deck. Accepts card object
export function addCardApi({title, card}) {
	//console.log(card);
	return AsyncStorage.getItem(FLASH_CARD_STORAGE_KEY)
		.then((data)=>{
			let deckOfTitle = JSON.parse(data)[title];
			deckOfTitle.questions.push(card);
			console.log(deckOfTitle);
			AsyncStorage.mergeItem(FLASH_CARD_STORAGE_KEY, JSON.stringify({
				[title]: deckOfTitle
			})).then((data)=>{return data});
		})
}
