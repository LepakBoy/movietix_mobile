/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ScrollView, View, Text, Image} from 'react-native';
import styles from './style';

function LandingPage() {
  return (
    <ScrollView style={styles.wrapper}>
      <View>
        <Text style={styles.textHeaderOne}>Nearest Cinema, Newest Movie.</Text>
        <Text style={styles.textJumbo}>Find out now!</Text>
      </View>
      <View style={styles.imageJumboSec}>
        <Image
          style={styles.imageJumbo}
          source={require('../../assets/images/jumbotron-img.png')}
        />
      </View>
      <View style={{marginTop: 12}}>
        <View style={styles.showingHeader}>
          <Text style={styles.textShowing}>Now Showing</Text>
          <Text style={styles.textViewAll}>view all</Text>
        </View>
      </View>
      <ScrollView style={styles.wrapperShowing}>
        <View style={styles.cardShowing}>
          <Image
            style={styles.imageShowing}
            source={require('../../assets/images/fast9.jpg')}
          />
        </View>
        <View style={styles.cardShowing}>
          <Image
            style={styles.imageShowing}
            source={require('../../assets/images/fast9.jpg')}
          />
        </View>
        <View style={styles.cardShowing}>
          <Image
            style={styles.imageShowing}
            source={require('../../assets/images/fast9.jpg')}
          />
        </View>
      </ScrollView>
    </ScrollView>
  );
}
export default LandingPage;
