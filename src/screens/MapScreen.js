import { StyleSheet, Text, View } from 'react-native';

const MapScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MapScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
  },
});

export default MapScreen;
