import React, {Component} from 'react';
import { View, Image, Text, ScrollView, TextInput, TouchableOpacity, StyleSheet ,Dimensions, Platform, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Cards from './Cards'
import data from './skillData.json'


export default class SkillScreen extends Component {
  render() {
    
    let skill = this.props.skill
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image style={styles.headerImage} source={require('./logo.png')} />
          <View style={styles.profile}>
            <Icon name="account-circle" color='#3EC6FF' size={35}/>
            <View>
              <Text style={{fontSize: 12, color: '#000'}}>Hai,</Text>
              <Text style={{fontSize: 16, color: '#003366'}}>Ramadhana Bhanuharya Wishnumurti</Text>
            </View>
          </View>
          <View style={styles.pageNameWiew}>
            <Text style={{fontSize: 36, color:'#003366'}}>SKILL</Text>
          </View>
          <View style={{marginHorizontal: 20, height:4, backgroundColor:'#3EC6FF'}} />
        </View>
        <View style={styles.body}>
          <View style={styles.categorySkillView}>
            <View style={{width: 130, height: 32, backgroundColor: '#B4E9FF', alignItems: 'center', justifyContent: 'center', borderRadius: 8}}>
              <Text style={styles.categorySkillText}>Library / Framework</Text>
            </View>
            <View style={{width: 130, height: 32, backgroundColor: '#B4E9FF', alignItems: 'center', justifyContent: 'center', borderRadius: 8}}>
              <Text style={styles.categorySkillText}>Bahasa Pemrograman</Text>
            </View>
            <View style={{width: 65, height: 32, backgroundColor: '#B4E9FF', alignItems: 'center', justifyContent: 'center', borderRadius: 8}}>
              <Text style={styles.categorySkillText}>Teknologi</Text>
            </View>
          </View>
          <FlatList
          data={data.items}
          renderItem={(skill) => <Cards skill={skill.item} />}
          keyExtractor={(item) => item.id}/>
        </View>
      </View>
    )
  }
}
const headerHeight = Platform.OS = 66;
var footerHeight = 55;
const Constants = {
    headerHeight: headerHeight,
    footerHeight: footerHeight,
    viewHeight: Dimensions.get('window').height - headerHeight,
    screenHeight: Dimensions.get('window').height,
    screenWidth: Dimensions.get('window').width,
  };

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    width: Constants.screenWidth,
    height: 155,
    
  },
  headerImage: {
    width: 187.5,
    height: 51,
    marginHorizontal: 20,
    alignSelf: 'flex-end'
  },
  profile: {
    marginHorizontal: 20,
    paddingTop: 4,
    flexDirection: 'row'
  },
  pageNameWiew: {
    marginHorizontal: 20
  },
  body: {
    flex: 1,
  },
  categorySkillView: {
    height: 52,
    flexDirection: 'row',
    justifyContent: "space-around",
    marginHorizontal: 20
  },
  categorySkillText: {
    fontSize: 12, 
    fontWeight: 'bold', 
    color: '#003366',
  }
})
