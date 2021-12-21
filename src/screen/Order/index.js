import React, {useState, useEffect} from 'react';
import s from './style';
import Seat from '../../components/Seat';

import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  Button,
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import Footer from '../../components/Footer';
import axios from '../../utils/axios';

function Order(props) {
  const [schedule, setSchedule] = useState({});
  const [movie, setMovie] = useState('');
  const [idMovie, setidMovie] = useState('');
  const [date, setDate] = useState('');
  const listSeat = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
  const [selectedSeat, setSelectedSeat] = useState([]);
  const [reservedSeat, setReservedSeat] = useState([]);

  const getSeatBooked = (idSchedule, idMovie, date, time) => {
    const result = axios
      .get(
        `/seat/?id_schedule=${idSchedule}&id_movie=${idMovie}&date_booking=${date}&time_booking=${time}`,
      )
      .then(res => {
        const booked = res.data.data.map(item => {
          return item.seat;
        });
        setReservedSeat(booked);
      });
  };

  useEffect(() => {
    setSchedule(props.route.params.params.schedule);
    setMovie(props.route.params.params.movie);
    setDate(props.route.params.params.date);
    setidMovie(props.route.params.params.idMovie);

    const {schedule, date, idMovie} = props.route.params.params;

    getSeatBooked(schedule.idSchedule, idMovie, date, schedule.time);
  }, [props.route.params.params]);

  const handleSelectedSeat = data => {
    if (selectedSeat.includes(data)) {
      const deleteSeat = selectedSeat.filter(el => {
        return el !== data;
      });
      setSelectedSeat(deleteSeat);
    } else {
      setSelectedSeat([...selectedSeat, data]);
    }
  };

  const handleResetSeat = () => {
    setSelectedSeat([]);
  };

  const toPayment = () => {
    selectedSeat.length > 0
      ? props.navigation.navigate('Payment', {
          params: {
            dataOrder: {
              date_booking: date,
              time_booking: schedule.time,
              id_movie: idMovie,
              id_schedule: schedule.idSchedule,
              seat: selectedSeat,
            },
            totalPrice: selectedSeat.length * schedule.price,
            movieName: movie,
          },
        })
      : alert('choose your seat before continue to payment');
  };
  return (
    <ScrollView>
      <View style={s.wrapper}>
        <Text style={s.label}>Choose your seat</Text>
        <View style={s.content}>
          <FlatList
            data={listSeat}
            keyExtractor={item => item}
            renderItem={({item}) => (
              <Seat
                seatAlphabhet={item}
                reserved={reservedSeat}
                selected={selectedSeat}
                selectSeat={handleSelectedSeat}
              />
            )}
          />

          <TouchableOpacity onPress={handleResetSeat} style={s.btnReset}>
            <Text style={{color: 'white', fontSize: 16, fontWeight: '500'}}>
              Reset
            </Text>
          </TouchableOpacity>

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
              <Text style={s.textLeft}>{date}</Text>
              <Text style={s.textLeft}>One ticket price</Text>
              <Text style={s.textLeft}>Seat choosed</Text>
            </View>
            <View style={s.leftSide}>
              <Text style={s.textRight}>{schedule.time}</Text>
              <Text style={s.textRight}>{`Rp. ${schedule.price}`}</Text>
              <Text style={s.textRight}>
                {selectedSeat.length > 0
                  ? selectedSeat.join(', ')
                  : 'No seat selected'}
              </Text>
            </View>
          </View>
          <View style={s.priceContent}>
            <Text style={s.total}>Total Payment</Text>
            <Text style={s.amount}>{`Rp. ${
              schedule.price * selectedSeat.length
            }`}</Text>
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
