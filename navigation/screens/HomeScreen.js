import * as React from 'react';
import {View, Text, Image} from 'react-native';
import {Button} from 'react-native-paper';

// every app must have a view it returns when exported
export default function HomeScreen({navigation}) {
  return (
    <View>
      <View style={{ padding: 60, alignItems: 'center'}}>
        <Text style={{fontSize: 24, color: '#535865'}}>Today's Prompt</Text>
        <Text style={{fontSize: 48, color: '#FC9188'}}>The Sky</Text>
        <View style={{padding: 20}}>
          <Image 
            style={{height: 150, width: 200, borderWidth: 8, borderColor: '#FEDBD7'}}
            source={{ uri:'https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2t5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'}}
          />
        </View>
      </View>
      <View style={{flexDirection: "row", justifyContent: 'center'}}>
        <View style={{paddingRight: 10, alignItems: 'center'}}>
          <Text style={{alignSelf: 'center', paddingBottom: 10, fontSize: 24, color: '#535865'}}>Upload Photo</Text>
          <Button color={'#E2F0BC'} height={85} width={105} mode="contained" onPress={() => navigation.navigate('Upload')}>
            <Image 
              style={{height: 62, width: 65}}
              source={require('./../../assets/upload.png')} 
            />
          </Button> 
        </View>
        <View style={{paddingLeft: 10, alignItems: 'center'}}>
          <Text style={{alignSelf: 'center', paddingBottom: 10, fontSize: 24, color: '#535865'}}>View Collages</Text>
          <Button color={'#FBEA9D'} height={85} width={105} mode="contained" onPress={() => navigation.navigate('Collages')}>
          <Image 
              style={{height: 64, width: 64, alignSelf: 'center', justifyContent: 'center'}}
              source={require('./../../assets/collage.png')} 
            />
          </Button>
        </View>
      </View>
    </View>

  );
}
