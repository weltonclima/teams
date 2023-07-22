import { RectButtonProps } from "react-native-gesture-handler";
import { useTheme } from "styled-components/native";
import { Container, TextButton } from "./styles";

interface Props extends RectButtonProps {
  title: string;
  type?: "green" | "red";
  // style?: StyleProp<ViewStyle>;
}

export function Button({
  title, type = "green", ...rest
}: Props) {

  const theme = useTheme()
  return (
    <Container type={type}
      rippleColor={
        type === 'green'
          ? theme.colors.green.light
          : theme.colors.red.light
      }
      {...rest}
      style={[
        { borderRadius: 6 },
        rest.style
      ]}
    >
      <TextButton>{title}</TextButton>
    </Container>
  )
}