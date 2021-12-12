import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import axios from '../../utils/axios';

import s from './style';

import {View, Text} from 'react-native';

import ProfileSettings from '../../components/ProfileSettings';
import OrderHistory from '../../components/OrderHistory';

function Profile(props) {
  const [tab, setTab] = useState('info');
  const [dataHistory, setDataHistory] = useState([]);
  const user = useSelector(state => state.user.user);

  const getHistory = async id => {
    try {
      const res = await axios.get(`/booking/user/${id}`);
      setDataHistory(res.data.data);
      // console.log(res.data.data, 'res');
    } catch (err) {
      console.log(err);
    }
  };

  // console.log(dataHistory, 'data order');
  useEffect(() => {
    getHistory(user.id_user);
    // console.log('useeffect');
  }, [user.id_user, dataHistory]);
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
      {tab === 'info' ? (
        <ProfileSettings />
      ) : (
        <OrderHistory dataHistory={dataHistory} />
      )}
    </>
  );
}

export default Profile;
