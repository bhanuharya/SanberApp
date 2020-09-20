import React, { Component } from 'react'
import { View, Image, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

export default class App extends Component {
    state = {
        username: "",
        password: ""
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={require('./images/logo.png')} />
                <Text style={[styles.title, styles.darkBlue]}>Login</Text>
                <View style={styles.inputView}>
                    <Text style={[styles.textSmall, styles.darkBlue]}>Username / Email</Text>
                    <TextInput 
                        style={styles.inputText}
                        onChangeText={text => this.setState({username:text})}/>
                </View>
                <View style={styles.inputView}>
                    <Text style={[styles.textSmall, styles.darkBlue]}>Password</Text>
                    <TextInput 
                        style={styles.inputText}
                        onChangeText={text => this.setState({password:text})}/>
                </View>
                <TouchableOpacity style={[styles.button, styles.buttonLight]}>
                    <Text style={styles.buttonText}>Masuk</Text>
                </TouchableOpacity>
                <Text style={[styles.textBig, styles.lightBlue]}>atau</Text>
                <TouchableOpacity style={[styles.button, styles.buttonDark]}>
                    <Text style={styles.buttonText}>Daftar ?</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        fontSize: 24,
        margin: 50
    },
    inputView: {
        width: "80%",
        height: 48,
        marginBottom: 30,
        justifyContent: "center"
    },
    inputText: {
        height: 48,
        padding: 10,
        fontSize: 20,
        borderColor: "#003366",
        borderWidth: 1
    },
    textSmall: {
        fontSize: 16    ,
        alignSelf: "flex-start"
    },
    textBig: {
        fontSize: 24
    },
    button:{
        width: "40%",
        borderRadius: 16,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        margin: 10
    },
    buttonText: {
        fontSize: 24,
        color: "white"
    },
    buttonDark: {
        backgroundColor: "#003366"
    },
    buttonLight: {
        backgroundColor: "#3EC6FF"
    },
    darkBlue: {
        color: '#003366'
    },
    lightBlue: {
        color: '#3EC6FF'
    }
  });
