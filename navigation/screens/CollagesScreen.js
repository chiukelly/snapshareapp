import * as React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default function CollagesScreen({navigation}) {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10}}>
        <TouchableWithoutFeedback style={{ margin: 20, height: 160, width: 350}} onPress={() => navigation.navigate('Upload')}>
          <View style={{height: 150, width: 350, backgroundColor: "gray"}}>

          </View>
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
