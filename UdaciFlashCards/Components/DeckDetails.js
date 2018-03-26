import React,{ Component } from 'react'
import { 
	View, 
	Text,
	StyleSheet

} from 'react-native'
import { connect } from 'react-redux'

class DeckDetails extends Component{

	render() {
		const title = this.props.navigation.state.params&&this.props.navigation.state.params.title;
		const{decks,decksObj} = this.props;
		const deck = decksObj[title];
		return <View style={styles.container}>
			<Text style={styles.heading}>{deck&&deck.title}</Text>
			<Text >{`${deck&&deck.questions.length} Cards`}</Text>
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
	}
})