import React from 'react';
import { Text } from 'react-native';

import Input from '~/components/Input';
import Background from '~/components/Background';
import Button from '~/components/Button';

// import { Container } from './styles';

export default function SignIn() {
  return (
    <Background>
      <Text>Signing</Text>

      <Input
        style={{ marginTop: 30 }}
        icon="call"
        placeholder="Enter your name"
      />

      <Button>Enter</Button>
    </Background>
  );
}
