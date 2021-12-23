import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
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
import axios from '../../utils/axios';

function Payment(props) {
  const [payment, setPayment] = useState('');
  const user = useSelector(state => state.user.user);
  const fullName = `${user.first_name} ${user.last_name}`;
  const [total, setTotal] = useState(0);
  const [dataOrder, setDataOrder] = useState({});

  useEffect(() => {
    setDataOrder(props.route.params.params.dataOrder);
    setTotal(props.route.params.params.totalPrice);
  }, []);

  const handleBooking = async () => {
    try {
      if (payment === '') {
        alert('Please choose payment method');
        return;
      }
      const res = await axios.post('/booking', dataOrder);

      alert('Success booking');
      props.navigation.navigate('Ticket', {
        params: {
          idTicket: res.data.data.result.id_booking,
        },
      });
    } catch (err) {
      console.log(err);
    }
  };

  console.log(payment);

  return (
    <>
      <View style={s.totalPayment}>
        <Text style={s.textTotal}>Total Payment</Text>
        <Text style={s.textAmount}>{`Rp. ${total}`}</Text>
      </View>

      <ScrollView>
        <View style={s.wrapper}>
          <Text style={s.label}>Payment Method</Text>
          <View style={s.paymentContent}>
            <TouchableOpacity
              style={[s.cardMethod, payment === 'dana' ? s.active : null]}
              onPress={() => setPayment('dana')}>
              <Image
                style={s.imgCard}
                source={require('../../assets/images/dana.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setPayment('gpay')}
              style={[s.cardMethod, payment === 'gpay' ? s.active : null]}>
              <Image
                style={s.imgCard}
                source={require('../../assets/images/google-pay.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setPayment('paypal')}
              style={[s.cardMethod, payment === 'paypal' ? s.active : null]}>
              <Image
                style={s.imgCard}
                source={require('../../assets/images/paypal.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setPayment('bca')}
              style={[s.cardMethod, payment === 'bca' ? s.active : null]}>
              <Image
                style={s.imgCard}
                source={require('../../assets/images/bca.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setPayment('gopay')}
              style={[s.cardMethod, payment === 'gopay' ? s.active : null]}>
              <Image
                style={s.imgCard}
                source={require('../../assets/images/gopay.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setPayment('visa')}
              style={[s.cardMethod, payment === 'visa' ? s.active : null]}>
              <Image
                style={s.imgCard}
                source={require('../../assets/images/visa.png')}
              />
            </TouchableOpacity>
            <View style={{width: '100%'}}>
              <Text style={s.or}>Or</Text>
              <Text style={[s.or, {fontSize: 16, fontWeight: '600'}]}>
                Pay via cash. See how it work
              </Text>
            </View>
          </View>
          <Text style={[s.label, {marginTop: 62}]}>Personal Info</Text>
          <View style={s.personalContent}>
            <Text style={s.labelPersonal}>Full Name</Text>
            <TextInput
              placeholder="Type your name"
              defaultValue={fullName}
              style={s.inputText}
            />
            <Text style={[s.labelPersonal, {marginTop: 18}]}>Email</Text>
            <TextInput
              placeholder="Type your email"
              defaultValue={user.email}
              style={s.inputText}
            />
            {/* <Text style={[s.labelPersonal, {marginTop: 18}]}>Phone Number</Text>
            <TextInput
              placeholder="Type your phone number"
              defaultValue=""
              style={s.inputText}
            /> */}
            {/* <View style={s.warn}>
              <Image source={require('../../assets/images/warn.png')} />
              <Text style={s.textWarn}>Fill your data correctly</Text>
            </View> */}
          </View>
          <View style={s.btnArea}>
            <TouchableOpacity style={s.btnPay} onPress={handleBooking}>
              <Text style={s.textPay}>Pay your order</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Footer />
      </ScrollView>
    </>
  );
}
export default Payment;
