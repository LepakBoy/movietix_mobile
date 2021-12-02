import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  wrapper: {
    paddingVertical: 28,
    paddingHorizontal: 12,
  },
  detailHeader: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardBanner: {
    padding: 28,
    width: 223,
    height: 308,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  movieBanner: {width: '100%', height: '100%', borderRadius: 8},
  titelMovie: {marginTop: 22, fontSize: 24, fontWeight: '600'},
  genre: {
    fontSize: 16,
    fontWeight: '500',
    color: '#4E4B66',
  },
  detailMovie: {
    marginTop: 22,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailLeft: {
    width: '50%',
  },
  detailRight: {
    width: '50%',
  },
  detailInfo: {
    color: '#8692A6',
    fontSize: 16,
  },
  detailValue: {
    fontSize: 18,
    color: '#121212',
    fontWeight: '500',
  },
  synopsis: {
    marginTop: 32,
    height: 270,
  },
  synopsisTitle: {
    color: '#14142B',
    fontSize: 17,
    fontWeight: '600',
  },
  synopsisContent: {
    marginTop: 22,
    color: '#4E4B66',
    fontSize: 15,
  },
  setMenu: {
    height: 200,
  },
  btnSetDate: {
    marginTop: 20,
    width: '100%',
    height: 46,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  textSetDate: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});
