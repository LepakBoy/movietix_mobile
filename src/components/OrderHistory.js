import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
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

function OrderHistory(props) {
  const user = useSelector(state => state.user.user);
  const [data, setData] = useState(props.dataHistory);

  const toTicket = id => {
    props.navigation.navigate('Ticket', {
      params: {idTicket: id},
    });
  };

  return (
    <View>
      <View style={s.wrapper}>
        {/* looping order list */}
        {data.length > 0 ? (
          <FlatList
            data={data}
            renderItem={({item}) => (
              <View style={s.cardHistory}>
                <Image
                  source={
                    item.teater_name === 'cineone'
                      ? require('../assets/images/cineone.png')
                      : item.teater_name === 'hiflix'
                      ? require('../assets/images/hiflix.png')
                      : require('../assets/images/ebv.png')
                  }
                />
                <Text style={s.teaterName}>
                  {`${item.date_booking.split('T')[0]}, ${item.time_booking}`}
                </Text>
                <Text style={s.movieName}>{item.movie_name}</Text>
                <TouchableOpacity
                  onPress={() => toTicket(item.id_booking)}
                  style={s.ticketStatus}>
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
    </View>
  );
}

export default OrderHistory;
