import styled from "styled-components/native";

type TextProps = {
  color?: string;
  size?: string;
  font?: string;
  mt?: string;
  mb?: string;
  ml?: string;
  mr?: string;
  center?: boolean;
}

export const Texts = styled.Text<TextProps>`
  color: ${({theme, color}) => color ? color : theme.COLORS.TEXT};
  font-size: ${({size}) => size ? size : '16'}px;
  font-family: ${({theme, font}) => font === 'regular' ? theme.FONTS.REGULAR : (
    font === 'medium' ? theme.FONTS.MEDIUM : theme.FONTS.BOLD
  )};
  margin-top: ${({mt}) => mt ? mt : 0}px;
  margin-bottom: ${({mb}) => mb ? mb : 0}px;
  margin-right: ${({mr}) => mr ? mr : 0}px;
  margin-left: ${({ml}) => ml ? ml : 0}px;
  text-align: ${({ center }) => center ? 'center' : 'left' }
`;