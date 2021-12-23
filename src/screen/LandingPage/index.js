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
// import {useSelector, useDispatch} from 'react-redux';

import styles from './style';

import Footer from '../../components/Footer';
import axios from '../../utils/axios';
import {API_BACKEND} from '@env';

const MONTH = [
  {name: 'All Movies', count: ''},
  {name: 'January', count: 1},
  {name: 'February', count: 2},
  {name: 'March', count: 3},
  {name: 'April', count: 4},
  {name: 'May', count: 5},
  {name: 'June', count: 6},
  {name: 'July', count: 7},
  {name: 'August ', count: 8},
  {name: 'September', count: 9},
  {name: 'October', count: 10},
  {name: 'November', count: 11},
  {name: 'Desember', count: 12},
];

function LandingPage(props) {
  const [count, setCount] = useState('');
  const [movies, setMovies] = useState([]);
  const [upComingList, setUpComingList] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const toDetailMovie = id => {
    props.navigation.navigate('DetailMovie', {
      params: {idMovie: id},
    });
  };

  const handleRefresh = () => {
    console.log('refresh');
  };

  async function getMovie() {
    try {
      const date = new Date().toISOString().split('-')[1];
      const res = await axios.get(`/movie/all?filter=${date}`);
      setMovies(res.data.data);
    } catch (err) {
      console.log(err);
    }
  }

  const getUpcoming = async () => {
    try {
      const upComing = await axios.get(`/movie/all?filter=${count}`);
      // console.log(upComing.data.data, 'data');
      setUpComingList(upComing.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  // console.log(upComingList, 'upcominglist');

  useEffect(() => {
    getMovie();
    getUpcoming();
    console.log(API_BACKEND, 'api');
  }, [count]);

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
                        uri: `${API_BACKEND}uploads/movie/${item.image}`,
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
              <Text numberOfLines={1} ellipsizeMode="tail" style={styles.genre}>
                {item.category}
              </Text>
              <TouchableOpacity
                style={styles.btnDetail}
                onPress={() => toDetailMovie(item.id_movie)}>
                <Text style={styles.textDetail}>Details</Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={item => item.id_movie}
        />

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
            <TouchableOpacity
              style={[
                styles.monthList,
                count === item.count ? styles.selectedMonth : null,
              ]}
              onPress={() => {
                setCount(item.count);
              }}>
              <Text
                style={[
                  [styles.textMonth],
                  count === item.count ? styles.textWhite : null,
                ]}>
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.name}
        />

        <FlatList
          horizontal
          onRefresh={handleRefresh}
          refreshing={refresh}
          data={upComingList}
          renderItem={({item}) => (
            <View style={styles.cardUpComing}>
              <Image
                style={styles.imageShowing}
                source={
                  item.image
                    ? {
                        uri: `${API_BACKEND}uploads/movie/${item.image}`,
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
              <Text numberOfLines={1} ellipsizeMode="tail" style={styles.genre}>
                {item.category}
              </Text>
              {/* <TouchableOpacity
                style={styles.btnDetail}
                onPress={toDetailMovie}>
                <Text style={styles.textDetail}>Details</Text>
              </TouchableOpacity> */}
            </View>
          )}
          keyExtractor={item => item.id_movie}
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
