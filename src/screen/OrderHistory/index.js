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

function OrderHistory() {
  return (
    <ScrollView style={s.wrapper}>
      {/* looping order list */}
      <View style={s.cardHistory}>
        <Image source={require('../../assets/images/cineone.png')} />
        <Text style={s.teaterName}>Tuesday, 07 July 2020 - 04:30pm</Text>
        <Text style={s.movieName}>Spider-Man: Homecoming</Text>
        <TouchableOpacity style={s.ticketStatus}>
          <Text style={s.status}>Ticket in active</Text>
        </TouchableOpacity>
      </View>

      <View style={s.cardHistory}>
        <Image source={require('../../assets/images/cineone.png')} />
        <Text style={s.teaterName}>Tuesday, 07 July 2020 - 04:30pm</Text>
        <Text style={s.movieName}>Spider-Man: Homecoming</Text>
        <TouchableOpacity style={s.ticketStatus}>
          <Text style={s.status}>Ticket in active</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

export default OrderHistory;
