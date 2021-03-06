/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import s from './style';

import {ScrollView, View, Text, TouchableOpacity, Image} from 'react-native';

import Footer from '../../components/Footer';

import DatePicker from 'react-native-date-picker';
import {Picker} from '@react-native-picker/picker';
import axios from '../../utils/axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {API_BACKEND} from '@env';

function DetailMovie(props) {
  const [date, setDate] = useState(new Date(Date.now()));
  const [open, setOpen] = useState(false);
  const [location, setLocation] = useState('');
  const [movie, setMovie] = useState([]);
  const [scheduleList, setScheduleList] = useState([]);
  const [releaseDate, setReleaseDate] = useState('');
  const [scheduleSelected, setScheduleSelected] = useState({
    idSchedule: '',
    time: '',
    teater: '',
    price: 0,
  });

  const [token, setToken] = useState('');
  // console.log(movie);
  // console.log(date.toISOString().split('T')[0]);

  const getToken = async () => {
    try {
      const result = await AsyncStorage.getItem('token');
      setToken(result);
    } catch (err) {}
  };
  // console.log(token, 'state token');

  const getMovie = async id => {
    try {
      const res = await axios.get(`/movie/${id}`);
      setMovie(res.data.data[0]);
      setReleaseDate(
        res.data.data[0].releaseDate.split('T')[0].split('-').join('/'),
      );
    } catch (err) {
      console.log(err);
    }
  };

  const getSchedule = async (page, limit, location, sort, movie_id) => {
    try {
      const schedule = await axios.get(
        `/schedule/all?page=${page}&limit=${limit}&location=${location}&sort=${sort}&movie_id=${movie_id}`,
      );
      setScheduleList(schedule.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getToken();
    getMovie(props.route.params.params.idMovie);
    getSchedule(1, 3, location, 'DESC', props.route.params.params.idMovie);
  }, [props.route.params, location, token]);

  const toOrder = () => {
    if (token) {
      scheduleSelected.time && scheduleSelected.teater
        ? props.navigation.navigate('Order', {
            params: {
              idMovie: movie.id_movie,
              movie: movie.movie_name,
              schedule: scheduleSelected,
              date: date.toISOString().split('T')[0],
            },
          })
        : alert('Please choose time first before continue');
    } else {
      alert('Login first');
      props.navigation.navigate('AuthScreen', {screen: 'Login'});
    }
  };

  return (
    <ScrollView>
      <View style={s.wrapper}>
        <View style={s.detailHeader}>
          <View style={s.cardBanner}>
            <Image
              style={s.movieBanner}
              source={
                movie.image
                  ? {
                      uri: `${API_BACKEND}uploads/movie/${movie.image}`,
                    }
                  : require('../../assets/images/default.jpg')
              }
            />
          </View>
          <Text style={s.titelMovie}>{movie.movie_name}</Text>
          <Text style={s.genre}>{movie.category}</Text>
        </View>
        <View style={s.detailMovie}>
          <View style={s.detailLeft}>
            <Text style={s.detailInfo}>Release Date</Text>
            <Text style={s.detailValue}>{releaseDate}</Text>
            <Text style={[s.detailInfo, {marginTop: 16}]}>Duration</Text>
            <Text style={s.detailValue}>{movie.duration}</Text>
          </View>
          <View style={s.detailRight}>
            <Text style={s.detailInfo}>Directed by</Text>
            <Text style={s.detailValue}>{movie.director}</Text>
            <Text style={[s.detailInfo, {marginTop: 16}]}>Casts</Text>
            <Text style={s.detailValue}>{movie.cast}</Text>
          </View>
        </View>
        <View style={s.synopsis}>
          <View>
            <Text style={s.synopsisTitle}>Synopsis</Text>
          </View>
          <View>
            <Text style={s.synopsisContent}>{movie.synopsis}</Text>
          </View>
        </View>
        <View style={s.setMenu}>
          <DatePicker
            modal
            mode={'date'}
            open={open}
            date={date}
            onConfirm={date => {
              setOpen(false);
              setDate(date);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />

          <TouchableOpacity onPress={() => setOpen(true)} style={s.btnSetDate}>
            <Text style={s.textSetDate}>Set a date</Text>
          </TouchableOpacity>

          <View style={s.picker}>
            <Picker
              selectedValue={location}
              onValueChange={(itemValue, itemIndex) => setLocation(itemValue)}>
              <Picker.Item label="All location" value="" />
              <Picker.Item
                style={s.pickerItem}
                label="Jakarta"
                value="jakarta"
              />
              <Picker.Item label="Bogor" value="bogor" />
              <Picker.Item label="Bandung" value="bandung" />
            </Picker>
          </View>
        </View>

        {/* card schedule === looping */}
        {scheduleList.length > 0 ? (
          scheduleList.map(item => (
            <View style={s.scheduleList} key={item.id_schedule}>
              <View style={s.cardSchedule}>
                <View style={s.headerSchedule}>
                  <Image
                    source={
                      item.teater_name === 'hiflix'
                        ? require('../../assets/images/hiflix.png')
                        : item.teater_name === 'cinepolis'
                        ? require('../../assets/images/cineone.png')
                        : require('../../assets/images/ebv.png')
                    }
                  />
                  <View>
                    <Text style={s.address}>{item.location}</Text>
                  </View>
                  <View style={s.listTime}>
                    {item.time_schedule.map(list => (
                      <Text
                        key={list}
                        onPress={() =>
                          setScheduleSelected({
                            idSchedule: item.id_schedule,
                            time: list,
                            teater: item.teater_name,
                            price: item.price,
                          })
                        }
                        style={[
                          s.time,
                          item.id_schedule === scheduleSelected.idSchedule &&
                          list === scheduleSelected.time
                            ? s.selectedTime
                            : null,
                        ]}>
                        {list}
                      </Text>
                    ))}
                  </View>
                  <View style={s.priceList}>
                    <Text
                      style={{
                        color: '#6B6B6B',
                        fontSize: 22,
                        fontWeight: '600',
                      }}>
                      Price
                    </Text>
                    <Text
                      style={{
                        color: '#000000',
                        fontSize: 22,
                        fontWeight: '600',
                      }}>
                      {`Rp. ${item.price}/seat`}
                    </Text>
                  </View>
                </View>
                <TouchableOpacity onPress={toOrder} style={s.btnBook}>
                  <Text style={s.textBook}>Book now</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))
        ) : (
          <Text>no schedule</Text>
        )}

        {/* ================================== */}
      </View>
      <Footer />
    </ScrollView>
  );
}

export default DetailMovie;
