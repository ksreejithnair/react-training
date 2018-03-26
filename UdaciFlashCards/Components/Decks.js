import React from 'react'
import { 
	View, 
	Text, 
	FlatList, 
	ScrollView,
	StyleSheet,
	TouchableOpacity
} from 'react-native'
import { fetchDecks, addDeck, addDecks, addCard } from '../utils/api.js'
import { connect } from 'react-redux'


class Decks extends React.Component {

	goToDeckDetails(deckTitle) {
		//console.log(deckTitle);
		this.props.navigation.navigate('DeckDetails',{
			title:deckTitle
		});
	}
	
	render() {
		const {decks} = this.props;
		//console.log(decks);
		
		
		return <FlatList
			contentContainerStyle={styles.mainContainer}
			data={decks}
			keyExtractor ={(item) => {return item.title}}
			renderItem={({item})=>{return (
				<TouchableOpacity onPress={()=>{this.goToDeckDetails(item.title)}}>
				<View style={styles.deckContainer}>
					<Text style={styles.deckHeading}>{item.title}</Text>
					<Text style={styles.numOfCards}> {`${item.questions && item.questions.length} Cards`}</Text>
				</View>
				</TouchableOpacity>
			)}}
			ListEmptyComponent = {()=><View style={styles.deckContainer}><Text>No Deck Created, Please create deck in next tab.</Text></View>} 

		/>
	}	
}

const mapStateToProps = ({decks})=>{
	//console.log(decks);
	return {
		decks: decks&&Object.keys(decks).reduce((acc, item)=>{
			acc.push(decks[item])
			//console.log(item);
			return acc;
		},[])
	}
}

export default connect(mapStateToProps)(Decks);
const styles = StyleSheet.create({
  mainContainer: {
    alignItems:'center', 
    alignItems: 'stretch'
  },
  deckContainer: {
  	borderWidth:2, 
  	borderColor:'#ccc', 
  	height:150, 
  	borderRadius:20,
  	justifyContent: 'center',
  	alignItems: 'center'
  },
  deckHeading: {
  	fontSize: 20,
  	fontWeight: 'bold'
  }
});


