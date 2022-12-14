import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Text from '@kaloraat/react-native-text';
import UserInput from '../components/auth/UserInput';
import SubmitButton from '../components/auth/SubmitButton';
import CircleLogo from '../components/auth/CircleLogo';

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
      const { data } = await axios.post('http://localhost:8000/api/signup', { name, email, password });
      setLoading(false);
      console.log('SIGN IN SUCCESS =>', data);
      alert('Sign up successful');
      // TODO redirect
    } catch (err) {
      setLoading(false);
      console.log(err)
    }
  }

  return (
    <KeyboardAwareScrollView contentContainerStyle={{ flex: 1, justifyContent: 'center' }}>
      <View style={{ marginVertical: 100 }}>
        <CircleLogo />

        <Text title center>Sign Up</Text>

        <UserInput name='NAME' value={name} setValue={setName} autoCapitalize='words' autoCorrect={false} />
        <UserInput name='EMAIL' value={email} setValue={setEmail} autoCompleteType='email' keyboardType='email-address' />
        <UserInput name='PASSWORD' value={password} setValue={setPassword} secureTextEntry={true} autoCompleteType='password' />

        <SubmitButton handleSubmit={handleSubmit} loading={loading} title="Sign Up" />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Signup;
