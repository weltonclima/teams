import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 0 24px;
  background-color: ${({ theme }) => theme.colors.gray[600]};
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 26px 0 125px;
`;

export const Content = styled.View`
  width: 100%;
  align-items: center;
  margin: 24px 0 32px;
`;