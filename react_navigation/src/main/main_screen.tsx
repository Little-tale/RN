import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabHomeScreen from '../Drawers/Tab/tab_homeScreen';
import TabUserScreen from '../Drawers/Tab/tab_userScreen';
import Icon from '@react-native-vector-icons/ionicons';
import { IoniconsIconName } from '@react-native-vector-icons/ionicons';

const Tab = createBottomTabNavigator();

function MainScreen() {
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

export default MainScreen;
