import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Welcome from './components/Welcome';

export default function App() {

  const names = ['Ryan', 'Zen', 'David'];

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      { names.map((name) => (
        <Welcome key={name} name={name} />
      )) }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
