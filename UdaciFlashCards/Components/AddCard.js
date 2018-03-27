import React, { Component } from 'react'
import { 
	View, 
	Text,
	StyleSheet,
	TextInput,
	Button,
	TouchableOpacity 
} from 'react-native'
import { addDeck, addCardApi, fetchDecksApi } from '../utils/api.js'
import { connect } from 'react-redux'
import {fetchDecks} from '../actions'


class AddCard extends Component {
	state = {
		question: '',
		answer: ''
	}

	addCard(){
		//console.log(this.props.navigation.state.params.title)
		addCardApi({
			title:this.props.navigation.state.params.title, 
			card:{question:this.state.question, answer:this.state.answer}
		}).then(()=>{
			this.props.dispatch(fetchDecks()).then(()=>{
				//console.log('fetch after add');
				this.props.navigation.goBack();
			})
		})
	}

	render() {
		return <View style={styles.container}>
			<TextInput style={styles.input} placeholder="Enter Question" value={this.state.question} onChangeText={(question)=>{this.setState({question})}}/>
			<TextInput style={styles.input} placeholder="Enter Answer" value={this.state.answer} onChangeText={(answer)=>{this.setState({answer})}}/>
			<TouchableOpacity onPress={()=>{this.addCard()}}>
				<View style={styles.addCardBtn}><Text style={styles.btnText}>Submit</Text></View>
			</TouchableOpacity>
		</View>
	}
}

const styles = StyleSheet.create({
	container: {
		flex:1,
		justifyContent: 'flex-start',
		alignItems: 'center'
	},
	input: {
		borderWidth:1,
		borderColor: '#000',
		height: 40,
		width: 300,
		margin: 30,
		borderRadius: 10
	},
	addCardBtn: {
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
		fontWeight: 'bold',
		color: '#fff'
	}
})

export default connect()(AddCard);