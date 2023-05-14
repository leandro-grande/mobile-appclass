import { useState } from 'react';
import { useAuth } from '../../contexts/useAuth';

import { Input } from '../../components/Input';
import { Text } from '../../components/Text';
import { Button } from '../../components/Button';

import theme from '../../styles/theme';
import logoImg from '../../assets/logo.png';
import { Container, Form, Header, Login, Logo } from "./styles";
import { useNavigation } from '@react-navigation/native';

export const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { signIn }  = useAuth();
  const { navigate } = useNavigation();

  async function handleSignIn() {
    try {
      setIsLoading(true);

      await signIn(email, password);

    } catch (error) {
      setIsLoading(false);
      console.log(error)
    } 
  }

  return (
    <Container>

      <Header>
       <Logo source={logoImg} />

       <Text font='medium' size='32' mt='12'>
          Class Mail
       </Text>

       <Text size='14' mt='8' center>
          Seu app de envio de comunicados
       </Text>
      </Header>

      <Form>
      <Text size='14' mt='8' center>
          Acesse sua conta
       </Text>

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
          text='Entrar' 
          activeOpacity={0.9}
          onPress={handleSignIn}
          isLoading={isLoading}
        />
      </Form>

      <Login>
        <Text 
          center
          color={theme.COLORS['GRAY-500']}
          font='regular'
        >
          Ainda não tem acesso??
        </Text>
        <Button 
          text='Criar uma conta' 
          color='ghost'
          activeOpacity={0.5}
          onPress={() => navigate('signup')}
        />
      </Login>

    </Container>
  )
}