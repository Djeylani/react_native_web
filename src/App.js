import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }
  
  render() {
    return (
        <View style={styles.root}>
          <Text>Battle Math</Text>
          <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
          <Button 
            onPress={() => console.log(this.state.text)}
            title="Submit"
            accessibilityLabel="Learn more about this purple button"
            color="#841584"
          />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
  }
});


export default App;
