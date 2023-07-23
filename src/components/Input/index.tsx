import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { TextInputProps } from "react-native";
import { BorderlessButton, BorderlessButtonProps } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components/native';
import { Container, Input as SCInput } from "./styles";

interface InputPros extends TextInputProps {
  isAddButton?: boolean;
  buttonProps?: BorderlessButtonProps;
  isError?: boolean;
}
export function Input({
  isAddButton = false, isError = false, buttonProps, ...rest
}: InputPros) {
  const [isFocused, setIsFocused] = useState(false);

  const theme = useTheme();

  return (
    <Container isFocused={isFocused} isError={isError}>
      <SCInput
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...rest}

      />
      {isAddButton &&
        <BorderlessButton {...buttonProps}>
          <Ionicons
            name="add-outline"
            size={24}
            color={theme.colors.green.dark}
          />
        </BorderlessButton>
      }
    </Container>
  )
}