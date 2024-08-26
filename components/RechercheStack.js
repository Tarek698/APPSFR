//RechercheStack.js

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Recherche from './recherche'
import PageQ3 from './PageQ3'
import PageQ2 from './PageQ2'
import PageQ1 from './PageQ1'
import PageQ4 from './PageQ4'
import PageQ5 from './PageQ5'

const Stack = createStackNavigator();

const RechercheStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Recherche" component={Recherche} />
      <Stack.Screen name="PageQ3" component={PageQ3} />
      <Stack.Screen name="PageQ2" component={PageQ2} />
      <Stack.Screen name="PageQ1" component={PageQ1} />
      <Stack.Screen name="PageQ4" component={PageQ4} />
      <Stack.Screen name="PageQ5" component={PageQ5} />
    </Stack.Navigator>
  );
};

export default RechercheStack;