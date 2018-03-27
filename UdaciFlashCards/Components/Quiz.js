import React, { Component } from 'react'
import { 
	View, 
	Text,
	TouchableOpacity,
	StyleSheet,
} from 'react-native'
import FlipCard from 'react-native-flip-card'
import { connect } from 'react-redux'

class Quiz extends Component {

	state = {
		flip: false,
		questions: [],
		currQuestion: 0,
		correctAnswer: 0,
		showScore: false
	}

	componentDidMount(){
		const title = this.props.navigation.state.params&&this.props.navigation.state.params.title;

		if(title) {
			console.log(this.props.decksObj[title]);
			this.setState({questions:this.props.decksObj[title].questions});
		}
	}

	flip() {
		this.setState((state)=>{
			return {flip:!state.flip}
		})
	}

	//Assuming all answers in card are correct.
	nextQuestion(choice){
		this.setState((state)=>{
			console.log(state.currQuestion);

			return {
				currQuestion: state.questions.length-1 == state.currQuestion? state.currQuestion : state.currQuestion+1,
				correctAnswer: choice === 'correct'? ++state.correctAnswer:state.correctAnswer,
				showScore: state.questions.length-1 == state.currQuestion? true:false
			}
		})
	}

	render() {
		const {flip,questions,currQuestion, showScore, correctAnswer} = this.state;
		const {decksObj} = this.props;

		return (<View>
			{!showScore&&<View style={styles.mainContainer}>
				<Text>{`${currQuestion+1}/${questions.length}`}</Text>
				<FlipCard
					flip={flip}
					flipHorizontal={true}
					perspective={1000}
					clickable={false}
					flipVertical={false}
				>
				  {<View style={styles.flipCardContainer} >
				    <Text style={styles.question}>
				    	{questions.length&&questions[currQuestion].question}
				    </Text>
				    <TouchableOpacity onPress={()=>this.flip()}>
				    	<View><Text style={styles.flipBtn}>Answer</Text></View>
				    </TouchableOpacity>
				    <TouchableOpacity onPress={()=>this.nextQuestion('correct')}>
				    	<View style={[styles.Btn, styles.correctBtn]}><Text style={styles.btnText}>Correct</Text></View>
				    </TouchableOpacity>
				    <TouchableOpacity onPress={()=>this.nextQuestion('incorrect')}>
				    	<View style={[styles.Btn, styles.incorrectBtn]}>
				    		<Text style={styles.btnText}>Incorrect</Text>
				    	</View>
				    </TouchableOpacity>
				  </View>}
				  
				  {<View style={styles.flipCardContainer} >
				    <Text style={styles.question}>
				    	{questions.length&&questions[currQuestion].answer}
				    </Text>
				    <TouchableOpacity onPress={()=>this.flip()}>
				    	<View><Text style={styles.flipBtn}>Question</Text></View>
				    </TouchableOpacity>
				    <TouchableOpacity onPress={()=>this.nextQuestion('correct')}>
				    	<View style={[styles.Btn, styles.correctBtn]}><Text style={styles.btnText}>Correct</Text></View>
				    </TouchableOpacity>
				    <TouchableOpacity onPress={()=>this.nextQuestion('incorrect')}>
				    	<View style={[styles.Btn, styles.incorrectBtn]}>
				    		<Text style={styles.btnText}>Incorrect</Text>
				    	</View>
				    </TouchableOpacity>
				  </View>}
				  
				</FlipCard> 
			</View>}
			{showScore&&<View style={styles.flipCardContainer}>
					<Text style={styles.scoreHeading}>Your Score is </Text>
					<Text style={styles.score}>{correctAnswer}/{questions.length}</Text>
				</View>
			}
			</View>
		)
	}
}

const styles = StyleSheet.create({
	flipCardContainer: {
		height: 500,
		borderColor: 'black',
		borderWidth: 1,
		width: 300,
		borderRadius: 15,
		margin: 40,
		padding: 15,
		justifyContent: 'center',
		alignItems: 'center'
	},
	question: {
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 30
	},
	Btn: {
		width: 180,
		height: 40,
		borderColor: '#000',
		borderWidth: 1,
		borderRadius: 10,
		marginTop: 20,
		justifyContent: 'center',
		alignItems: 'center',
	},
	correctBtn: {
		backgroundColor: 'green'
	},
	incorrectBtn: {
		backgroundColor: 'red'
	},
	btnText: {
		fontWeight: 'bold',
		color: '#fff'
	},
	flipBtn: {
		fontWeight: 'bold',
		color: 'red',
		marginBottom: 100
	},
	scoreHeading:{
		fontSize: 20,
		fontWeight: 'bold',
		color: 'cyan'
	},
	score: {
		fontSize: 20,
		fontWeight: 'bold',
		color: 'gold'
	}
})

const mapStateToProps = ({decks}) => {
	return {
		decksObj: decks
	}
}

export default connect(mapStateToProps)(Quiz);