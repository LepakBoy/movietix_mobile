import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  wrapper: {
    paddingVertical: 28,
    paddingHorizontal: 12,
  },
  totalPayment: {
    paddingHorizontal: 12,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'white',
    paddingVertical: 12,
    // paddingHorizontal: 10,
  },
  label: {
    color: '#14142B',
    fontSize: 18,
    fontWeight: '600',
  },
  active: {
    borderColor: 'blue',
  },
  subLabel: {
    color: '#000000',
    fontSize: 16,
  },
  textTotal: {
    color: '#AAAAAA',
    fontSize: 18,
  },
  textAmount: {
    color: '#14142B',
    fontSize: 20,
    fontWeight: '600',
  },
  paymentContent: {
    justifyContent: 'space-between',
    alignContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 22,
    marginVertical: 22,
    backgroundColor: 'white',
    borderRadius: 8,
    height: 220,
  },
  cardMethod: {
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 6,
    height: 42,
    // marginTop: 12,
    width: '32%',
    backgroundColor: 'white',
    borderColor: '#DEDEDE',
    borderWidth: 1,
  },

  imgCard: {
    resizeMode: 'stretch',
    // width: '90%',
    // width: 42,
  },
  or: {
    marginTop: 16,
    textAlign: 'center',
  },
  personalContent: {
    marginTop: 22,
    padding: 22,
    backgroundColor: 'white',
    borderRadius: 8,
    height: 400,
  },
  labelPersonal: {
    color: '#696F79',
    fontSize: 16,
  },
  inputText: {
    marginTop: 12,
    borderRadius: 6,
    paddingLeft: 8,
    backgroundColor: 'white',
    width: '100%',
    borderColor: '#DEDEDE',
    borderWidth: 1,
  },
  warn: {
    marginTop: 22,
    backgroundColor: 'rgba(244, 183, 64, 0.3)',
    height: 48,
    paddingHorizontal: 22,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textWarn: {
    marginLeft: 22,
    color: '#4E4B66',
    fontSize: 16,
    textAlign: 'center',
  },
  btnArea: {
    justifyContent: 'center',
    height: 150,
    marginTop: 22,
  },
  btnPay: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5F2EEA',
    height: 52,
    borderRadius: 8,
  },
  textPay: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },
  footer: {
    marginTop: 48,
    width: '100%',
    height: 400,
    backgroundColor: 'white',
  },
  textGrey: {
    color: '#6E7191',
    fontSize: 14,
  },
  labelFooter: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '600',
  },
  logoArea: {
    marginTop: 12,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  logo: {
    marginTop: 8,
    width: 72,
    resizeMode: 'stretch',
  },
});
