import React,{ Component } from 'react'
import { 
	View, 
	Text,
	StyleSheet,
	TouchableOpacity,
	Button

} from 'react-native'
import { connect } from 'react-redux'

class DeckDetails extends Component{

	goToAddCard(title){
		this.props.navigation.navigate('AddCard', {title});
	}

	goToQuiz(title){
		this.props.navigation.navigate('Quiz', {title});
	}

	render() {
		console.log("inside deck details");
		const title = this.props.navigation.state.params&&this.props.navigation.state.params.title;
		const{decks,decksObj} = this.props;
		const deck = decksObj[title];
		return <View style={styles.container}>
			<Text style={styles.heading}>{deck&&deck.title}</Text>
			<Text >{`${deck&&deck.questions.length} Cards`}</Text>
			<TouchableOpacity onPress={()=>{this.goToAddCard(deck.title)}}>
				<View style={styles.addCardBtn}><Text style={styles.btnText}>Add Cards</Text></View>
			</TouchableOpacity>

			{deck&&deck.questions.length>0&&(<TouchableOpacity onPress={()=>{this.goToQuiz(deck.title)}}>
				<View style={[styles.addCardBtn,styles.startQuiz]}>
					<Text style={[styles.btnText,styles.whiteTxt]}>Start Quiz</Text>
				</View>
			</TouchableOpacity>)}
		</View>
	}
}

const mapStateToProps = ({decks}) => {
	return {
		decks: decks&&Object.keys(decks).reduce((acc, item)=>{
			acc.push(decks[item])
			//console.log(item);
			return acc;
		},[]),
		decksObj:decks
	}
}

export default connect(mapStateToProps)(DeckDetails);

const styles = StyleSheet.create({
	container: {
		flex:1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	heading: {
		fontSize: 20,
		fontWeight: 'bold'
	},
	addCardBtn: {
		width: 180,
		height: 40,
		borderColor: '#000',
		borderWidth: 1,
		borderRadius: 10,
		marginTop: 20,
		justifyContent: 'center',
		alignItems: 'center'
	},
	btnText: {
		fontWeight: 'bold'
	},
	startQuiz: {
		backgroundColor: '#000'
	},
	whiteTxt: {
		color: '#fff'
	}

})