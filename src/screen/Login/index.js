import axios from '../../utils/axios';
import React, {useState} from 'react';
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {getUser} from '../../stores/action/user';

import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './style';

function Login(props) {
  const dispatch = useDispatch();

  const [form, setForm] = useState({email: '', password: ''});

  const handleChangeText = (text, name) => {
    setForm({...form, [name]: text});
  };

  const handleLogin = async () => {
    try {
      if (form.email === '' || form.password === '') {
        alert('Please fill your data');
      } else {
        const result = await axios.post('/auth/login', form);
        console.log('oakwoakwokawo');
        await AsyncStorage.setItem('token', result.data.data.token);
        await AsyncStorage.setItem(
          'refreshToken',
          result.data.data.refreshToken,
        );
        dispatch(getUser(result.data.data.id_user));
        props.navigation.navigate('AppScreen', {
          screen: 'LandingPage',
        });
      }
    } catch (err) {
      alert(err.response.data.msg);
      console.log(err);
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
          secureTextEntry={true}
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
        <Text style={{textAlign: 'center', marginTop: 12}}>Or</Text>
        <Text
          style={{textAlign: 'center', marginTop: 12, fontSize: 16}}
          onPress={() => props.navigation.navigate('Register')}>
          Create new account
        </Text>
      </View>
    </View>
  );
}

export default Login;
