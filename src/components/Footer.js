import React from 'react';
import s from '../assets/styles/footer';

import {View, Text, Image} from 'react-native';

function Footer() {
  return (
    <View style={s.footer}>
      <Image source={require('../assets/images/Tickitz.png')} />
      <Text style={[s.textGrey, {marginTop: 12}]}>
        Stop waiting in line. Buy tickets conveniently, watch movies quietly.
      </Text>
      <Text style={[s.labelFooter, {marginTop: 28}]}>Our Sponsor</Text>
      <View style={s.logoArea}>
        <Image
          style={[{marginHorizontal: 8}, s.logo]}
          source={require('../assets/images/cineone.png')}
        />
        <Image
          style={[{marginHorizontal: 8}, s.logo]}
          source={require('../assets/images/hiflix.png')}
        />
        <Image
          style={[{marginHorizontal: 8}, s.logo]}
          source={require('../assets/images/ebv.png')}
        />
      </View>
    </View>
  );
}

export default Footer;
