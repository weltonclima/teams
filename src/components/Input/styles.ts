import { TextInput } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";
import theme from "../../styles/theme";


export const Container = styled.View<{ isError: boolean; isFocused: boolean }>`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.gray[700]};

  ${({ isError, isFocused }) => isError
    ? css`
      border-width: 1px;
      border-color: ${({ theme }) => theme.colors.red.dark};
    `
    : isFocused
    && css`
      border-width: 1px;
      border-color: ${({ theme }) => theme.colors.green.dark};
    `}
`;

export const Input = styled(TextInput).attrs({
  placeholderTextColor: theme.colors.gray[300],
})`
  flex: 1;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(16)}px;
  line-height: ${RFValue(25.6)}px;
  color: ${({ theme }) => theme.colors.gray[200]};
`;