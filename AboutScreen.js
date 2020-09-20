import React from 'react';
import {
  StyleSheet,
  View, 
  Text,
  ScrollView
}from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { AntDesign } from '@expo/vector-icons';


export default class App extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.header}>
            <Text style={styles.aboutHeader}> Tentang Saya </Text>
          </View>
          <View style={styles.profileContainer}>
            <Icon name="account-circle" size={150} color={'#EFEFEF'}/>
            <Text style={{fontSize:24, color:'#003366', fontWeight:'700'}}>Mukhlis Hanafi</Text>
            <Text style={{fontSize:16, color:'#3EC6FF'}}>React Native Developer</Text>
          </View>
          <View style={styles.otherContainer}>
            <Text style={styles.textPortofolio}>Portofolio</Text>
            <View style={styles.delimiter}/>
            <View style={styles.gitAccountContainer}>
              <View style={styles.gitAccount}>
                <AntDesign name="gitlab" size={40} color={'#3EC6FF'}/>
                <Text style={styles.text_2}>@mukhlis-h</Text>
              </View>
              <View style={styles.gitAccount}>
                <AntDesign name="github" size={40} color={'#3EC6FF'}/>
                <Text style={styles.text_2}>@mukhlis-h</Text>
              </View>
            </View>
          </View>
          <View style={styles.otherContainer}>
            <Text style={styles.text_1}>Hubungi Saya</Text>
            <View style={styles.delimiter}/>
            <View style={styles.socialAccountContainer}>
              <View style={styles.socialAccount}>
                <View style={{margin:10}}>
                  <AntDesign name="facebook-square" size={40} color={'#3EC6FF'}/>
                </View>
                <Text style={styles.text_2}>mukhlis.hanafi</Text>
              </View>
              <View style={styles.socialAccount}>
                <View style={{margin:10}}>
                  <AntDesign name="instagram" size={40} color={'#3EC6FF'}/>
                </View>
                <Text style={styles.text_2}>@mukhlis_hanafi</Text>
              </View>
              <View style={styles.socialAccount}>
                <View style={{margin:10}}>
                  <AntDesign name="twitter" size={40} color={'#3EC6FF'}/>
                </View>
                <Text style={styles.text_2}>@mukhlish</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}


const styles= StyleSheet.create({
  container:{
    flex:1
  },
  header:{
    alignItems: 'center',
    paddingTop: 45
  },
  aboutHeader:{
    fontSize: 30,
    fontWeight: '700',
    color: '#003366'
  },
  profileContainer:{
    alignItems: 'center',
    marginBottom: 8
  },
  otherContainer:{
    padding: 10,
    marginHorizontal: 10,
    marginBottom: 8,
    backgroundColor: '#EFEFEF',
    borderRadius: 5
  },
  textPortofolio:{
    fontSize: 18,
    margin: 0,
    padding: 0,
    color: '#003366'
  },
  text_2:{
    fontSize:14,
    color: '#003366',
    fontWeight:'700'
  },
  delimiter:{
    height: 0.5,
    backgroundColor: '#003366',
    marginTop: 6
  },
  gitAccountContainer:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 10
  },
  gitAccount:{
    alignItems:'center',
    justifyContent: 'center',
    marginTop: 10
  },
  socialAccountContainer:{
    margin: 10,
    
  },
  socialAccount:{
    alignItems:'center',
    marginLeft: 60,
    flexDirection:'row',
    marginTop: 10
  },
})
