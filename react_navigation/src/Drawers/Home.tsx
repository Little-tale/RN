import { Button, StyleSheet, Text, View } from 'react-native';

function DrawerHomeScreen() {
  return (
    <View style={styles.viewStyle}>
      <Text>Drawer Home Screen</Text>
      <Button title="to User Screen" onPress={() => {}} />
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

export default DrawerHomeScreen;
