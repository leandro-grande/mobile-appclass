import { getStatusBarHeight } from "react-native-iphone-x-helper";
import styled from "styled-components/native";


export const Container = styled.View`
  flex: 1;
  background: ${({theme}) => theme.COLORS.BACKGROUND};
  padding: 0 32px;
`;

export const Header  = styled.View`
  margin-top: ${getStatusBarHeight() + 24}px;
  align-items: center;
`;

export const Form = styled.View`
  margin-top: 80px;
  gap: 12px;
`;