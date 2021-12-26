import React from 'react';
import {useSelector} from 'react-redux';
import {View, Text, StyleSheet} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';

import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from '../utils/axios';

import Icon from 'react-native-vector-icons/Feather';

function DrawerContent(props) {
  const user = useSelector(state => state.user.user);

  // getToken = async () => {
  //   try {
  //     const token = await AsyncStorage.getItem('token');
  //     console.log(token, 'tokennnnnnn');
  //     this.setState({
  //       token: token,
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // componentDidMount() {
  // this.getToken();
  // console.log(this.token, 'didmount');
  // }

  // componentDidUpdate() {
  // this.token;
  // }

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('token');
      await axios.post('/auth/logout');
      // this.props.navigation.navigate('HomeNavigator', {screen: 'LandingPage'});
      this.props.navigation.navigate('AuthScreen', {screen: 'Login'});
    } catch (err) {
      console.log(err);
    }
    alert('Logged out');
  };

  // console.log(this.token, 'state class token');
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.containerProfile}>
          <View style={styles.avatar} />
          <View style={styles.biodata}>
            <Text
              style={
                styles.title
              }>{`${user.first_name} ${user.last_name}`}</Text>
            <Text style={styles.caption}>Moviegoers</Text>
          </View>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={styles.containerSection}>
        <DrawerItem
          label="Sign Out"
          // icon={({color, size}) => (
          //   <Icon color={color} size={size} name="log-out" />
          // )}
          onPress={handleLogout}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerProfile: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: 'gray',
  },
  biodata: {
    marginLeft: 15,
  },
  title: {
    fontSize: 16,
    marginBottom: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  containerSection: {
    marginBottom: 5,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 2,
  },
});

export default DrawerContent;
