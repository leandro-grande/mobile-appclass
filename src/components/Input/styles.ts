import styled from "styled-components/native";


export const TextInput = styled.TextInput`
  width: 100%;
  height: 45px;
  border-radius: 6px;
  
  font-family: ${({theme}) => theme.FONTS.REGULAR};
  font-size: 16px;
  background-color: ${({theme}) => theme.COLORS["INPUT-BG"]};
  color: ${({theme}) => theme.COLORS["INPUT-TEXT"]};
  
  padding: 12px 16px;
  align-self: flex-start;
  

`