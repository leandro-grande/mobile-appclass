import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { Text } from "../../components/Text";
import { api } from "../../services/api";

import { useTheme } from "styled-components/native";
import { Container, Message, MessageDescription, MessageTitle } from "./styles";

interface Message {
  recado: {
    id: number;
    mensagem: string;
    recadoTipo: string;
  }
}

export function Messages() {
  const [messages, setMessages] = useState<Message[]>([]);

  const { COLORS } = useTheme();

  useEffect(() => {
    async function fetchMessages() {
      const { data } = await api.get(`/PessoaRecados`);

      setMessages(data);

    }
     fetchMessages()
  }, [])

  return (
    <Container>
      <Text size="20" mb="24">Olá Aluno,</Text>
      <Text font="bold" size="20" mb="24" color={COLORS.PRIMARY}>Mural de Recados</Text>

      <FlatList 
        data={messages}
        keyExtractor={item => String(item.recado.id)}
        renderItem={({item}) => (
          <Message>
            <MessageTitle>
              <Text font="bold" size="18" color={COLORS.WHITE} >Titulo</Text>
              <Text color={COLORS.WHITE} >{item.recado.recadoTipo}</Text>
            </MessageTitle>

            <MessageDescription>
            <Text font="bold" size="18" color={COLORS.WHITE} >Descrição</Text>
              <Text color={COLORS.WHITE} >{item.recado.mensagem}</Text>
            </MessageDescription>
          </Message>
        )}
      />
    </Container>
  )
}