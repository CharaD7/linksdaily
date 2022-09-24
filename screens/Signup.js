import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Text from '@kaloraat/react-native-text';
import UserInput from '../components/auth/UserInput';
import SubmitButton from '../components/auth/SubmitButton';

import axios from 'axios';

const Signup = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true)
    if (!name || !email || !password) {
      alert('All fields are required!');
      setLoading(false);
      return;
    }
    console.log('SIGNUP REQUEST =>', name, email, password)

    try {
      const { data } = await axios.post('http://localhost:8000/api/signup', {name, email, password});
      console.log('SIGN IN SUCCESS =>', data);
      alert('Sign up successful');
      // TODO redirect
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <View style={{ flex:1, justifyContent: 'center' }}>
      <Text title center>Sign Up</Text>
      <UserInput name='NAME' value={name} setValue={setName} autoCapitalize='words' autoCorrect={false} />
      <UserInput name='EMAIL' value={email} setValue={setEmail} autoCompleteType='email' keyboardType='email-address' />
      <UserInput name='PASSWORD' value={password} setValue={setPassword} secureTextEntry={true} autoCompleteType='password' />

      <SubmitButton handleSubmit={handleSubmit} loading={loading} title="Sign Up"/>

      <Text>{JSON.stringify({ name, email, password }, null, 4)}</Text>
    </View>
  );
};

export default Signup;
