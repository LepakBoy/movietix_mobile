import React, {useState, useEffect} from 'react';
import s from './style';

import {ScrollView, View, Text} from 'react-native';

import Footer from '../../components/Footer';

function Ticket(props) {
  useEffect(() => {
    console.log(props.route.params.params, 'tiket');
  }, []);
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
              <Text style={[s.value]}>
                {props.route.params.params.movieName}
              </Text>
              <Text style={[s.lable, {marginTop: 18}]}>Date</Text>
              <Text style={s.value}>
                {props.route.params.params.dataOrder.date_booking}
              </Text>
              <Text style={[s.lable, {marginTop: 18}]}>Count</Text>
              <Text
                style={
                  s.value
                }>{`${props.route.params.params.dataOrder.seat.length} pcs`}</Text>
            </View>
            <View style={s.right}>
              {/* <Text style={s.lable}>Category</Text>
              <Text style={s.value}>PG-13</Text> */}
              <Text style={s.lable}>Time</Text>
              <Text style={s.value}>
                {props.route.params.params.dataOrder.time_booking}
              </Text>
              <Text style={[s.lable, {marginTop: 18}]}>Seats</Text>
              <Text style={s.value}>
                {props.route.params.params.dataOrder.seat.join(', ')}
              </Text>
            </View>
          </View>
          <View style={s.totalArea}>
            <View style={s.totalWrapper}>
              <Text style={s.textTotal}>Total</Text>
              <Text
                style={
                  s.textTotal
                }>{`Rp. ${props.route.params.params.totalPrice}`}</Text>
            </View>
          </View>
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
}

export default Ticket;
