/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import s from './style';

import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';

import Footer from '../../components/Footer';

import DatePicker from 'react-native-date-picker';
import {Picker} from '@react-native-picker/picker';
import axios from '../../utils/axios';

function DetailMovie(props) {
  //state DatePicker
  const [date, setDate] = useState(new Date(Date.now()));
  const [open, setOpen] = useState(false);
  // state picker
  const [selectedLanguage, setSelectedLanguage] = useState();

  const [movie, setMovie] = useState([]);
  const [scheduleList, setScheduleList] = useState([]);

  console.log(scheduleList, 'jadwal');

  // const releaseDate = movie.releaseDate.split('T')[0];

  const getMovie = async id => {
    try {
      const res = await axios.get(`/movie/${id}`);
      setMovie(res.data.data[0]);
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
    getMovie(props.route.params.idMovie);
    getSchedule(1, 3, '', 'DESC', props.route.params.idMovie);
  }, [props.route.params]);

  // const toOrder = () => {
  //   props.navigation.navigate('Order');
  // };
  // state datePicker

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
                      uri: `http://192.168.100.4:3000/uploads/movie/${movie.image}`,
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
            <Text style={s.detailValue}>{movie.releaseDate}</Text>
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
            mode="date"
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
              selectedValue={selectedLanguage}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
              }>
              <Picker.Item
                style={s.pickerItem}
                label="Jakarta"
                value="jakarta"
              />
              <Picker.Item label="Bogor" value="bogor" />
              <Picker.Item label="Bandung" value="bandung" />
              <Picker.Item label="Bogor" value="bogor" />
              <Picker.Item label="Bandung" value="bandung" />
              <Picker.Item label="Bogor" value="bogor" />
              <Picker.Item label="Bandung" value="bandung" />
              <Picker.Item label="Bogor" value="bogor" />
            </Picker>
          </View>

          {/* <TouchableOpacity style={s.btnSetDate}>
          <Text style={s.textSetDate}>Set a city</Text>
        </TouchableOpacity> */}
        </View>

        {/* card schedule === looping */}
        {scheduleList.length > 0 ? (
          <FlatList
            data={scheduleList}
            renderItem={({item}) => (
              <View style={s.scheduleList}>
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
                      {/* {
                        <FlatList
                          style={s.listTime}
                          data={item.time_schedule}
                          renderItem={({list}) => (
                            <Text style={s.time}>{item.time_schedule}</Text>
                          )}
                          keyExtractor={item => item.id_schedule}
                        />
                      } */}

                      <Text style={s.time}>08.00am</Text>
                      <Text style={s.time}>08.00am</Text>
                      <Text style={s.time}>08.00am</Text>
                      <Text style={s.time}>08.00am</Text>
                      <Text style={s.time}>08.00am</Text>
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
                        $10.00/seat
                      </Text>
                    </View>
                  </View>
                  <TouchableOpacity style={s.btnBook}>
                    <Text style={s.textBook}>Book now</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
            keyExtractor={item => item.id_schedule}
          />
        ) : (
          <Text>no data</Text>
        )}

        {/* ================================== */}
      </View>
      <Footer />
    </ScrollView>
  );
}

export default DetailMovie;
