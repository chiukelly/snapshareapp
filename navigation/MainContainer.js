import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

// Screens
import HomeScreen from './screens/HomeScreen';
import UploadScreen from './screens/UploadScreen';
import CollagesScreen from './screens/CollagesScreen';
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
              iconName = focused ? 'ios-home' : 'ios-home-outline';
            } else if (rn === uploadName) {
              iconName = focused ? 'list' : 'list-outline';
            } else if (rn === collagesName) {
              iconName = focused ? 'settings' : 'settings-outline';
            } else if (rn === promptsName) {
              iconName = focused ? 'settings' : 'settings-outline';
            } else if (rn === friendsName) {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            return <Ionicons name={iconName} color={color} size={size}/>;
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
              fontWeight: '10'
            }
        }} />
        <Tab.Screen name={uploadName} component={UploadScreen} />
        <Tab.Screen name={collagesName} component={CollagesScreen} />
        <Tab.Screen name={promptsName} component={PromptScreen} />
        <Tab.Screen name={friendsName} component={FriendsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
