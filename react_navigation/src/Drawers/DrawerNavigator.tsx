import {
  createDrawerNavigator,
  //   DrawerContentComponentProps,
  //   DrawerContentScrollView,
  //   DrawerItem,
} from '@react-navigation/drawer';

import { StackNavigator } from './Nav/StackNavigator';
// import { Linking } from 'react-native';
import DrawerUserScreen from './User';
import SideDrawer from './side_drawer';
// import UserScreen from '../user';
// import DrawerUserScreen from './User';

export type RootDrawerParamList = {
  Home: undefined;
  User: undefined;
};

const Drawer = createDrawerNavigator<RootDrawerParamList>();

function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home" drawerContent={SideDrawer}>
      <Drawer.Screen
        name="Home"
        component={StackNavigator}
        // component={DrawerUserScreen}
        // options={{ drawerLabel: 'Home' }}
      />
      <Drawer.Screen
        name="User"
        component={DrawerUserScreen}
        // options={{ drawerLabel: 'Home_User' }}
      />
    </Drawer.Navigator>
  );
}

// function CustomDrawContent(props: DrawerContentComponentProps) {
//   return (
//     <DrawerContentScrollView>
//       <DrawerItem
//         label={'Home'}
//         onPress={() => props.navigation.navigate('Home')}
//       />
//       <DrawerItem
//         label={'Help'}
//         onPress={() => Linking.openURL('https:www.google.com')}
//       />
//       <DrawerItem
//         label={'User'}
//         onPress={() => props.navigation.navigate('User')}
//       />
//     </DrawerContentScrollView>
//   );
// }

export default DrawerNavigator;
