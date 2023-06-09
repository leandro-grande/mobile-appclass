import { getStatusBarHeight } from "react-native-iphone-x-helper";
import styled from "styled-components/native";


export const Container = styled.View`
  flex: 1;
  padding: 24px;
  background: ${({theme}) => theme.COLORS.BACKGROUND};
`;

export const Header  = styled.View`
  margin-top: ${getStatusBarHeight()}px;
  align-items: center;
`;

export const Form = styled.View`
  margin-top: 32px;
  gap: 12px;
`;