import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from './components/Main.js'
import { TabNavigator } from 'react-navigation';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Decks from './components/Decks.js'

const Hello = () => (
  <View>
    <Text>Hello!</Text>
  </View>
);

const Goodbye = () => (
  <View>
    <Text>Goodbye!</Text>
  </View>
);

const Tabs = TabNavigator({
  Hello: {
    screen: Hello
  },
  Goodbye: {
    screen: Goodbye
  },
}, {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: '#000',
    style: {
      height: 56,
      backgroundColor: '#fff',
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
});

class App extends React.Component {
  render() {
    return (
       <Main/>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});

