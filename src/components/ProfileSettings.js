import React from 'react';

import s from '../screen/Profile/style';

import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Button,
} from 'react-native';

import Footer from './Footer';

function ProfileSettings(props) {
  return (
    <ScrollView>
      <View style={s.wrapper}>
        <View style={s.badgesArea}>
          <Text>INFO</Text>
          <View style={s.imageArea}>
            <Image
              style={s.imageUser}
              source={require('../assets/images/patrick.jpg')}
            />
          </View>
          <Text style={s.name}>Jonas El Rodriguez</Text>
        </View>
        <Text style={[s.lable, {marginTop: 22}]}>Account Settings</Text>
        <View style={s.accountSetting}>
          <Text style={s.lableContent}>Details Information</Text>
          <Text style={[s.lableContent, {marginTop: 28}]}>Full Name</Text>
          <TextInput
            style={s.input}
            placeholder="Enter your name"
            defaultValue="Jonas El Rodriguez"
          />
          <Text style={[s.lableContent, {marginTop: 28}]}>Email</Text>
          <TextInput
            style={s.input}
            placeholder="Enter your email"
            defaultValue="Jonas@mail.com"
          />
          <Text style={[s.lableContent, {marginTop: 28}]}>Phone Number</Text>
          <TextInput
            style={s.input}
            placeholder="Enter your phone number"
            defaultValue="123456665"
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
