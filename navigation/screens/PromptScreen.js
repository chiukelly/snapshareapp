import * as React from 'react';
import { useState } from 'react';
import {View, Text, ScrollView, Image, Button, TextInput, StyleSheet, Pressable} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function PromptScreen({navigation}) {
  const [text, onChangeText] = React.useState(null);
  const [prompts, setPrompts] = useState([
    {prompt: 'Breakfast', key: '1'},
    {prompt: 'Favorite Snack', key: '2'},
    {prompt: 'Lunch', key: '3'},
    {prompt: 'Cultural Dish', key: '4'},
    {prompt: 'Sweets', key: '5'},
  ])

  return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', paddingTop: 70}}>
        <Text style={{fontSize: 48, color: '#535865', paddingBottom: 0}}>Prompt</Text>
        <Text style={{fontSize: 48, color: '#535865', paddingTop: 0}}>Suggestions</Text>
        <Text style={{fontSize: 28, color: '#535865', paddingTop: 30, paddingBottom: 5}}>Category: Food</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TextInput 
          style={styles.input} 
          onChangeText={onChangeText} 
          value={text} 
          placeholder="Enter a Prompt Suggestion :)"
        />
        <MaterialCommunityIcons name="send" size={24} color='#535865' />
        </View>
        <Text style={{fontSize: 22, color: '#535865', paddingTop: 30}}>Vote for Tomorrow's Prompt!</Text>
        <ScrollView>
          { prompts.map((item) => {
            return (
              <View key={item.key} style={styles.item} >
                <Text style={{color: '#535865', fontSize: 18}}>{item.prompt}</Text>
                <LikeButton style={{alignSelf: 'flex-end'}}></LikeButton>
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
    width: 300,
    backgroundColor: '#dedcdc',
  },
  item: {
    flex: 1,
    marginTop: 20,
    padding: 20,
    backgroundColor: '#FEDBD7',
    width: 325,
    flexDirection: 'row',
    borderRadius: 15,
    justifyContent: 'space-between'
  }
});

// like button code from: https://dev.to/vcapretz/instagram-like-button-in-react-native-and-reanimated-v2-3h3k
const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  return (
    <Pressable onPress={() => setLiked((isLiked) => !isLiked)}> 
        <MaterialCommunityIcons
          name={liked ? "heart" : "heart-outline"}
          size={24}
          color={liked ? '#FC9188' : '#535865'}
        />
    </Pressable>
  );
};
