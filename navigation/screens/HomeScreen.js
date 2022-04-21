import * as React from 'react';
import {View, Text, Image} from 'react-native';
import {Button} from 'react-native-paper';

// every app must have a view it returns when exported
export default function HomeScreen({navigation}) {
  return (
    <View>
      <View style={{ padding: 50, alignItems: 'center'}}>
        <Text style={{fontSize: 16}}>Today's Prompt</Text>
        <Text style={{fontSize: 40, color: '#FC9188'}}>The Sky</Text>
        <View style={{padding: 20}}>
          <Image 
            style={{height: 150, width: 200, borderWidth: 2, borderColor: '#FC9188'}}
            source={{ uri:'https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2t5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'}}
          />
        </View>
      </View>
      <View style={{flexDirection: "row", justifyContent: 'center'}}>
        <View style={{paddingRight: 10}}>
          <Text style={{alignSelf: 'center', paddingBottom: 10}}>Upload Photo</Text>
          <Button color={'#E2F0BC'} labelStyle={{ color: "#779622"}} mode="contained" onPress={() => navigation.navigate('Upload')}>
            Upload
          </Button> 
        </View>
        <View style={{paddingLeft: 10}}>
          <Text style={{alignSelf: 'center', paddingBottom: 10}}>View Collages</Text>
          <Button color={'#FBEA9D'} labelStyle={{ color: "#D7B209" }} mode="contained" onPress={() => navigation.navigate('Collages')}>
            View
          </Button>
        </View>
      </View>
    </View>

  );
}
