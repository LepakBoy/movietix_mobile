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
  titelMovie: {marginTop: 36, fontSize: 24, fontWeight: '600'},
  genre: {
    fontSize: 16,
    fontWeight: '500',
    color: '#4E4B66',
  },
  detailMovie: {
    marginTop: 36,
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
    marginTop: 48,
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
    fontSize: 17,
  },
  setMenu: {
    height: 200,
  },
  btnSetDate: {
    paddingLeft: 14,
    marginTop: 20,
    width: '100%',
    height: 46,
    backgroundColor: '#F5F6F8',
    justifyContent: 'center',

    // borderRadius: 8,
  },
  textSetDate: {
    fontSize: 16,
    fontWeight: '600',
  },
  picker: {
    marginTop: 18,
    borderRadius: 8,
    backgroundColor: '#F5F6F8',
    color: 'white',
  },
  pickerItem: {
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
  },
  scheduleList: {
    // height: 800,
  },
  headerSchedule: {
    alignItems: 'center',
  },
  logoTeater: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardSchedule: {
    marginVertical: 22,
    paddingVertical: 36,
    borderRadius: 6,
    borderColor: '#DEDEDE',
    borderWidth: 1,
    padding: 12,
    backgroundColor: 'white',
    width: '100%',
    // height: 500,
  },
  address: {
    marginTop: 18,
    color: '#AAAAAA',
    fontSize: 16,
  },
  listTime: {
    marginTop: 36,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  time: {
    fontWeight: '500',
    fontSize: 16,
    marginHorizontal: 18,
    marginVertical: 6,
    color: 'black',
  },
  priceList: {
    paddingHorizontal: 16,
    marginTop: 22,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnBook: {
    marginTop: 48,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#5F2EEA',
    height: 42,
    borderRadius: 8,
  },
  textBook: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
});
