import { useEffect, useState } from "react";

import { Button } from "../../components/Button";
import { DropDown } from "../../components/Dropdown";
import { Input } from "../../components/Input";
import { Text } from "../../components/Text";
import { api } from "../../services/api";
import { useAuth } from "../../contexts/useAuth";

import { Container, Form, Header } from "./styles";
import { Alert } from "react-native";

interface ProfileData {
  id: string;
  nome: string;
}

export function ProfileSignUp() {
  const [profileData, setProfileData] = useState<ProfileData[]>([]);
  const [selectedProfile, setSelectedProfile ] = useState(0);
  const [name, setName ] = useState('');
  const [lastName, setLastName ] = useState('');
  const [date, setDate ] = useState('');
  const [gender, setGender ] = useState('');
  const [document, setDocument ] = useState('');

  const { user, updateUser } = useAuth();

  const data = ['Perfil', 'Aluno', 'Professor', 'Coordenador'];

  const [dia, mes, ano] = date.split('/');
  const newDate = new Date(Number(ano), Number(mes) - 1, Number(dia));

  useEffect(() => {
    async function fetchProfile() {
      const response = await api.get('/PessoaTipos');

      setProfileData(response.data)
    }

    fetchProfile();
  }, [])


  async function handleSignUpProfile() {
    try {
      const { data } = await api.post(`/Pessoas`, {
        pessoaTipoId: selectedProfile,
        nome: name,
        sobrenome: lastName,
        dataNascimento: newDate.toISOString(),
        sexo: gender,
        documentoTipoId: 1,
        documento: document,
        turmaId: 1
      });

      await api.patch(`/Usuarios/${user.id}`, {
        idUsuario: user.id,
        pessoaId: data.id
      });

      updateUser(data.id)

      Alert.alert('Cadastro', 'Profile cadastrado com sucesso!')


    } catch (error) {
      console.log(error);
    }

  }

  function handleSelectUserProfile(userProfile: string) {
    const profile = profileData.find(data => data.nome === userProfile);

    if (!profile) {
      return
    }

    setSelectedProfile(Number(profile.id))
  }

  return (
    <Container>
      <Header>
         <Text size="18" font="regular" center>Você é novo aqui? Cadastre o seu profile</Text>
      </Header>

      <Form>
      <DropDown 
          data={data} 
          defaultValueByIndex={0}
          onSelect={(item) => handleSelectUserProfile(item)} 
        />
        <Input placeholder="Nome" onChangeText={setName} />
        <Input placeholder="Sobrenome" onChangeText={setLastName} />
        <Input placeholder="Data Nascimento" onChangeText={setDate} />
        <Input placeholder="Genêro" onChangeText={setGender} />
        <Input placeholder="Documento" onChangeText={setDocument} />

        <Button 
          text="Cadastrar Profile" 
          style={{ marginTop: 12 }} 
          onPress={handleSignUpProfile}
        />
      </Form>
    </Container>
  );
}