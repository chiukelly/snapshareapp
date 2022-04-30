import * as React from 'react';
import {View, Text, ScrollView, Image, Button} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function FriendsScreen({navigation}) {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', paddingTop: 70}}>
        <Text style={{fontSize: 48, color: '#535865'}}>Your Friends</Text>
      </View>
    </ScrollView>
  );
}
