import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { CommonActions } from '@react-navigation/native';
import { DrawerContentComponentProps } from '@react-navigation/drawer';

export const Images = {
  RockImage: require('../../assets/images/rock.png'),
};

function SideDrawer({ navigation }: DrawerContentComponentProps) {
  const navigateToScreen = (route: string) => () => {
    navigation.dispatch(
      CommonActions.navigate({
        name: route,
      }),
    );
  };

  return (
    <View style={style.container}>
      {/* <Text>Hello World;</Text> */}
      <ScrollView>
        <View>
          <Image source={Images.RockImage} style={style.imageStyle} />
          <TouchableOpacity
            onPress={navigateToScreen('Home')}
            style={style.link}
          >
            <Text>Home로 이동</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={navigateToScreen('User')}
            style={style.link}
          >
            <Text>User로 이동</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
  },
  imageStyle: {
    width: 100,
    height: 100,
  },
  link: {
    paddingVertical: 12,
  },
});

export default SideDrawer;
