import * as React from 'react';
import {View, Text, ScrollView, Image, Button} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const CollagesStack = createNativeStackNavigator();

export default function CollagesStackScreen({navigation}) {
  return (
    <CollagesStack.Navigator>
      <CollagesStack.Screen name="Collages" component={CollagesScreen} options={{headerShown: false}} />
      <CollagesStack.Screen name="Collage" component={CollageScreen} />
    </CollagesStack.Navigator>
  );
}

// Sky collage screen
function CollageScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image 
          style={{height: 250, width: 400}}
          source={require('./../../assets/skydemo1.png')}
        />
        <View style={{height: 50, width: 400, backgroundColor: "#5CB4C1", justifyContent: 'center'}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{paddingLeft: 10, marginRight: 'auto', color: 'white'}}>
              Sky
            </Text>
            <Text style={{paddingRight: 10, marginLeft: 'auto', color: 'white'}}>
              March 20, 2022
            </Text>
          </View>
        </View>
    </View>
  );
}

function CollagesScreen({navigation}) {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', padding: 70}}>
        <Text style={{fontSize: 48, color: '#535865'}}>Collages</Text>
        <TouchableWithoutFeedback style={{ margin: 20, height: 160, width: 350}} onPress={() => navigation.navigate('Collage')}>
          <Image 
            style={{height: 150, width: 350}}
            source={require('./../../assets/skydemo1.png')}
          />
          <View style={{height: 30, width: 350, backgroundColor: "#5CB4C1", justifyContent: 'center'}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{paddingLeft: 10, marginRight: 'auto', color: 'white'}}>
                Sky
              </Text>
              <Text style={{paddingRight: 10, marginLeft: 'auto', color: 'white'}}>
                March 20, 2022
              </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback style={{ margin: 20, height: 160, width: 350}} onPress={() => navigation.navigate('Upload')}>
          <Image 
            style={{height: 150, width: 350}}
            source={require('./../../assets/something_purple.png')}
          />
          <View style={{height: 30, width: 350, backgroundColor: "#5CB4C1", justifyContent: 'center'}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{paddingLeft: 10, marginRight: 'auto', color: 'white'}}>
                Something Purple
              </Text>
              <Text style={{paddingRight: 10, marginLeft: 'auto', color: 'white'}}>
                March 19, 2022
              </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback style={{ margin: 20, height: 160, width: 350, backgroundColor: "#5CB4C1"}} onPress={() => navigation.navigate('Upload')}>
          <Image 
            style={{height: 150, width: 350}}
            source={require('./../../assets/plants.png')}
          />
          <View style={{height: 30, width: 350, backgroundColor: "#5CB4C1", justifyContent: 'center'}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{paddingLeft: 10, marginRight: 'auto', color: 'white'}}>
                Plants
              </Text>
              <Text style={{paddingRight: 10, marginLeft: 'auto', color: 'white'}}>
                March 18, 2022
              </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </ScrollView>
  );
}
