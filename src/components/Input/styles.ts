import { TextInput } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import theme from "../../styles/theme";


export const Container = styled.View`
  width: 100%;
  padding: 16px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.gray[700]};
`;

export const Input = styled(TextInput).attrs({
  placeholderTextColor: theme.colors.gray[300],
})`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(16)}px;
  line-height: ${RFValue(25.6)}px;
  color: ${({ theme }) => theme.colors.gray[300]};
`;