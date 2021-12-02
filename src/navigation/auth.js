import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Login from '../screen/Login';

function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Login}
        name="Login"
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default AuthNavigator;