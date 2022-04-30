import * as React from 'react';
import {View, Text, ScrollView, Image, Button, TextInput, StyleSheet, Pressable} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function PromptScreen({navigation}) {
  const [text, onChangeText] = React.useState(null);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', paddingTop: 70}}>
      <Text style={{fontSize: 48, color: '#535865', paddingBottom: 0}}>Prompt</Text>
      <Text style={{fontSize: 48, color: '#535865', paddingTop: 0}}>Suggestions</Text>
      <Text style={{fontSize: 30, color: '#535865', paddingTop: 30}}>Category: Food</Text>
      <TextInput 
        style={styles.input} 
        onChangeText={onChangeText} 
        value={text} 
        placeholder="Enter a Prompt Suggestion :)"
      />
      <Text style={{fontSize: 20, color: '#535865', paddingTop: 30}}>Vote for Tomorrow's Prompt!</Text>
      </View>
    </ScrollView>
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
    backgroundColor: '#dedcdc'
  },
});
