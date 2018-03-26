import React, { Component } from 'react'
import { 
	View, 
	Text,
	StyleSheet,
	TextInput,
	Button 
} from 'react-native'
import { addDeck } from '../utils/api.js'
import { connect } from 'react-redux'
import { fetchDecks } from '../actions'

class AddDeck extends Component{

	state = {
		deckName: ''
	}

	handleSubmit() {
		console.log(this.state.deckName);
		let deck = {
			title: this.state.deckName,
			questions: []
		}
		//console.log(deck);
		addDeck(deck,this.state.deckName).then((data)=>{
			this.props.dispatch(fetchDecks()).then(()=>{
				this.props.navigation.navigate('Decks')
			})
			
		})
		//this.props.dispatch()
	}

	handleTextChange (deckName) {
		console.log(deckName);
		//this.setSate({deckName});
	}

	render(){
		return <View style={styles.mainContainer}>
			<Text style={styles.question}>What is the title of your new deck?</Text>
			<TextInput onChangeText={(deckName)=>this.setState({deckName})} value={this.state.deckName} placeholder="Deck NAme"/>
			<Button value="submit" title="submit" onPress={()=>this.handleSubmit()}/>
		</View>
	}
}

export default connect()(AddDeck);

const styles = StyleSheet.create({
	mainContainer: {
		flex:1, 
		justifyContent:'center', 
		alignItems:'center' 
	},
	question: {
		fontSize: 48,
		fontWeight: 'bold',
		textAlign: 'center'
	}

})