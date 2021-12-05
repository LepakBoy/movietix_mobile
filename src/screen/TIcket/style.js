import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  wrapper: {
    paddingVertical: 28,
    paddingHorizontal: 24,
    backgroundColor: 'white',
  },
  barcodeArea: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    height: 300,
  },
  barcode: {
    backgroundColor: 'grey',
    width: 200,
    height: 200,
  },
  ticketInfo: {
    marginTop: 12,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  wrapperTicketInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 48,
    paddingHorizontal: 48,
    height: 220,
  },
  left: {
    width: '50%',
    height: '100%',
    paddingLeft: 22,
  },
  right: {
    width: '50%',
    height: '100%',
    paddingLeft: 22,
  },
  lable: {
    color: '#AAAAAA',
    fontSize: 14,
  },
  value: {
    fontSize: 16,
    color: '#14142B',
    fontWeight: '500',
  },
  totalArea: {
    paddingVertical: 48,
    paddingHorizontal: 28,
    // backgroundColor: 'red',
    height: 200,
  },
  totalWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#DEDEDE',
    height: 50,
    borderRadius: 6,
  },
  textTotal: {
    width: '50%',
    textAlign: 'center',
    fontSize: 18,
    color: '#000000',
    fontWeight: '600',
  },
  footer: {
    marginTop: 48,
    width: '100%',
    height: 300,
    // backgroundColor: 'red',
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
