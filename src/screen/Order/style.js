import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  wrapper: {
    paddingVertical: 28,
    paddingHorizontal: 12,
  },
  label: {
    color: '#14142B',
    fontSize: 18,
    fontWeight: '600',
  },
  subLabel: {
    color: '#000000',
    fontSize: 16,
  },
  content: {
    marginTop: 22,
    padding: 18,
    paddingVertical: 28,
    backgroundColor: 'white',
    borderRadius: 6,
    // height: 400,
  },
  seatPicker: {
    backgroundColor: 'red',
    height: 190,
    justifyContent: 'center',
    alignItems: 'center',
  },
  keyLeft: {
    width: '50%',
    height: 100,
  },
  keyRight: {
    width: '50%',
    height: 100,
  },
  keyHeader: {
    marginLeft: 12,
    fontSize: 14,
    fontWeight: '500',
  },
  btnReset: {
    marginTop: 22,
    borderRadius: 6,
    height: 36,
    backgroundColor: '#5F2EEA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  keySeat: {
    width: 22,
    height: 22,
    borderRadius: 4,
  },
  available: {
    backgroundColor: '#D6D8E7',
  },
  loveSeat: {
    backgroundColor: '#F589D7',
  },
  selected: {
    backgroundColor: '#5F2EEA',
  },
  sold: {
    backgroundColor: '#6E7191',
  },
  orderHeader: {
    marginTop: 22,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  teaterLogo: {
    // width: '100%',
    // height: 'auto',
  },
  teaterName: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: '600',
  },
  movieName: {
    fontSize: 16,
    fontWeight: '600',
  },
  detailOrder: {
    marginTop: 24,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  leftSide: {
    width: '50%',
  },
  rightSide: {
    width: '50%',
  },
  textLeft: {
    color: '#6B6B6B',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 8,
  },
  textRight: {
    textAlign: 'right',
    fontSize: 16,
    color: '#14142B',
    fontWeight: '600',
    marginTop: 8,
  },
  priceContent: {
    marginTop: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  total: {
    fontSize: 24,
    fontWeight: '600',
  },
  amount: {
    fontSize: 24,
    fontWeight: '600',
    color: '#5F2EEA',
  },
  btnCheckout: {
    marginTop: 22,
    height: 42,
    backgroundColor: '#5F2EEA',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBtn: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  btnArea: {
    justifyContent: 'center',
    height: 150,
  },
  orderContent: {
    marginTop: 22,
    padding: 18,
    paddingVertical: 28,
    backgroundColor: 'white',
    borderRadius: 6,
    // height: 400,
  },
  footer: {
    width: '100%',
    height: 400,
    backgroundColor: 'white',
  },
});
