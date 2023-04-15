import styled from "styled-components/native";


type Props = {
  color: 'primary' | 'secondary' | 'ghost'
}


export const ButtonContainer = styled.TouchableOpacity<Props>`
  width: 100%;
  height: 46px;
  background-color: ${({theme, color}) => color === 'secondary' ? theme.COLORS["SECONDARY"] :
      color === 'primary' ?
      theme.COLORS["PRIMARY"] :
      theme.COLORS["GRAY-200"]
    };
  border-radius: 6px;

  align-items: center;
  justify-content: center;
`;