import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/index.js'
import Main from './Components/Main.js'
import { setLocalNotification,  clearLocalNotifications} from './utils/utils.js'

class App extends React.Component {
  componentDidMount(){
    setLocalNotification();
  }
  render() {

    return (
      <Provider store={createStore(reducer, applyMiddleware(thunk))}>
        
          <Main/>

      </Provider>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hblack: {
    color: 'black'
  }
});
