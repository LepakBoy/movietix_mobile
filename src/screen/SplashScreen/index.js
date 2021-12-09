import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function SplashScreen(props) {
  const getTokens = async () => {
    try {
      const tokens = await AsyncStorage.getItem('token');

      setTimeout(() => {
        // props.navigation.navigate('AppScreen');
        if (tokens) {
          props.navigation.navigate('AppScreen');
        } else {
          props.navigation.navigate('AuthScreen');
        }
      }, 2000);
    } catch (err) {}
  };

  useEffect(() => {
    getTokens();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>MovieTix</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5F2EEA',
  },
  text: {
    color: 'white',
    fontSize: 28,
    fontWeight: '800',
  },
});

export default SplashScreen;
