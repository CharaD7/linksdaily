import React from 'react';
import { View, TextInput } from 'react-native';
import Text from '@kaloraat/react-native-text';

const Signup = () => {
  return (
    <View style={{ flex:1, justifyContent: 'center' }}>
      <Text title center>Signup</Text>
      <View style={{ marginHorizontal: 24 }}>
        <Text semi>Name</Text>
        <TextInput style={{
          borderBottomWidth: 0.5,
          height: 48,
          borderBottomColor: '#8e93a1',
          marginBottom: 30,
        }} />
      </View>
    </View>
  );
};

export default Signup;
