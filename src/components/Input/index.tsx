import { TextInputProps } from "react-native";
import { Container, Input as SCInput } from "./styles";

interface InputPros extends TextInputProps {

}
export function Input({ ...rest }: InputPros) {
  return (
    <Container>
      <SCInput {...rest} />
    </Container>
  )
}