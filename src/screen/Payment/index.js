import React, {useState} from 'react';
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

function Payment() {
  return (
    <>
      <View style={s.totalPayment}>
        <Text style={s.textTotal}>Total Payment</Text>
        <Text style={s.textAmount}>$30</Text>
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
              defaultValue=""
              style={s.inputText}
            />
            <Text style={[s.labelPersonal, {marginTop: 18}]}>Email</Text>
            <TextInput
              placeholder="Type your email"
              defaultValue=""
              style={s.inputText}
            />
            <Text style={[s.labelPersonal, {marginTop: 18}]}>Phone Number</Text>
            <TextInput
              placeholder="Type your phone number"
              defaultValue=""
              style={s.inputText}
            />
            <View style={s.warn}>
              <Image source={require('../../assets/images/warn.png')} />
              <Text style={s.textWarn}>Fill your data correctly</Text>
            </View>
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
