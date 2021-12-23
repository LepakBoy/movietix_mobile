import React, {useState, useEffect} from 'react';
import s from './style';
import axios from '../../utils/axios';
import QRCode from 'react-native-qrcode-svg';
import {API_BACKEND} from '@env';
import {ScrollView, View, Text, TouchableOpacity} from 'react-native';

import Footer from '../../components/Footer';
import {cos} from 'react-native-reanimated';

function Ticket(props) {
  const [dataOrder, setDataOrder] = useState({});

  async function getTicket(id) {
    try {
      const res = await axios.get(`/booking/${id}`);
      setDataOrder(res.data.data);
    } catch (err) {}
  }

  useEffect(() => {
    getTicket(props.route.params.params.idTicket);
  }, [props.route.params.params]);

  const toProfile = () => {
    props.navigation.navigate('Profile');
  };

  return (
    <ScrollView>
      <View style={s.wrapper}>
        <View style={s.barcodeArea}>
          {/* <View style={s.barcode} /> */}
          <QRCode
            value={`${API_BACKEND}booking/ticket/${dataOrder.id_booking}`}
            size={200}
          />
        </View>

        <View style={s.ticketInfo}>
          <View style={s.wrapperTicketInfo}>
            <View style={s.left}>
              <Text style={s.lable}>Movie</Text>
              <Text style={[s.value]}>
                {dataOrder.movie_name ? dataOrder.movie_name : null}
              </Text>
              <Text style={[s.lable, {marginTop: 18}]}>Date</Text>
              <Text style={s.value}>
                {dataOrder.date_booking
                  ? dataOrder.date_booking?.split('T')[0]
                  : null}
              </Text>
              <Text style={[s.lable, {marginTop: 18}]}>Count</Text>
              <Text style={s.value}>{`${dataOrder.seat?.length} pcs`}</Text>
            </View>
            <View style={s.right}>
              <Text style={s.lable}>Time</Text>
              <Text style={s.value}>{dataOrder.time_booking}</Text>
              <Text style={[s.lable, {marginTop: 18}]}>Seats</Text>
              <Text style={s.value}>
                {dataOrder.seat ? dataOrder.seat?.join(', ') : null}
              </Text>
            </View>
          </View>
          <View style={s.totalArea}>
            <View style={s.totalWrapper}>
              <Text style={s.textTotal}>Total</Text>
              <Text
                style={s.textTotal}>{`Rp. ${dataOrder.payment_total}`}</Text>
            </View>
            <TouchableOpacity style={s.btnDone} onPress={toProfile}>
              <Text style={s.textWhite}>Done</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
}
{
  /* <Text style={s.lable}>Category</Text>
              <Text style={s.value}>PG-13</Text> */
}

export default Ticket;
