import { useEffect, useState } from "react"
import { Alert } from "react-native"

import { Button } from "../../components/Button"
import { DropDown } from "../../components/Dropdown"
import { Input } from "../../components/Input"
import { Text } from "../../components/Text"
import { api } from "../../services/api"

import { Container, Form, Header } from "../sendMessage/styles"

interface Student {
  pessoaTipo: {
    nome: string;
  }
  nome: string;
  id: string;
}

export const SendMessage = () => {
  const [selectedPerson, setSelectedPerson ] = useState('');
  const [students, setStudents] = useState<Student[]>([]);
  const [selectedStudentId, setSelectedStudentId] = useState<string[]>([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const data = ["Sala", "Aluno"];

  async function getStudents() {
    const response = await api.get('/Pessoas');

    response.data.forEach((student: Student) => {
      if (student.pessoaTipo.nome === 'Aluno') {
        setStudents((state) => [...state, student])
      }
    });
  }

  function handleSelectStudent(name: string) {
    const student = students.find(student => student.nome === name);

    console.log(student);

    if (student) {
      setSelectedStudentId([student.id])
    }
  
  }

  async function handleSubmitMessage() {

    if (!title || !description) {
      return Alert.alert('Preencha todos os campos');
    }

    try {
      const { data: recado } = await api.post('/Recados', {
        mensagem: description,
        recadoTipo: title
      })

      await api.post('/PessoaRecados', {
        recadoId: recado.id,
        pessoaIds: selectedStudentId
      })

      Alert.alert('Recado enviado com sucesso!');

      setDescription('');
      setTitle('');
    }  catch (error) {
      console.log(error);
    }
  } 

  useEffect(() => {
    if (selectedPerson === 'Aluno' && students.length === 0) {

      getStudents()      
    }
  }, [selectedPerson])

  return (
    <Container>
      <Header>
         <Text size="20" font="bold">Criar Recados</Text>
      </Header>

      <Form>
        <DropDown 
          data={data} 
          defaultValueByIndex={0}
          onSelect={(item) => {
            setSelectedPerson(item)
          }} 
        />

        {(selectedPerson === 'Aluno' && students.length !== 0) && (
          <DropDown 
            data={students.map(student => student.nome)}
            defaultValueByIndex={0}
            onSelect={(item) => handleSelectStudent(item)} 
          />
        )}

        <Input 
          placeholder="Título" 
          value={title}
          onChangeText={setTitle}
        />
        <Input 
          style={{ height: 150 }}
          placeholder="Mensagem" 
          multiline 
          numberOfLines={5} 
          textAlignVertical="top"
          value={description}
          onChangeText={setDescription}
        />

        <Button 
          text="Enviar" 
          activeOpacity={0.8}
          onPress={handleSubmitMessage} 
        />
      </Form>
    </Container>
  )
}