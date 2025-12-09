import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabHomeScreen from './tab_homeScreen';
import TabUserScreen from './tab_userScreen';
import { StyleSheet } from 'react-native';

import Icon from '@react-native-vector-icons/ionicons';
import { IoniconsIconName } from '@react-native-vector-icons/ionicons';

const Tab = createBottomTabNavigator();

const TabBarIcon = (focused: boolean, name: string) => {
  //   let iconImagePath;
  let iconName: IoniconsIconName;

  if (name === 'Home') {
    // iconImagePath = require('../../../assets/images/rock.png');
    iconName = 'home-outline';
  } else {
    // iconImagePath = require('../../../assets/images/rock.png');
    iconName = 'people-outline';
  }
  const iconsize = focused ? 30 : 20;
  return (
    <Icon
      name={iconName}
      size={iconsize}
      //   color={focused ? 'blue' : '#71c4ff77'}
    />
  );
};

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={props => ({
        tabBarActiveBackgroundColor: 'skyblue',
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: '#71c4ff77',
        tabBarStyle: {
          backgroundColor: '#c2ffac',
        },
        tabBarLabel: props.route.name,
        tabBarIcon: ({ focused }) => TabBarIcon(focused, props.route.name),
      })}
    >
      <Tab.Screen name="Home" component={TabHomeScreen} />
      <Tab.Screen name="User" component={TabUserScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
  },
  iconFocused: {
    width: 24,
    height: 24,
  },
});

const getIconStyle = (focused: boolean) => [
  styles.icon,
  focused && styles.iconFocused,
];

export default TabNavigator;
