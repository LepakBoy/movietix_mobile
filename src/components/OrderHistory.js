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

function OrderHistory(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(props.dataHistory);
  }, []);

  console.log(data);
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
