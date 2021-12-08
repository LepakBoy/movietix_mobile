/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import styles from './style';

import Footer from '../../components/Footer';
import axios from '../../utils/axios';

const MONTH = [
  {name: 'January'},
  {name: 'February'},
  {name: 'March'},
  {name: 'April'},
  {name: 'May'},
  {name: 'June'},
  {name: 'July'},
  {name: 'August'},
  {name: 'September'},
  {name: 'October'},
  {name: 'November'},
  {name: 'Desember'},
];

function LandingPage(props) {
  const [movies, setMovies] = useState([]);
  const user = useSelector(state => state.user.user);

  const toDetailMovie = id => {
    props.navigation.navigate('AppScreen', {
      screen: 'DetailMovie',
      params: {idMovie: id},
    });
  };

  async function getMovie() {
    try {
      const res = await axios.get('/movie/all');
      setMovies(res.data.data);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getMovie();
  }, []);

  console.log(movies, 'stateeeeee');

  return (
    <ScrollView>
      <View style={styles.wrapper}>
        <View>
          <Text style={styles.textHeaderOne}>
            Nearest Cinema, Newest Movie.
          </Text>
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
        <FlatList
          horizontal
          data={movies}
          renderItem={({item}) => (
            <View style={styles.cardShowing}>
              <Image
                style={styles.imageShowing}
                source={
                  item.image
                    ? {
                        uri: `http://192.168.100.4:3000/uploads/movie/${item.image}`,
                      }
                    : require('../../assets/images/mv3.jpg')
                }
              />
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={styles.titleUpComing}>
                {item.movie_name}
              </Text>
              <Text style={styles.genre}>Action, Adventure, Sci-Fi</Text>
              <TouchableOpacity
                style={styles.btnDetail}
                onPress={() => toDetailMovie(item.id_movie)}>
                <Text style={styles.textDetail}>Details</Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={item => item.id}
        />
        {/* <FlatList
          horizontal
          keyExtractor={item => item.id}
          data={movies}
          renderItem={({item}) => (
            <View style={styles.cardShowing}>
              <Image
                style={styles.imageShowing}
                source={
                  item.image
                    ? {
                        uri: `http://192.168.100.4:3000/uploads/movie/${item.image}`,
                      }
                    : require('../../assets/images/default.jpg')
                }
              />
            </View>
          )}
        /> */}
        <View>
          <View style={styles.showingHeader}>
            <Text style={styles.textShowing}>Upcoming Movies</Text>
            <Text style={styles.textViewAll}>view all</Text>
          </View>
        </View>

        <FlatList
          horizontal
          data={MONTH}
          renderItem={({item}) => (
            <View style={styles.monthList}>
              <Text style={styles.textMonth}>{item.name}</Text>
            </View>
          )}
          keyExtractor={item => item.index}
        />

        <FlatList
          horizontal
          data={movies}
          renderItem={({item}) => (
            <View style={styles.cardUpComing}>
              <Image
                style={styles.imageShowing}
                source={
                  item.image
                    ? {
                        uri: `http://192.168.100.4:3000/uploads/movie/${item.image}`,
                      }
                    : require('../../assets/images/mv3.jpg')
                }
              />
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={styles.titleUpComing}>
                {item.movie_name}
              </Text>
              <Text style={styles.genre}>Action, Adventure, Sci-Fi</Text>
              {/* <TouchableOpacity
                style={styles.btnDetail}
                onPress={toDetailMovie}>
                <Text style={styles.textDetail}>Details</Text>
              </TouchableOpacity> */}
            </View>
          )}
          keyExtractor={item => item.id}
        />
        <View
          style={{
            height: 400,
            backgroundColor: 'white',
            borderRadius: 8,
            marginTop: 42,
          }}>
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
          <View style={{alignItems: 'center', paddingHorizontal: 12}}>
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
      </View>
      <Footer />
    </ScrollView>
  );
}
export default LandingPage;
