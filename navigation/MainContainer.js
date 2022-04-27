import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Ionicons, Feather, MaterialCommunityIcons, FontAwesome} from '@expo/vector-icons';

// Screens
import HomeScreen from './screens/HomeScreen';
import UploadScreen from './screens/UploadScreen';
// collages and collage page
import CollagesStackScreen from './screens/CollagesScreen';
import PromptScreen from './screens/PromptScreen';
import FriendsScreen from './screens/FriendsScreen';

// Screen names
const homeName = 'SnapShare';
const uploadName = 'Upload';
const collagesName = 'Collages';
const promptsName = 'Prompts';
const friendsName = 'Friends';

const Tab = createBottomTabNavigator();

export default function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              // iconName = focused ? 'ios-home' : 'ios-home-outline';
              return <Ionicons name='ios-home' color={color} size={size}/>;
            } else if (rn === uploadName) {
              return <Feather name="upload" color={color} size={size} />;
            } else if (rn === collagesName) {
              return <MaterialCommunityIcons name="collage" color={color} size={size}/>;
            } else if (rn === promptsName) {
              return <FontAwesome name="pencil" color={color} size={size}/>;
            } else if (rn === friendsName) {
              return <Ionicons name="ios-people-sharp" color={color} size={size} />;
            }

            // return <Ionicons name={iconName} color={color} size={size}/>;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#5CB4C1',
          inactiveTintColor: '#535865',
          barStyle: {paddingBottom: 10, fontSize: 10},
        }}>
        <Tab.Screen name={homeName} component={HomeScreen} options={{
            headerStyle: {
                backgroundColor: '#5CB4C1', 
                height: 120,
            }, 
            headerTitleStyle: { 
              bottom: -15,
              color: 'white',
              fontSize: 23, 
              fontWeight: '300'
            }
        }} />
        <Tab.Screen name={uploadName} component={UploadScreen} />
        <Tab.Screen name={collagesName} component={CollagesStackScreen} options={{headerShown: false}} />
        <Tab.Screen name={promptsName} component={PromptScreen} />
        <Tab.Screen name={friendsName} component={FriendsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
