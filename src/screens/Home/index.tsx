import { useEffect, useState } from "react"
import { Button } from "../../components/Button"
import { DropDown } from "../../components/Dropdown"
import { Input } from "../../components/Input"
import { Text } from "../../components/Text"
import { Container, Form, Header } from "./styles"
import { api } from "../../services/api"

interface Students {
  pessoaTipo: {
    nome: string;
  }
  nome: string;
}

export const Home = () => {
  const [selectedPerson, setSelectedPerson ] = useState('');
  const [students, setStudents] = useState<string[]>([]);
  const [selectedStudent, setSelectedStudent] = useState('');

  const data = ["Sala", "Aluno"];

  async function getStudents() {
    const response = await api.get('/Pessoas');

    response.data.forEach((student: Students) => {
      if (student.pessoaTipo.nome === 'Aluno') {
        setStudents((state) => [...state, student.nome])
      }
    });

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
            data={students} 
            defaultValueByIndex={0}
            onSelect={(item) => setSelectedStudent(item)} 
          />
        )}

        <Input 
          placeholder="Tipo recado" 
        />
        <Input 
          placeholder="Mensagem" 
          multiline 
          numberOfLines={5} 
          textAlignVertical="top"
          style={{ height: 150 }}
        />

        <Button text="Enviar" activeOpacity={0.8} />
      </Form>
    </Container>
  )
}