import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";
import { Props } from ".";

export const Container = styled.Text <Props>`
  ${({ type }) => type == 'title' && css`
    color: ${({ theme }) => theme.colors.gray[100]};
    font-family: ${({ theme }) => theme.fonts.primary_700};
    font-size: ${RFValue(24)}px;
  `}

  ${({ type }) => type == 'subtitle' && css`
    color: ${({ theme }) => theme.colors.gray[300]};
    font-family: ${({ theme }) => theme.fonts.primary_400};
    font-size: ${RFValue(16)}px;
    line-height: ${RFValue(25.6)}px;
  `}
`;