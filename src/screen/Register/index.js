import axios from '../../utils/axios';
import React, {useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import styles from './style';

function Register(props) {
  const dispatch = useDispatch();

  const [error, setError] = useState(false);
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  });
  const [disable, setDisable] = useState(true);

  const handleChangeText = (text, name) => {
    setForm({...form, [name]: text});
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/images/Tickitz.png')}
          style={styles.imageHeader}
        />
        <Text style={styles.textHeader}>Sign Up</Text>
      </View>
      <View style={styles.formInput}>
        <Text style={styles.labelInput}>First Name</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Type your firstname"
          onChangeText={text => handleChangeText(text, 'first_name')}
          defaultValue=""
        />

        <Text style={[styles.labelInput, {marginTop: 12}]}>Last Name</Text>
        <TextInput
          securityTextEntry={true}
          style={styles.textInput}
          placeholder="Type your last name"
          onChangeText={text => handleChangeText(text, 'last_name')}
          defaultValue=""
        />

        <Text style={[styles.labelInput, {marginTop: 12}]}>Email</Text>
        <TextInput
          securityTextEntry={true}
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

        <TouchableOpacity style={styles.btnLogin}>
          <Text style={styles.textBtn}>Join for free</Text>
        </TouchableOpacity>
        <Text
          style={styles.textForgotPass}
          onPress={() =>
            props.navigation.navigate('AuthScreen', {screen: 'Login'})
          }>
          Already have an account? Login here
        </Text>
      </View>
    </ScrollView>
  );
}

export default Register;
