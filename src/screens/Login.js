import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import firebaseSvc from '.../FirebaseSvc';

export default class Login extends React.Component {
  state={
    email:"",
    password:""
  }

  onPressLogin = async () => {
    const user = {
      email: this.state.email,
      password: this.state.password,
    };
    firebaseSvc.login(user, this.loginSuccess, this.loginFailed);
  };
  loginSuccess = () => {
    console.log('login successful, navigate to chat.');
    this.props.navigation.navigate('HelloScreen', {
      name: this.state.name,
      email: this.state.email,
    });
  };
  loginFailed = () => {
    alert('Login failure. Please tried again.');
  };

  // methods to handle user input and update the state
  onChangeTextEmail = email => this.setState({ email });
  onChangeTextPassword = password => this.setState({ password });
  
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>HelloClass</Text>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            value={this.state.email}
            placeholder="Email..." 
            placeholderTextColor="#223063"
            onChangeText={text => this.setState({email:text})}
            autoCapitalize='none'/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..." 
            placeholderTextColor="#223063"
            onChangeText={text => this.setState({password:text})}
            secureTextEntry={true}/>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} onPress={()=>this.props.navigation.navigate('HelloScreen')}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.loginText} onPress={() => this.props.navigation.navigate('Signup')}>Signup</Text>
        </TouchableOpacity>

  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#08073d',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#ff8282",
    marginBottom:40
  },
  inputView:{
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  },
  forgot:{
    color:"white",
    fontSize:11
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#ff8282",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"white"
  }
})
