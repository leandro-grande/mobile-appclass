import { ActivityIndicator } from "react-native"
import { useTheme } from "styled-components/native"
import { Container } from "./styles"


export const Loading = () => {
  const theme = useTheme();

  return (
    <Container>
      <ActivityIndicator size={32} color={theme.COLORS.PRIMARY} />
    </Container>
  )
}