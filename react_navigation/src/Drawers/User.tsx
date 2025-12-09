import { DrawerScreenProps } from '@react-navigation/drawer';
import { Button, StyleSheet, Text, View } from 'react-native';
import { RootDrawerParamList } from './DrawerNavigator';

type DrawerUserProps = DrawerScreenProps<RootDrawerParamList, 'User'>;

function DrawerUserScreen(props: DrawerUserProps) {
  return (
    <View style={styles.viewStyle}>
      <Text>Drawer User Screen</Text>
      <Button
        title="to Home Screen"
        onPress={() => {
          if (props.navigation.canGoBack()) {
            props.navigation.goBack();
          } else {
            props.navigation.navigate('Home');
          }
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default DrawerUserScreen;
