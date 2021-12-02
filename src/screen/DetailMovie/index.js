import React from 'react';
import s from './style';

import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';

function DetailMovie() {
  return (
    <ScrollView style={s.wrapper}>
      <View style={s.detailHeader}>
        <View style={s.cardBanner}>
          <Image
            style={s.movieBanner}
            source={require('../../assets/images/mv2.jpg')}
          />
        </View>
        <Text style={s.titelMovie}>Spider-Man Homecoming</Text>
        <Text style={s.genre}>Adventure, Action, Sci-Fi</Text>
      </View>
      <View style={s.detailMovie}>
        <View style={s.detailLeft}>
          <Text style={s.detailInfo}>Release Date</Text>
          <Text style={s.detailValue}>June 28, 2017</Text>
          <Text style={[s.detailInfo, {marginTop: 16}]}>Duration</Text>
          <Text style={s.detailValue}>2 hrs 13 min</Text>
        </View>
        <View style={s.detailRight}>
          <Text style={s.detailInfo}>Directed by</Text>
          <Text style={s.detailValue}>Jon Watss</Text>
          <Text style={[s.detailInfo, {marginTop: 16}]}>Casts</Text>
          <Text style={s.detailValue}>
            Tom Holland, Robert Downey Jr., etc.
          </Text>
        </View>
      </View>
      <View style={s.synopsis}>
        <View>
          <Text style={s.synopsisTitle}>Synopsis</Text>
        </View>
        <View>
          <Text style={s.synopsisContent}>
            Thrilled by his experience with the Avengers, Peter returns home,
            where he lives with his Aunt May, under the watchful eye of his new
            mentor Tony Stark, Peter tries to fall back into his normal daily
            routine - distracted by thoughts of proving himself to be more than
            just your friendly neighborhood Spider-Man - but when the Vulture
            emerges as a new villain, everything that Peter holds most important
            will be threatened.{' '}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

export default DetailMovie;
