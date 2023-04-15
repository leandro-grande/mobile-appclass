import { TouchableOpacityProps } from "react-native"
import { ButtonContainer } from "./styles"
import { Text } from "../Text"
import { useTheme } from "styled-components/native";
import { Loading } from "../Loading";

type ButtonProps = TouchableOpacityProps & {
  text: string;
  color?: 'primary' | 'secondary' | 'ghost';
  isLoading?: boolean;
}


export const Button = ({ text, color = 'secondary', isLoading = false,  ...rest }: ButtonProps) => {

  const theme = useTheme();

  return (
    <ButtonContainer {...rest} color={color}>
      <Text 
        color={color === 'ghost' ? theme.COLORS.SECONDARY : theme.COLORS.WHITE } 
        font={ color === 'ghost' ? 'regular' : "bold" }
      >
        { isLoading ? 
          <Loading /> :
          text
      }

      </Text>
    </ButtonContainer>
  )
}