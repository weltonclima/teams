import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled(RectButton) <{ type: "green" | "red" }>`
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;
  background-color: ${({ theme, type }) =>
    type == 'green'
      ? theme.colors.green.dark
      : theme.colors.red.dark};
`;

export const TextButton = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.primary_700};
  font-size: ${RFValue(16)}px;
  line-height: ${RFValue(24)}px;
`;