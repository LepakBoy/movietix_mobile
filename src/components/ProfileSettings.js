import React from 'react';

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
import {useSelector} from 'react-redux';

function ProfileSettings(props) {
  const user = useSelector(state => state.user.user);

  const fullName = `${user.first_name} ${user.last_name}`;

  console.log(user, 'data');

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
              // source={require('../assets/images/patrick.jpg')}
            />
          </View>
          <Text style={s.name}>{fullName}</Text>
        </View>
        <Text style={[s.lable, {marginTop: 22}]}>Account Settings</Text>
        <View style={s.accountSetting}>
          <Text style={s.lableContent}>Details Information</Text>
          <Text style={[s.lableContent, {marginTop: 28}]}>Full Name</Text>
          <TextInput
            style={s.input}
            placeholder="Enter your name"
            defaultValue={fullName}
          />
          <Text style={[s.lableContent, {marginTop: 28}]}>Email</Text>
          <TextInput
            style={s.input}
            placeholder="Enter your email"
            defaultValue={user.email}
          />

          <Text style={[s.lableContent, {marginTop: 48}]}>
            Account and Privacy
          </Text>
          <Text style={[s.lableContent, {marginTop: 28}]}>New Password</Text>
          <TextInput
            style={s.input}
            placeholder="Type new password"
            defaultValue=""
          />
          <Text style={[s.lableContent, {marginTop: 28}]}>
            Confirm New Password
          </Text>
          <TextInput
            style={s.input}
            placeholder="Confirm new password"
            defaultValue=""
          />
        </View>
        <View style={s.btnArea}>
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
