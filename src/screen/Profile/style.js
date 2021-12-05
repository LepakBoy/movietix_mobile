import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  tabArea: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wrapper: {
    paddingVertical: 28,
    paddingHorizontal: 24,
    // backgroundColor: 'white',
  },
  textTab: {
    fontSize: 16,
    color: '#14142B',
    fontWeight: '500',
  },
  badgesArea: {
    padding: 22,
    backgroundColor: 'white',
    height: 250,
    borderRadius: 8,
  },
  imageArea: {
    marginTop: 22,
    alignItems: 'center',
  },
  imageUser: {
    width: 100,
    height: 100,
    // borderRadius: 100,
  },
  name: {
    marginTop: 22,
    textAlign: 'center',
    color: '#14142B',
    fontSize: 20,
    fontWeight: '500',
  },
  lable: {
    color: '#14142B',
    fontSize: 18,
    fontWeight: '600',
  },
  accountSetting: {
    marginTop: 22,
    padding: 22,
    backgroundColor: 'white',
    height: 760,
    borderRadius: 8,
  },
  lableContent: {
    fontSize: 16,
    color: '#14142B',
    fontWeight: '400',
  },
  input: {
    paddingLeft: 12,
    marginTop: 12,
    borderRadius: 8,
    borderColor: '#DEDEDE',
    borderWidth: 1,
  },
  btnArea: {
    height: 200,
  },
  btnChanges: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 28,
    backgroundColor: '#5F2EEA',
    height: 48,
    borderRadius: 8,
  },
  textBtn: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
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
