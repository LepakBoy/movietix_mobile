import React, {useState} from 'react';
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';

import styles from './style';

function Login(props) {
  const [form, setForm] = useState({email: '', password: ''});

  const handleChangeText = () => {};

  const handleLogin = () => {
    props.navigation.navigate('AppScreen', {screen: 'LandingPage'});
    // props.navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/images/Tickitz .png')}
          style={styles.imageHeader}
        />
        <Text style={styles.textHeader}>Sign In</Text>
      </View>
      <View style={styles.formInput}>
        <Text style={styles.labelInput}>Email</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Type your email"
          // onChangeText={text => setText(text)}
          defaultValue=""
        />
        {/* input password */}
        <Text style={[styles.labelInput, {marginTop: 12}]}>Password</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Type your password"
          // onChangeText={text => setText(text)}
          defaultValue=""
        />
        <TouchableOpacity style={styles.btnLogin} onPress={handleLogin}>
          <Text style={styles.textBtn}>Sign In</Text>
        </TouchableOpacity>
        <Text style={styles.textForgotPass}>
          Forgot your password? Reset now
        </Text>
      </View>
    </View>
  );
}

export default Login;
