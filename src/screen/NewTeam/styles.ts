import { getStatusBarHeight } from "react-native-iphone-x-helper";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 100%;
  padding: 0 24px;
  background-color: ${({ theme }) => theme.colors.gray[600]};
`;

export const ContentTouchable = styled.View`
  width: 100%;
  align-items: center;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: ${getStatusBarHeight() + 26}px 0 125px;
`;

export const Content = styled.View`
  width: 100%;
  align-items: center;
  margin: 24px 0 32px;
`;