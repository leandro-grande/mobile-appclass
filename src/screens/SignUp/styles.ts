import { getStatusBarHeight } from "react-native-iphone-x-helper";
import styled from "styled-components/native";


export const Container = styled.View`
  flex: 1;
  background: ${({theme}) => theme.COLORS.BACKGROUND};
  padding: 0 32px;
`;

export const Header = styled.View`
  margin-top: ${getStatusBarHeight() + 64}px; 
  align-items: center;
`;

export const Logo = styled.Image`
  height: 44px;
  width: 64px;
`;

export const Form = styled.View`
  margin-top: 72px;
  gap: 16px;
`;

export const Login = styled.View`
  margin-top: 48px;
  gap: 16px;

`;