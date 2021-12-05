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

function Ticket() {
  return (
    <ScrollView style={s.wrapper}>
      <View style={s.barcodeArea}>
        <View style={s.barcode} />
      </View>

      <View style={s.ticketInfo}>
        <View style={s.wrapperTicketInfo}>
          <View style={s.left}>
            <Text style={s.lable}>Movie</Text>
            <Text style={[s.value]}>Spider-Man: Homecoming</Text>
            <Text style={[s.lable, {marginTop: 18}]}>Date</Text>
            <Text style={s.value}>07 July 2020</Text>
            <Text style={[s.lable, {marginTop: 18}]}>Count</Text>
            <Text style={s.value}>3 pcs</Text>
          </View>
          <View style={s.right}>
            <Text style={s.lable}>Category</Text>
            <Text style={s.value}>PG-13</Text>
            <Text style={[s.lable, {marginTop: 18}]}>Time</Text>
            <Text style={s.value}>02:00pm</Text>
            <Text style={[s.lable, {marginTop: 18}]}>Seats</Text>
            <Text style={s.value}>C4, C5, C6</Text>
          </View>
        </View>
        <View style={s.totalArea}>
          <View style={s.totalWrapper}>
            <Text style={s.textTotal}>Total</Text>
            <Text style={s.textTotal}>$30</Text>
          </View>
        </View>
      </View>

      <View style={s.footer}>
        <Image source={require('../../assets/images/Tickitz.png')} />
        <Text style={[s.textGrey, {marginTop: 12}]}>
          Stop waiting in line. Buy tickets conveniently, watch movies quietly.
        </Text>
        <Text style={[s.labelFooter, {marginTop: 28}]}>Our Sponsor</Text>
        <View style={s.logoArea}>
          <Image
            style={[{marginHorizontal: 8}, s.logo]}
            source={require('../../assets/images/cineone.png')}
          />
          <Image
            style={[{marginHorizontal: 8}, s.logo]}
            source={require('../../assets/images/hiflix.png')}
          />
          <Image
            style={[{marginHorizontal: 8}, s.logo]}
            source={require('../../assets/images/ebv.png')}
          />
        </View>
      </View>
    </ScrollView>
  );
}

export default Ticket;
