import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

function SplashScreen(props) {
  useEffect(() => {
    const token = false;
    setTimeout(() => {
      // props.navigation.navigate('AppScreen', {screen: 'HomeNavigator'});
      if (token) {
        props.navigation.navigate('AppScreen');
      } else {
        props.navigation.navigate('AuthScreen');
      }
    }, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
