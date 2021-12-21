import React, {useState, useEffect} from 'react';
import {getUser, updateUser} from '../stores/action/user';
import s from '../screen/Profile/style';
import {API_BACKEND} from '@env';

import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';

import Footer from './Footer';
import {useSelector, useDispatch} from 'react-redux';
import axios from '../utils/axios';

function ProfileSettings(props) {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);
  const [newPass, setNewPass] = useState({password: '', conPassword: ''});

  const [dataUser, setDataUser] = useState({
    first_name: '',
    last_name: '',
  });
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
  });

  const fullName = `${user.first_name} ${user.last_name}`;

  const changeText = (text, name) => {
    setFormData({...formData, [name]: text});
  };

  const changePass = (text, name) => {
    setNewPass({...newPass, [name]: text});
  };

  useEffect(() => {
    dispatch(getUser(user.id_user)).then(res => {
      setDataUser({
        ...dataUser,
        first_name: res.value.data.data[0].first_name,
        last_name: res.value.data.data[0].last_name,
      });
    });
  }, []);

  function changeData() {
    formData.first_name !== '' || formData.last_name !== ''
      ? dispatch(updateUser(formData)).then(res => {
          alert('success update data');
          dispatch(getUser(user.id_user));
          setFormData({first_name: '', last_name: ''});
        })
      : alert('Insert new data first');
  }

  const updatePassword = async () => {
    if (newPass.password === '' || newPass.conPassword === '') {
      alert('Fill new password');
    } else {
      newPass.password === newPass.conPassword
        ? axios.patch('/user/password', newPass).then(res => {
            alert('Password has been updated');
            setNewPass({password: '', conPassword: ''});
          })
        : alert("New password and confirm password does'nt match");
    }
  };

  return (
    <ScrollView>
      <View style={s.wrapper}>
        <View style={s.badgesArea}>
          <Text>INFO</Text>
          <View style={s.imageArea}>
            <Image
              style={s.imageUser}
              source={
                user.image
                  ? `${API_BACKEND}uploads/movie/${user.image}`
                  : require('../assets/images/default.jpg')
              }
            />
          </View>
          <Text style={s.name}>{fullName}</Text>
        </View>
        <Text style={[s.lable, {marginTop: 22}]}>Account Settings</Text>
        <View style={s.accountSetting}>
          <Text style={s.lableContent}>Details Information</Text>
          <Text style={[s.lableContent, {marginTop: 28}]}>First Name</Text>
          <TextInput
            onChangeText={text => changeText(text, 'first_name')}
            style={s.input}
            placeholder="Enter your first name"
            defaultValue={user.first_name}
          />
          <Text style={[s.lableContent, {marginTop: 28}]}>Last Name</Text>
          <TextInput
            onChangeText={text => changeText(text, 'last_name')}
            style={s.input}
            placeholder="Enter your last name"
            defaultValue={user.last_name}
          />
          <Text style={[s.lableContent, {marginTop: 28}]}>Email</Text>
          <Text style={{marginTop: 12}}>{user.email}</Text>
          {/* <TextInput
            style={s.input}
            placeholder="Enter your email"
            defaultValue={user.email}
          /> */}
          <TouchableOpacity onPress={changeData} style={s.btnChanges}>
            <Text style={s.textBtn}>Update Profile</Text>
          </TouchableOpacity>
        </View>

        <View style={s.passwordSetting}>
          <Text style={[s.lableContent, {marginTop: 18}]}>
            Account and Privacy
          </Text>
          <Text style={[s.lableContent, {marginTop: 28}]}>New Password</Text>
          <TextInput
            onChangeText={text => changePass(text, 'password')}
            secureTextEntry={true}
            style={s.input}
            placeholder="Type new password"
            defaultValue={newPass.password}
          />
          <Text style={[s.lableContent, {marginTop: 28}]}>
            Confirm New Password
          </Text>
          <TextInput
            onChangeText={text => changePass(text, 'conPassword')}
            secureTextEntry={true}
            style={s.input}
            placeholder="Confirm new password"
            defaultValue={newPass.conPassword}
          />
          <TouchableOpacity onPress={updatePassword} style={s.btnChanges}>
            <Text style={s.textBtn}>Update Password</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
}

export default ProfileSettings;
