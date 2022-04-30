import * as React from 'react';
import {View, Text, ScrollView, Image, Button, TextInput, StyleSheet} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function PromptScreen({navigation}) {
  const [text, onChangeText] = React.useState(null);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', padding: 70}}>
        <Text style={{fontSize: 48, color: '#535865'}}>Prompt</Text>
        <Text style={{fontSize: 48, color: '#535865'}}> Suggestions</Text>

        <TextInput 
          style={styles.input} 
          onChangeText={onChangeText} 
          value={text} 
          placeholder="Enter a prompt suggestion!"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
