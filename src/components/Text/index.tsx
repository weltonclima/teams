import { TextProps } from "react-native";
import { Container } from "./styles";

export interface Props extends TextProps {
  type: 'title' | 'subtitle'
}
export function Text({
  ...rest
}: Props) {
  return (
    <Container {...rest} />
  )
}