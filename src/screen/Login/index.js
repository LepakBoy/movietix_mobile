import axios from '../../utils/axios';
import React, {useState} from 'react';
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {user} from '../../stores/action/user';

import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './style';

function Login(props) {
  const dispatch = useDispatch();

  const [error, setError] = useState(false);
  const [form, setForm] = useState({email: '', password: ''});
  const [disable, setDisable] = useState(true);

  // if (form.email !== '' && form.password !== '') {
  //   setDisable(false);
  // }

  const handleChangeText = (text, name) => {
    setForm({...form, [name]: text});
  };

  const handleLogin = async () => {
    try {
      // props.navigation.navigate('AppScreen', {screen: 'LandingPage'});
      // props.navigation.navigate('Register');
      const result = await axios.post('/auth/login', form);
      await AsyncStorage.setItem('token', result.data.data.token);
      await AsyncStorage.setItem('refreshToken', result.data.data.refreshToken);
      dispatch(user(result.data.data.id_user));
      props.navigation.navigate('AppScreen', {
        screen: 'Home',
      });
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/images/Tickitz.png')}
          style={styles.imageHeader}
        />
        <Text style={styles.textHeader}>Sign In</Text>
      </View>
      <View style={styles.formInput}>
        <Text style={styles.labelInput}>Email</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Type your email"
          onChangeText={text => handleChangeText(text, 'email')}
          defaultValue=""
        />
        {/* input password */}
        <Text style={[styles.labelInput, {marginTop: 12}]}>Password</Text>
        <TextInput
          securityTextEntry={true}
          style={styles.textInput}
          placeholder="Type your password"
          onChangeText={text => handleChangeText(text, 'password')}
          defaultValue=""
        />

        <TouchableOpacity
          style={styles.btnLogin}
          // disabled={disable}
          onPress={handleLogin}>
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
