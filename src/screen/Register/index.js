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
import {register} from '../../stores/action/register';

import styles from './style';

function Register(props) {
  const dispatch = useDispatch();

  const [error, setError] = useState(false);
  const [form, setForm] = useState({
    email: '',
    password: '',
    first_name: '',
    last_name: '',
  });

  const handleChangeText = (text, name) => {
    setForm({...form, [name]: text});
  };

  //   const regist = await axios.post('/auth/register', form);
  //   alert(
  //     'Success register, check your email for email activation before login ',
  //   );
  //   props.navigation.navigate('Login');
  //   console.log(regist.data.data, 'hasil regisgter');
  //   return;
  // }

  const handleRegister = async () => {
    try {
      for (const item in form) {
        if (!form[item]) {
          alert('Please fill all data');
          return;
        } else {
          const regist = dispatch(register(form));

          alert(
            'Success register, check your email for email activation before login ',
          );
          props.navigation.navigate('Login');
          console.log(regist.data.data, 'hasil regisgter');
          return;
        }
      }
    } catch (err) {
      alert(err.response.data.msg);
      return;
    }
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
          placeholder="Type your first name"
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
          secureTextEntry={true}
          style={styles.textInput}
          placeholder="Type your password"
          onChangeText={text => handleChangeText(text, 'password')}
          defaultValue=""
        />

        <TouchableOpacity onPress={handleRegister} style={styles.btnLogin}>
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
