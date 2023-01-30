import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import FirstScreen from '../screens/FirstScreen';
import IntroScreen from '../screens/IntroScreen';
import OverviewScreen from '../screens/OverviewScreen';
import SecondScreen from '../screens/SecondScreen';
import ThirdScreen from '../screens/ThirdScreen';
import RootStack from './RootStack';

export default function AppRouter() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerTransparent: true,
          headerTitle: '',
        }}>
        <RootStack.Screen name="INTRO" component={IntroScreen} />
        <RootStack.Screen
          name="FIRST"
          component={FirstScreen}
          options={{headerBackVisible: false}}
        />
        <RootStack.Screen
          name="SECOND"
          component={SecondScreen}
          options={{headerTintColor: 'black'}}
        />
        <RootStack.Screen
          name="THIRD"
          component={ThirdScreen}
          options={{headerTintColor: 'black'}}
        />
        <RootStack.Screen
          name="OVERVIEW"
          component={OverviewScreen}
          options={{headerTintColor: 'black'}}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
