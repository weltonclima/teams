import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 0 24px;
  background-color: ${({ theme }) => theme.colors.gray[600]};
`;

export const Header = styled.View`
  width: 100%;
  align-items: center;
  margin: ${getStatusBarHeight() + 39}px 0 32px;
`;

export const Main = styled.View`
  width: 100%;
   flex: 1;
`;

export const TeamContent = styled.View`
  flex-direction: row;
  width: 100%;
  padding: 32px 24px;
  margin-bottom: 12px;
  background-color: ${({ theme }) => theme.colors.gray[500]};
`;

export const TeamText = styled.Text`
  color: ${({ theme }) => theme.colors.gray[100]};
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(18)}px;
  line-height: ${RFValue(28.8)}px;
  margin-left: 20px;
`;

export const Footer = styled.View`
  width: 100%;
  margin-bottom: 42px;
`;