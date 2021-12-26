import React, {useState, useEffect, useRef, createRef} from 'react';
import {getUser, updateUser} from '../stores/action/user';
import s from '../screen/Profile/style';
import {API_BACKEND} from '@env';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import ActionSheet from 'react-native-actions-sheet';
import Icon from 'react-native-vector-icons/Feather';

import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  PermissionsAndroid,
} from 'react-native';

import Footer from './Footer';
import {useSelector, useDispatch} from 'react-redux';
import axios from '../utils/axios';

const actionSheetRef = createRef();

function ProfileSettings(props) {
  let actionSheet;
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.user);
  const [newPass, setNewPass] = useState({password: '', conPassword: ''});

  const [dataUser, setDataUser] = useState({
    first_name: '',
    last_name: '',
  });
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
  });

  const fullName = `${user.first_name} ${user.last_name}`;

  const changeText = (text, name) => {
    setFormData({...formData, [name]: text});
  };

  const changePass = (text, name) => {
    setNewPass({...newPass, [name]: text});
  };
  console.log(user, 'userrr');
  useEffect(() => {
    dispatch(getUser(user.id_user)).then(res => {
      setDataUser({
        ...dataUser,
        first_name: res.value.data.data[0].first_name,
        last_name: res.value.data.data[0].last_name,
      });
    });
  }, []);

  function changeData() {
    formData.first_name !== '' || formData.last_name !== ''
      ? dispatch(updateUser(formData)).then(res => {
          alert('success update data');
          dispatch(getUser(user.id_user));
          setFormData({first_name: '', last_name: ''});
        })
      : alert('Insert new data first');
  }

  const updatePassword = async () => {
    if (newPass.password === '' || newPass.conPassword === '') {
      alert('Fill new password');
    } else {
      newPass.password === newPass.conPassword
        ? axios.patch('/user/password', newPass).then(res => {
            alert('Password has been updated');
            setNewPass({password: '', conPassword: ''});
          })
        : alert("New password and confirm password does'nt match");
    }
  };

  const handleTakeCamera = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: 'App Camera Permission',
        message: 'App needs access to your camera ',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('Camera permission given');
      try {
        const result = await launchCamera();
        if (result.didCancel) {
        } else {
          const setData = {
            user_image: {
              uri: result.assets[0].uri,
              name: result.assets[0].fileName,
              type: result.assets[0].type,
            },
          };
          const formData = new FormData();
          for (const data in setData) {
            formData.append(data, setData[data]);
          }
          await axios
            .patch('/user/change-photo', formData)
            .then(res => {
              alert('Success update image');
              dispatch(getUser(user.id_user));
            })
            .catch(err => {
              console.log(err.response, 'error then');
            });
        }
      } catch (error) {
        console.log(error, 'error kamera');
      }
    } else {
      console.log('Camera permission denied');
    }
  };

  const handleChooseGallery = async () => {
    try {
      const result = await launchImageLibrary();
      const setData = {
        user_image: {
          uri: result.assets[0].uri,
          name: result.assets[0].fileName,
          type: result.assets[0].type,
        },
      };
      console.log('SUBMIT IMAGE', setData);

      const formData = new FormData();
      for (const data in setData) {
        formData.append(data, setData[data]);
      }

      await axios
        .patch('/user/change-photo', formData)
        .then(res => {
          alert('Success update image');
          dispatch(getUser(user.id_user));
        })
        .catch(err => {
          console.log(err, 'error then');
        });
    } catch (error) {}
  };

  return (
    <ScrollView>
      <View style={s.wrapper}>
        <View style={s.badgesArea}>
          <Text>INFO</Text>
          <View style={s.imageArea}>
            <Image
              style={s.imageUser}
              source={
                user.user_image
                  ? {uri: `${API_BACKEND}uploads/user/${user.user_image}`}
                  : require('../assets/images/default.jpg')
              }
            />

            <TouchableOpacity
              onPress={() => actionSheetRef.current?.setModalVisible()}
              style={s.btnImage}>
              <Text style={s.textWhite}>Choose image</Text>
            </TouchableOpacity>
            <ActionSheet ref={actionSheetRef}>
              <View style={[s.actionSheet, {marginHorizontal: 2}]}>
                <TouchableOpacity
                  onPress={handleTakeCamera}
                  style={{
                    width: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                  }}>
                  <View
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      flexDirection: 'row',
                    }}>
                    <Icon name="camera" size={24} color="#000" />
                  </View>
                  <View>
                    <Text style={{textAlign: 'center', marginTop: 22}}>
                      Take a photo
                    </Text>
                  </View>
                </TouchableOpacity>

                <View
                  style={{
                    marginHorizontal: 2,
                    width: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                  }}>
                  <TouchableOpacity onPress={handleChooseGallery}>
                    <View
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'row',
                      }}>
                      <Icon name="image" size={24} color="#000" />
                    </View>
                    <View>
                      <Text style={{textAlign: 'center', marginTop: 22}}>
                        Choose from gallery
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </ActionSheet>
          </View>
          <Text style={s.name}>{fullName}</Text>
        </View>
        <Text style={[s.lable, {marginTop: 22}]}>Account Settings</Text>
        <View style={s.accountSetting}>
          <Text style={s.lableContent}>Details Information</Text>
          <Text style={[s.lableContent, {marginTop: 28}]}>First Name</Text>
          <TextInput
            onChangeText={text => changeText(text, 'first_name')}
            style={s.input}
            placeholder="Enter your first name"
            defaultValue={user.first_name}
          />
          <Text style={[s.lableContent, {marginTop: 28}]}>Last Name</Text>
          <TextInput
            onChangeText={text => changeText(text, 'last_name')}
            style={s.input}
            placeholder="Enter your last name"
            defaultValue={user.last_name}
          />
          <Text style={[s.lableContent, {marginTop: 28}]}>Email</Text>
          <Text style={{marginTop: 12}}>{user.email}</Text>

          <TouchableOpacity onPress={changeData} style={s.btnChanges}>
            <Text style={s.textBtn}>Update Profile</Text>
          </TouchableOpacity>
        </View>

        <View style={s.passwordSetting}>
          <Text style={[s.lableContent, {marginTop: 18}]}>
            Account and Privacy
          </Text>
          <Text style={[s.lableContent, {marginTop: 28}]}>New Password</Text>
          <TextInput
            onChangeText={text => changePass(text, 'password')}
            secureTextEntry={true}
            style={s.input}
            placeholder="Type new password"
            defaultValue={newPass.password}
          />
          <Text style={[s.lableContent, {marginTop: 28}]}>
            Confirm New Password
          </Text>
          <TextInput
            onChangeText={text => changePass(text, 'conPassword')}
            secureTextEntry={true}
            style={s.input}
            placeholder="Confirm new password"
            defaultValue={newPass.conPassword}
          />
          <TouchableOpacity onPress={updatePassword} style={s.btnChanges}>
            <Text style={s.textBtn}>Update Password</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
}

export default ProfileSettings;
