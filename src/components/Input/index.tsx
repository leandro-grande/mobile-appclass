import { TextInputProps } from 'react-native';
import { TextInput } from './styles';

type InputProps = TextInputProps;

export const Input = ({ ...rest }: InputProps) => {
  return (
    <TextInput {...rest} />
  )
}