import React, {useState, useEffect} from 'react';

import {
  ScrollView,
  View,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import axios from '../../utils/axios';
import {API_BACKEND} from '@env';

import Footer from '../../components/Footer';
import styles from '../LandingPage/style';

function AllMovie(props) {
  const [allMovie, setAllMovie] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(5);
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
  const [last, setLast] = useState(false);

  const getAllMovie = async () => {
    try {
      setRefresh(false);
      setLoading(false);
      setLoadMore(false);
      if (page <= totalPage) {
        const result = await axios.get(`/movie/all?page=${page}&limit=4`);
        if (page === 1) {
          setAllMovie(result.data.data);
        } else {
          setAllMovie([...allMovie, ...result.data.data]);
        }

        setTotalPage(result.data.pagination.totalPage);
      } else {
        setLast(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onRefresh = () => {
    setPage(1);
    setLast(false);
    if (page !== 1) {
      setRefresh(true);
    } else {
      getAllMovie();
    }
  };

  useEffect(() => {
    getAllMovie();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      getAllMovie();
    }, 2000);
  }, [page]);

  const handleLoadMore = () => {
    if (!loadMore) {
      const newPage = page + 1;
      setLoadMore(true);
      if (newPage <= totalPage + 1) {
        setPage(newPage);
        setLoading(true);
      } else {
        setLoading(false);
      }
    }
  };

  return (
    <>
      <View style={styles.container}>
        <ScrollView
          style={{
            padding: 18,
            flexWrap: 'wrap',
            flexDirection: 'row',
            display: 'flex',
          }}>
          <View
            style={{
              width: 400,
              justifyContent: 'center',
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}>
            <FlatList
              onEndReached={handleLoadMore}
              onEndReachedThreshold={0.1}
              ListFooterComponent={() =>
                last ? (
                  <View style={styles.sectionBottom}>
                    <Text
                      style={(styles.sectionBottomText, {textAlign: 'center'})}>
                      -- No more data --
                    </Text>
                  </View>
                ) : loading ? (
                  <ActivityIndicator size="large" color="blue" />
                ) : null
              }
              refreshing={refresh}
              onRefresh={onRefresh}
              style={{
                marginHorizontal: '22%',
                flexDirection: 'row',
                flexWrap: 'wrap',
              }}
              data={allMovie}
              renderItem={({item}) => (
                <View
                  style={{
                    padding: 12,
                    borderRadius: 6,
                    height: 280,
                    backgroundColor: 'white',
                    margin: 12,
                  }}>
                  <Image
                    style={{width: 160, height: 220}}
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
                    style={{
                      textAlign: 'center',
                      marginTop: 12,
                      width: 150,
                      textAlign: 'center',
                    }}>
                    {item.movie_name}
                  </Text>
                </View>
              )}
            />
          </View>
        </ScrollView>
        <View style={{height: 200}}>
          <Footer />
        </View>
      </View>
    </>
  );
}
export default AllMovie;
