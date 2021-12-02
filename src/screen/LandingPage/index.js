/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import styles from './style';

// const MONTH = [
//   {name: 'January'},
//   {name: 'February'},
//   {name: 'March'},
//   {name: 'April'},
//   {name: 'May'},
//   {name: 'June'},
//   {name: 'July'},
//   {name: 'August'},
//   {name: 'September'},
//   {name: 'October'},
//   {name: 'November'},
//   {name: 'Desember'},
// ];

// const itemMonth = ({name}) => (
//   <View style={styles.monthList}>
//     <Text style={styles.textMonth}>{name}</Text>
//   </View>
// );

function LandingPage(props) {
  const toDetailMovie = () => {
    props.navigation.navigate('DetailMovie');
    // props.navigation.navigate('Register');
  };

  // const renderMonth = ({item}) => <itemMonth title={item.name} />;
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
      <ScrollView horizontal style={styles.wrapperShowing}>
        <View style={styles.cardShowing}>
          <Image
            style={styles.imageShowing}
            source={require('../../assets/images/lacasa.jpg')}
          />
        </View>
        <View style={styles.cardShowing}>
          <Image
            style={styles.imageShowing}
            source={require('../../assets/images/lacasa.jpg')}
          />
        </View>
        <View style={styles.cardShowing}>
          <Image
            style={styles.imageShowing}
            source={require('../../assets/images/lacasa.jpg')}
          />
        </View>
      </ScrollView>
      <View>
        <View style={styles.showingHeader}>
          <Text style={styles.textShowing}>Upcoming Movies</Text>
          <Text style={styles.textViewAll}>view all</Text>
        </View>
      </View>
      {/* month list */}
      {/* <FlatList
        data={MONTH}
        renderItem={renderMonth}
        keyExtractor={item => item.index}
      /> */}
      <ScrollView horizontal style={{padding: 8}}>
        <View style={styles.monthList}>
          <Text style={styles.textMonth}>January</Text>
        </View>
        <View style={styles.monthList}>
          <Text style={styles.textMonth}>January</Text>
        </View>
        <View style={styles.monthList}>
          <Text style={styles.textMonth}>January</Text>
        </View>
        <View style={styles.monthList}>
          <Text style={styles.textMonth}>January</Text>
        </View>
        <View style={styles.monthList}>
          <Text style={styles.textMonth}>January</Text>
        </View>
        <View style={styles.monthList}>
          <Text style={styles.textMonth}>January</Text>
        </View>
        <View style={styles.monthList}>
          <Text style={styles.textMonth}>January</Text>
        </View>
        <View style={styles.monthList}>
          <Text style={styles.textMonth}>January</Text>
        </View>
        <View style={styles.monthList}>
          <Text style={styles.textMonth}>January</Text>
        </View>
        <View style={styles.monthList}>
          <Text style={styles.textMonth}>January</Text>
        </View>
        <View style={styles.monthList}>
          <Text style={styles.textMonth}>December</Text>
        </View>
      </ScrollView>
      <ScrollView horizontal style={styles.wrapperShowing}>
        <View style={styles.cardUpComing}>
          <Image
            style={styles.imageShowing}
            source={require('../../assets/images/mv2.jpg')}
          />
          <Text style={styles.titleUpComing}>Black Widow</Text>
          <Text style={styles.genre}>Action, Adventure, Sci-Fi</Text>
          <TouchableOpacity style={styles.btnDetail} onPress={toDetailMovie}>
            <Text style={styles.textDetail}>Details</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cardUpComing}>
          <Image
            style={styles.imageShowing}
            source={require('../../assets/images/mv2.jpg')}
          />
          <Text style={styles.titleUpComing}>Black Widow</Text>
          <Text style={styles.genre}>Action, Adventure, Sci-Fi</Text>
          <TouchableOpacity style={styles.btnDetail} onPress={toDetailMovie}>
            <Text style={styles.textDetail}>Details</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cardUpComing}>
          <Image
            style={styles.imageShowing}
            source={require('../../assets/images/mv2.jpg')}
          />
          <Text style={styles.titleUpComing}>Black Widow</Text>
          <Text style={styles.genre}>Action, Adventure, Sci-Fi</Text>
          <TouchableOpacity style={styles.btnDetail} onPress={toDetailMovie}>
            <Text style={styles.textDetail}>Details</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={{height: 500}}>
        <View style={{marginTop: 30}}>
          <Text style={{marginTop: 30, textAlign: 'center', fontSize: 15}}>
            Be the vanguard of the Moviegoers
          </Text>
          <Text
            style={{
              marginTop: 10,
              textAlign: 'center',
              fontSize: 32,
              color: '#5F2EEA',
              fontWeight: '700',
            }}>
            Moviegoers
          </Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <TextInput style={styles.inputText} placeholder="Type your email" />
          <TouchableOpacity style={styles.btnJoin}>
            <Text style={styles.textjoin}>join now</Text>
          </TouchableOpacity>
          <Text style={styles.descJoin}>
            By joining you as a Tickitz member, we will always send you the
            latest updates via email .
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
export default LandingPage;
