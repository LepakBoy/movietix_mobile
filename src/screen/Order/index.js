import React, {useState, useEffect} from 'react';
import s from './style';

import {ScrollView, View, Text, TouchableOpacity, Image} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import Footer from '../../components/Footer';

function Order(props) {
  const [schedule, setSchedule] = useState({});
  const [movie, setMovie] = useState('');

  useEffect(() => {
    setSchedule(props.route.params.params.schedule);
    setMovie(props.route.params.params.movie);
  }, [props.route.params.params]);

  console.log(schedule, 'tangkep');
  console.log(movie, 'pelem,');

  const toPayment = () => {
    props.navigation.navigate('Payment');
  };
  return (
    <ScrollView>
      <View style={s.wrapper}>
        <Text style={s.label}>Choose your seat</Text>
        <View style={s.content}>
          <View style={s.seatPicker}>
            <Text>seat picker</Text>
          </View>
          <Text style={[s.subLabel, {marginTop: 18}]}>Seating key</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 22,
            }}>
            <View style={s.keyLeft}>
              <View style={{flexDirection: 'row'}}>
                <Icon name="arrow-down" />
                <Text style={s.keyHeader}>A - G</Text>
              </View>
              <View style={[{flexDirection: 'row'}, {marginTop: 22}]}>
                <View style={[s.keySeat, s.available]} />
                <Text style={s.keyHeader}>Available</Text>
              </View>
              <View style={[{flexDirection: 'row'}, {marginTop: 22}]}>
                <View style={[s.keySeat, s.loveSeat]} />
                <Text style={s.keyHeader}>Love Seat</Text>
              </View>
            </View>
            <View style={s.keyRight}>
              <View style={{flexDirection: 'row'}}>
                <Icon name="arrow-down" />
                <Text style={s.keyHeader}>1 - 14</Text>
              </View>
              <View style={[{flexDirection: 'row'}, {marginTop: 22}]}>
                <View style={[s.keySeat, s.selected]} />
                <Text style={s.keyHeader}>Selected</Text>
              </View>
              <View style={[{flexDirection: 'row'}, {marginTop: 22}]}>
                <View style={[s.keySeat, s.sold]} />
                <Text style={s.keyHeader}>Sold</Text>
              </View>
            </View>
          </View>
        </View>
        <Text style={[s.label, {marginTop: 22}]}>Order Info</Text>
        <View style={s.orderContent}>
          <View style={s.orderHeader}>
            <Image
              style={s.teaterLogo}
              source={
                schedule.teater === 'hiflix'
                  ? require('../../assets/images/hiflix.png')
                  : schedule.teater === 'cinepolis'
                  ? require('../../assets/images/cineone.png')
                  : require('../../assets/images/ebv.png')
              }
            />
            <Text style={s.teaterName}>{schedule.teater}</Text>
            <Text style={s.movieName}>{movie}</Text>
          </View>
          <View style={s.detailOrder}>
            <View style={s.leftSide}>
              <Text style={s.textLeft}>Tuesday, 07 July 2020</Text>
              <Text style={s.textLeft}>One ticket price</Text>
              <Text style={s.textLeft}>Seat choosed</Text>
            </View>
            <View style={s.leftSide}>
              <Text style={s.textRight}>{schedule.time}</Text>
              <Text style={s.textRight}>{`Rp. ${schedule.price}`}</Text>
              <Text style={s.textRight}>C4, C5, C6</Text>
            </View>
          </View>
          <View style={s.priceContent}>
            <Text style={s.total}>Total Payment</Text>
            <Text style={s.amount}>$30</Text>
          </View>
        </View>
        <View style={s.btnArea}>
          <TouchableOpacity onPress={toPayment} style={s.btnCheckout}>
            <Text style={s.textBtn}>Checkout now</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
}

export default Order;
