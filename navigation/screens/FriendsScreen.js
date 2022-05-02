import * as React from 'react';
import { useState } from 'react';
import {View, Text, ScrollView, Image, Button, TextInput, StyleSheet, Pressable} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
//import { MDBCloseIcon } from "@expo/mdbreact";

export default function FriendsScreen({navigation}) {
  const [text, onChangeText] = React.useState(null);
  const [friends, setFriends] = useState([
    {friend: 'Shamira Kabir', image: require('./../../assets/shamirapic.png'),key: '1'},
    {friend: 'Jasmine Wang', image: require('./../../assets/jasminepic.png'),key: '2'},
    {friend: 'Kelly Chiu', image: require('./../../assets/kellypic.png'), key: '3'},
    {friend: 'Natalie Wang', image: require('./../../assets/nataliepic.png'), key: '4'},
    {friend: 'Nathan Guzman', image: require('./../../assets/nathanpic.png'),key: '5'},
  ])

  return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', paddingTop: 70}}>
        <Text style={{fontSize: 48, color: '#535865', paddingBottom: 20}}>Your Friends</Text>
        <TextInput 
          style={styles.input} 
          onChangeText={onChangeText} 
          value={text} 
          placeholder="Search Friend"
        />
        <ScrollView>
          { friends.map((item) => {
            return (
              <View key={item.key} style={styles.item} >
                <Image
                  style={{flex: 0, width: 60, height: 60}}
                  source={item.image} 
                /> 
                <Text style={{color: '#535865', fontSize: 24, flex: 5, paddingLeft: 10}} > {item.friend}</Text>
                <MaterialIcons name="cancel" size={24} color='#FC9188' style={{flex: 0}}/>
              </View>
            )
          })}
        </ScrollView>
      </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 10,
    borderWidth: 0,
    padding: 10,
    borderRadius: 10,
    width: 325,
    backgroundColor: '#dedcdc'
  },
  item: {
    flex: 1,
    alignItems: 'center',
    // marginTop: 20,
    padding: 20,
    // backgroundColor: '#FEDBD7',
    fontSize: 20,
    width: 350,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});






