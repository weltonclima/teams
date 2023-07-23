import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import { styled } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  padding: 0 24px;
  background-color: ${({ theme }) => theme.colors.gray[600]};
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: ${getStatusBarHeight() + 26}px 0 32px;
`;

export const Content = styled.View`
  width: 100%;
  align-items: center;
  margin-bottom:32px;
`;

export const TeamGroup = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 32px 0 19px;
`;

export const TeamGroupButton = styled.View`
  flex-direction: row;
`;

export const TeamAccount = styled.Text`
  color: ${({ theme }) => theme.colors.gray[200]};
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.primary_700};
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(22.4)}px;
  text-transform: uppercase;
`;

export const PlayerGroup = styled.View`
  width: 100%;
`;

export const Player = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.gray[400]};
  border-radius: 4px;
  padding: 15px 13px;
  margin-bottom: 14px;
`;

export const PlayerContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const PlayerText = styled.Text`
  color: ${({ theme }) => theme.colors.gray[200]};
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(16)}px;
  line-height: ${RFValue(25.6)}px;
  margin-left: 4px;
`;

export const Footer = styled.View`
  width: 100%;
  //position: absolute;
  //bottom: 42px;
`;