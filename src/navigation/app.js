import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

import LandingPage from '../screen/LandingPage';
import Profile from '../screen/Profile';
import DetailMovie from '../screen/DetailMovie';
import Order from '../screen/Order';
import Payment from '../screen/Payment';
import Ticket from '../screen/TIcket';

import DrawerContent from '../components/DrawerContent';

function HomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={LandingPage}
        name="LandingPage"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={DetailMovie}
        name="DetailMovie"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={Order}
        name="Order"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={Payment}
        name="Payment"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={Ticket}
        name="Ticket"
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function ProfileNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Profile}
        name="Profile"
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function PaymentNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Payment}
        name="Payment"
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function TicketNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Ticket}
        name="Ticket"
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function AppNavigator() {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen
        component={HomeNavigator}
        name="HomeNavigator"
        options={{title: 'Home'}}
      />
      <Drawer.Screen
        component={ProfileNavigator}
        name="ProfileNavigator"
        options={{
          title: 'Profile',
          // drawerIcon: ({size, color}) => (
          //   <Icon name="user" size={size} color={color} />
          // ),
        }}
      />

      {/* <Drawer.Screen component={PaymentNavigator} name="Payment" /> */}
      {/* <Drawer.Screen component={TicketNavigator} name="Ticket" /> */}
    </Drawer.Navigator>
  );
}

export default AppNavigator;
