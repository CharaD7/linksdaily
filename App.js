import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  const names = ['Ryan', 'Zen', 'David'];

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      { names.map((name) => (
        <Welcome name={name} />
      )) }
    </View>
  );
}

// top left
// center left
// bottom left
// top right
// center right
// bottom right

const Welcome = (props) => (
  <View>
    <Text>Hello {props.name}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
