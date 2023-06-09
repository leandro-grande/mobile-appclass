import styled from "styled-components/native";


export const Container = styled.View`
  flex: 1;
  padding: 0 24px;
  padding-top: 80px;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND};
`; 

export const Message = styled.View`
  padding: 8px;
  background-color: ${({theme}) => theme.COLORS.PRIMARY};
  width: 100%;
  border-radius: 8px;
  margin-bottom: 24px;
`;

export const MessageTitle = styled.View`
  height: 46px;

`;

export const MessageDescription = styled.View`
  margin-top: 16px;
`;

