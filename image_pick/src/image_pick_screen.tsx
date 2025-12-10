import { useState } from 'react';
import {
  Button,
  Image,
  StyleSheet,
  View,
  PermissionsAndroid,
  Platform,
  Alert,
  Text,
} from 'react-native';
import { launchCamera, CameraOptions } from 'react-native-image-picker';
import Contacts, { Contact } from 'react-native-contacts';

function ImagePickerScreen() {
  const [state, setState] = useState({
    avatar: 'Hello',
    myContacts: [] as Contact[],
  });

  const addImage = async () => {
    const options: CameraOptions = {
      mediaType: 'photo',
      saveToPhotos: true,
    };
    const result = await launchCamera(options);

    if (result.didCancel) {
      console.log('User cancelled image picker');
      return;
    }

    if (result.errorCode) {
      console.log('ImagePicker Error: ', result.errorMessage);
      return;
    }

    const uri = result.assets && result.assets[0]?.uri;

    if (uri) {
      setState(prevState => ({
        ...prevState,
        avatar: uri,
      }));
    }
  };

  const requestContactPermisson = async () => {
    if (Platform.OS === 'ios') {
      console.warn('iOS');
      return true;
    } else {
      console.warn('android');

      const granted = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.WRITE_CONTACTS,
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
      ]);

      if (
        granted['android.permission.READ_CONTACTS'] ===
          PermissionsAndroid.RESULTS.GRANTED &&
        granted['android.permission.WRITE_CONTACTS'] ===
          PermissionsAndroid.RESULTS.GRANTED
      ) {
        return true;
      } else {
        return false;
      }
    }
  };

  const getContacts = async () => {
    const didGetPermisson = await requestContactPermisson();

    if (!didGetPermisson) {
      Alert.alert('Permission denied');
      return;
    }

    try {
      const contacts = await Contacts.getAll();
      console.warn(contacts);
      setState(prevState => ({
        ...prevState,
        myContacts: contacts,
      }));
    } catch (err) {
      console.warn('getAll error:', err);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: state.avatar }} style={styles.avatar} />

      <Button title="Add Image" onPress={addImage} />
      <Button title="Load Contacts" onPress={getContacts} />

      {state.myContacts.map((item, idx) => (
        <Text key={idx}>{item.givenName}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e4ab26',
  },
  avatar: {
    width: '100%',
    height: 400,
  },
});

export default ImagePickerScreen;
