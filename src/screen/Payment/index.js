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
} from 'react-native';

import Footer from '../../components/Footer';

function Payment(props) {
  // const [totalPrice, setTotalPrice] = useState(0);
  // const [seat, setSeat] = useState([]);
  // const [idMovie, setIdMovie] = useState('');
  // const [idSchedule, setIdSchedule] = useState('');
  // const [time, setTime] = useState('initialState');
  // const [date, setDate] = useState('');

  const user = useSelector(state => state.user.user);
  const fullName = `${user.first_name} ${user.last_name}`;
  // console.log(user, fullName);
  const [dataOrder, setDataOrder] = useState({});
  useEffect(() => {
    // console.log(props.route.params);
    setDataOrder(props.route.params);
  }, [props.route.params]);

  return (
    <>
      <View style={s.totalPayment}>
        <Text style={s.textTotal}>Total Payment</Text>
        <Text style={s.textAmount}>{`Rp. ${dataOrder.totalPrice}`}</Text>
      </View>

      <ScrollView>
        <View style={s.wrapper}>
          <Text style={s.label}>Payment Method</Text>
          <View style={s.paymentContent}>
            <View style={s.cardMethod}>
              <Image
                style={s.imgCard}
                source={require('../../assets/images/dana.png')}
              />
            </View>
            <View style={s.cardMethod}>
              <Image
                style={s.imgCard}
                source={require('../../assets/images/google-pay.png')}
              />
            </View>
            <View style={s.cardMethod}>
              <Image
                style={s.imgCard}
                source={require('../../assets/images/paypal.png')}
              />
            </View>
            <View style={s.cardMethod}>
              <Image
                style={s.imgCard}
                source={require('../../assets/images/bca.png')}
              />
            </View>
            <View style={s.cardMethod}>
              <Image
                style={s.imgCard}
                source={require('../../assets/images/gopay.png')}
              />
            </View>
            <View style={s.cardMethod}>
              <Image
                style={s.imgCard}
                source={require('../../assets/images/visa.png')}
              />
            </View>
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
            <TouchableOpacity style={s.btnPay}>
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
