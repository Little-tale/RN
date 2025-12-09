import { StyleSheet, Text, View } from 'react-native';

function TabHomeScreen() {
  return (
    <View style={styles.viewStyle}>
      <Text>Home Screen</Text>
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

export default TabHomeScreen;
