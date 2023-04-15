import { useState } from 'react';
import { useAuth } from '../../contexts/useAuth';
import { api } from '../../services/api';

import { Input } from '../../components/Input';
import { Text } from '../../components/Text';
import { Button } from '../../components/Button';

import theme from '../../styles/theme';
import logoImg from '../../assets/logo.png';
import { Container, Form, Header, Login, Logo } from "./styles";

export const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { SignIn }  = useAuth();

  async function handleSignUp() {
    try {
      setIsLoading(true);
      await api.post('/Identificacao/registrar', {
        email,
        password,
      });

      await SignIn(email, password);

    } catch (error) {
      setIsLoading(false);
      console.log(error);
    } 
  }

  return (
    <Container>

      <Header>
       <Logo source={logoImg} />

       <Text font='medium' size='20' mt='12'>
          Boas vindas!
       </Text>

       <Text size='14' mt='8' center>
          Crie sua conta e use o app para enviar comunicados para seus alunos
       </Text>
      </Header>
      
      <Form>
        <Input 
          placeholder='Email' 
          keyboardType='email-address'
          onChangeText={setEmail}
          autoCapitalize='none'
        />
        <Input 
          placeholder='Senha' 
          secureTextEntry 
          onChangeText={setPassword} 
        />

        <Button 
          text='Criar' 
          activeOpacity={0.9}
          onPress={handleSignUp}
          isLoading={isLoading}
        />
      </Form>

      <Login>
        <Text 
          center
          color={theme.COLORS['GRAY-500']}
          font='regular'
        >
          Já tem uma conta?
        </Text>
        <Button 
          text='Ir para login' 
          color='ghost'
          activeOpacity={0.5}
        />
      </Login>

    </Container>
  )
}