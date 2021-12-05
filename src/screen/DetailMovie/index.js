/* eslint-disable react-native/no-inline-styles */
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

import Footer from '../../components/Footer';

import DatePicker from 'react-native-date-picker';
import {Picker} from '@react-native-picker/picker';

function DetailMovie(props) {
  const toOrder = () => {
    props.navigation.navigate('Order');
  };
  // state datePicker
  const [date, setDate] = useState(new Date(Date.now()));
  const [open, setOpen] = useState(false);
  // state picker
  const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <ScrollView>
      <View style={s.wrapper}>
        <View style={s.detailHeader}>
          <View style={s.cardBanner}>
            <Image
              style={s.movieBanner}
              source={require('../../assets/images/mv2.jpg')}
            />
          </View>
          <Text style={s.titelMovie}>Spider-Man Homecoming</Text>
          <Text style={s.genre}>Adventure, Action, Sci-Fi</Text>
        </View>
        <View style={s.detailMovie}>
          <View style={s.detailLeft}>
            <Text style={s.detailInfo}>Release Date</Text>
            <Text style={s.detailValue}>June 28, 2017</Text>
            <Text style={[s.detailInfo, {marginTop: 16}]}>Duration</Text>
            <Text style={s.detailValue}>2 hrs 13 min</Text>
          </View>
          <View style={s.detailRight}>
            <Text style={s.detailInfo}>Directed by</Text>
            <Text style={s.detailValue}>Jon Watss</Text>
            <Text style={[s.detailInfo, {marginTop: 16}]}>Casts</Text>
            <Text style={s.detailValue}>
              Tom Holland, Robert Downey Jr., etc.
            </Text>
          </View>
        </View>
        <View style={s.synopsis}>
          <View>
            <Text style={s.synopsisTitle}>Synopsis</Text>
          </View>
          <View>
            <Text style={s.synopsisContent}>
              Thrilled by his experience with the Avengers, Peter returns home,
              where he lives with his Aunt May, under the watchful eye of his
              new mentor Tony Stark, Peter tries to fall back into his normal
              daily routine - distracted by thoughts of proving himself to be
              more than just your friendly neighborhood Spider-Man - but when
              the Vulture emerges as a new villain, everything that Peter holds
              most important will be threatened.{' '}
            </Text>
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
        <View style={s.scheduleList}>
          <View style={s.cardSchedule}>
            <View style={s.headerSchedule}>
              <Image source={require('../../assets/images/ebv.png')} />
              <View>
                <Text style={s.address}>
                  Whatever street No.12, South Purwokerto
                </Text>
              </View>
              <View style={s.listTime}>
                <Text style={s.time}>08.00am</Text>
                <Text style={s.time}>08.00am</Text>
                <Text style={s.time}>08.00am</Text>
                <Text style={s.time}>08.00am</Text>
                <Text style={s.time}>08.00am</Text>
                <Text style={s.time}>08.00am</Text>
                <Text style={s.time}>08.00am</Text>
              </View>
              <View style={s.priceList}>
                <Text
                  style={{color: '#6B6B6B', fontSize: 22, fontWeight: '600'}}>
                  Price
                </Text>
                <Text
                  style={{color: '#000000', fontSize: 22, fontWeight: '600'}}>
                  $10.00/seat
                </Text>
              </View>
            </View>
            <TouchableOpacity style={s.btnBook}>
              <Text style={s.textBook}>Book now</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* ================================== */}

        {/* card schedule === looping */}
        <View style={s.scheduleList}>
          <View style={s.cardSchedule}>
            <View style={s.headerSchedule}>
              <Image source={require('../../assets/images/ebv.png')} />
              <View>
                <Text style={s.address}>
                  Whatever street No.12, South Purwokerto
                </Text>
              </View>
              <View style={s.listTime}>
                <Text style={s.time}>08.00am</Text>
                <Text style={s.time}>08.00am</Text>
                <Text style={s.time}>08.00am</Text>
                <Text style={s.time}>08.00am</Text>
                <Text style={s.time}>08.00am</Text>
                <Text style={s.time}>08.00am</Text>
                <Text style={s.time}>08.00am</Text>
              </View>
              <View style={s.priceList}>
                <Text
                  style={{color: '#6B6B6B', fontSize: 20, fontWeight: '600'}}>
                  Price
                </Text>
                <Text
                  style={{color: '#000000', fontSize: 20, fontWeight: '600'}}>
                  $10.00/seat
                </Text>
              </View>
            </View>
            <TouchableOpacity onPress={toOrder} style={s.btnBook}>
              <Text style={s.textBook}>Book now</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* ================================== */}
      </View>
      <Footer />
    </ScrollView>
  );
}

export default DetailMovie;
