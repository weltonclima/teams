import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import { css, styled } from "styled-components/native";
import theme from "../../styles/theme";

export const Container = styled.View < { selected: boolean }>`
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.gray[600]};
  ${({ selected }) => selected && css`
  border-color: ${({ theme }) => theme.colors.green.light};
  border-radius: 4px;
  `}
  margin-right: 8px;
`;

export const TeamButton = styled(RectButton).attrs({
  rippleColor: theme.colors.gray[600]
})`
  padding: 8px 12px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray[600]};
`;

export const TeamButtonText = styled.Text < { selected: boolean }>`
  color: ${({ theme, selected }) => selected
    ? theme.colors.white
    : theme.colors.gray[200]};
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.primary_700};
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(22.4)}px;
  text-transform: uppercase;
`;