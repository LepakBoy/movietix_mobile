import React, {useState, useEffect} from 'react';
import s from '../screen/OrderHistory/style';

import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';

import Footer from '.././components/Footer';
import axios from '../utils/axios';

function OrderHistory(props) {
  const [data, setData] = useState([]);
  const [movieHist, setMovieHist] = useState([]);

  // console.log(data);

  // const order = data.map(item => {
  //   // console.log(item.id_movie, 'mapping');
  //   axios.get(`/movie/${item.id_movie}`).then(res => {
  //     setMovieHist(res.data.data);
  //     // console.log(res.data.data, 'data movie order hist');
  //   });
  // });
  // console.log(data, 'order');
  // console.log(order);

  const getMovie = id => {
    const res = axios.get('/movie/');
  };

  useEffect(() => {
    setData(props.dataHistory);
  }, [props.dataHistory]);

  // console.log(data);
  return (
    <ScrollView>
      <View style={s.wrapper}>
        {/* looping order list */}
        {data.length > 0 ? (
          <FlatList
            data={data}
            renderItem={({item}) => (
              <View style={s.cardHistory}>
                <Image source={require('../assets/images/cineone.png')} />
                <Text style={s.teaterName}>
                  {`${item.date_booking.split('T')[0]}, ${item.time_booking}`}
                </Text>
                <Text style={s.movieName}>Spider-Man: Homecoming</Text>
                <TouchableOpacity style={s.ticketStatus}>
                  <Text style={s.status}>Ticket in active</Text>
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={item => item.id_booking}
          />
        ) : (
          <View style={{height: 'auto'}}>
            <Text>no data</Text>
          </View>
        )}

        {/* <View style={s.cardHistory}>
          <Image source={require('../assets/images/cineone.png')} />
          <Text style={s.teaterName}>Tuesday, 07 July 2020 - 04:30pm</Text>
          <Text style={s.movieName}>Spider-Man: Homecoming</Text>
          <TouchableOpacity style={s.ticketStatus}>
            <Text style={s.status}>Ticket in active</Text>
          </TouchableOpacity>
        </View> */}
      </View>
      <Footer />
    </ScrollView>
  );
}

export default OrderHistory;
