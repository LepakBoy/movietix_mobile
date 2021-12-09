import React, {useState} from 'react';

import s from '../screen/Profile/style';

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
  const [formData, setFormData] = useState({first_name: '', last_name: ''});

  const fullName = `${user.first_name} ${user.last_name}`;

  const changeText = (text, name) => {
    setFormData({...formData, [name]: text});
  };

  const changeData = async () => {
    try {
      const result = await axios.patch('/user/update-profile', formData);
      // dispatch(user);
      console.log(result, 'result');
    } catch (err) {
      console.log(err);
    }
  };

  // console.log(formData, 'form data');
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
                  ? `http://192.168.100.4:3000/uploads/movie/${user.image}`
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
          <TextInput
            style={s.input}
            placeholder="Enter your email"
            defaultValue={user.email}
          />
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
            secureTextEntry={true}
            style={s.input}
            placeholder="Type new password"
            defaultValue=""
          />
          <Text style={[s.lableContent, {marginTop: 28}]}>
            Confirm New Password
          </Text>
          <TextInput
            secureTextEntry={true}
            style={s.input}
            placeholder="Confirm new password"
            defaultValue=""
          />
          <TouchableOpacity style={s.btnChanges}>
            <Text style={s.textBtn}>Save Changes</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
}

export default ProfileSettings;
