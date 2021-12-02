import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 32,
    paddingHorizontal: 22,
    alignItems: 'center',
  },
  header: {
    width: '100%',
  },
  imageHeader: {
    width: 40,
    height: 20,
  },
  textHeader: {
    fontSize: 32,
    fontWeight: '600',
  },
  formInput: {
    marginTop: 42,
    width: '100%',
  },
  labelInput: {
    fontSize: 18,
    fontWeight: '500',
  },
  textInput: {
    paddingLeft: 12,
    marginTop: 8,
    height: 52,
    backgroundColor: 'white',
    borderRadius: 4,
    borderColor: '#DEDEDE',
    fontSize: 16,
  },
  btnLogin: {
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 28,
    height: 52,
    backgroundColor: '#5F2EEA',
  },
  textBtn: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
  textForgotPass: {
    fontSize: 16,
    marginTop: 28,
    textAlign: 'center',
  },
});
