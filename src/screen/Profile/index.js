import React, {useState} from 'react';

import s from './style';

import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Button,
} from 'react-native';

import ProfileSettings from '../../components/ProfileSettings';
import OrderHistory from '../../components/OrderHistory';

function Profile(props) {
  const [tab, setTab] = useState('info');

  return (
    <>
      <View style={s.tabArea}>
        <Text onPress={() => setTab('info')} style={s.textTab}>
          Details Account
        </Text>
        <Text onPress={() => setTab('history')} style={s.textTab}>
          Order History
        </Text>
      </View>
      {tab === 'info' ? <ProfileSettings /> : <OrderHistory />}
    </>
  );
}

export default Profile;
