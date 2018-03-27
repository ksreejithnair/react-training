import React, { Component } from 'react'
import { 
	View, 
	Text,
	StyleSheet,
	TextInput,
	TouchableOpacity 
} from 'react-native'
import { addDeck } from '../utils/api.js'
import { connect } from 'react-redux'
import { fetchDecks } from '../actions'

class AddDeck extends Component{

	state = {
		deckName: ''
	}

	handleSubmit() {
		//console.log(this.state.deckName);
		let deck = {
			title: this.state.deckName,
			questions: []
		}
		//console.log(deck);
		if(this.state.deckName) {
			addDeck(deck,this.state.deckName).then((data)=>{
				this.props.dispatch(fetchDecks()).then(()=>{
					this.setState({deckName:''});
					this.props.navigation.navigate('Decks')
				})
				
			})
		} else {
			this.props.navigation.navigate('Decks');
		}
		//this.props.dispatch()
	}

	handleTextChange (deckName) {
		//console.log(deckName);
		//this.setSate({deckName});
	}

	render(){
		return <View style={styles.mainContainer}>
			<Text style={styles.question}>What is the title of your new deck?</Text>
			<TextInput style={styles.input} onChangeText={(deckName)=>this.setState({deckName})} value={this.state.deckName} placeholder="Deck NAme"/>
			<TouchableOpacity style={styles.button} onPress={()=>this.handleSubmit()}>
				<View><Text style={styles.btnText}>Submit</Text></View>
			</TouchableOpacity>
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
		textAlign: 'center',
		marginBottom: 30
	},
	input:{
		borderWidth: 1,
		borderColor: '#000',
		height: 40,
		width: 250,
		borderRadius: 5,
		padding: 5,
		marginBottom: 20
	},
	button:{
		width: 180,
		height: 40,
		borderColor: '#000',
		borderWidth: 1,
		borderRadius: 10,
		marginTop: 20,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#000'
	},
	btnText: {
		color: '#fff',
		fontWeight: 'bold'
	}
})