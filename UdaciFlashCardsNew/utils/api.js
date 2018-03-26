import { AsyncStorage } from 'react-native'

const FLASH_CARD_STORAGE_KEY = 'FlashCardStorageKey1'

export function fetchDecks () {
  return AsyncStorage.getItem(FLASH_CARD_STORAGE_KEY)
    .then((data)=>data)
}

export function addDeck(entry, title) {
  return AsyncStorage.mergeItem(FLASH_CARD_STORAGE_KEY, JSON.stringify({
    [title]: entry
  }))
}

export function addDecks(entry) {
  return AsyncStorage.setItem(FLASH_CARD_STORAGE_KEY, JSON.stringify(
    entry
  ))
}

export function addCard({title, card}) {
	//console.log(title);
	return AsyncStorage.getItem(FLASH_CARD_STORAGE_KEY)
		.then((data)=>{
			let deckOfTitle = JSON.parse(data)[title];
			deckOfTitle.questions.push(card);
			console.log(deckOfTitle);
			AsyncStorage.mergeItem(FLASH_CARD_STORAGE_KEY, JSON.stringify({
				[title]: deckOfTitle
			})).then((data)=>data);
		})
}
