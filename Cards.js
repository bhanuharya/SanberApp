import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


export default class Cards extends Component {
  render() {
    let skill = this.props.skill
    return (
      <View style={styles.container}>
        <View style={styles.iconSkillView}>
          <Icon style={{color: '#003366'}} name={skill.iconName} size={80} />
        </View>
        <View style={styles.skillContentView}>
          <Text style={styles.skillNameText}>{skill.skillName}</Text>
          <Text style={styles.categoryNameText}>{skill.categoryName}</Text>
          <Text style={styles.percentText}>{skill.percentageProgress}</Text>
        </View>
        <View style={styles.iconDetailView}>
          <Icon style={{color: '#003366'}} name='chevron-right' size={50} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    height: 129,
    marginHorizontal: 20,
    marginBottom: 8,
    borderRadius: 8,
    backgroundColor: '#B4E9FF',
    flexDirection: 'row',
    justifyContent: 'space-around',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  iconSkillView: {
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  skillContentView: {
    width: '50%',
  },
  iconDetailView: {
    width: '10%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  skillNameText: {
    color: '#003366',
    fontSize: 20,
    fontWeight: 'bold'
  },
  categoryNameText: {
    color: '#3EC6FF',
    fontSize: 14,
    fontWeight: 'bold'
  },
  percentText: {
    color: '#fff',
    fontSize: 48,
    fontWeight: 'bold',
    alignSelf: 'flex-end'
  }
})
