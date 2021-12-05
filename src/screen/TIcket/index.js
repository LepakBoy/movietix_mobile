import React, {useState} from 'react';
import s from './style';

import {ScrollView, View, Text} from 'react-native';

import Footer from '../../components/Footer';

function Ticket() {
  return (
    <ScrollView>
      <View style={s.wrapper}>
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
      </View>
      <Footer />
    </ScrollView>
  );
}

export default Ticket;
