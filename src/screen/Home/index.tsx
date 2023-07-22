import LogoSvg from "../../assets/Logo.svg";
import UsersThreeFillSvg from "../../assets/UsersThreeFill.svg";
import { Button } from "../../components/Button";
import { Text } from "../../components/Text";
import { Container, Footer, Header, Main, TeamContent, TeamText } from "./styles";

export function Home() {

  return (
    <Container>
      <Header>
        <LogoSvg />
        <Text type="title" style={{ marginTop: 32 }}>Turmas</Text>
        <Text type="subtitle">jogue com a sua turma</Text>
      </Header>
      <Main>
        <TeamContent>
          <UsersThreeFillSvg fontSize={32} />
          <TeamText>Nome da turma</TeamText>
        </TeamContent>
        <TeamContent>
          <UsersThreeFillSvg fontSize={32} />
          <TeamText>Nome da turma</TeamText>
        </TeamContent>
      </Main>
      <Footer>
        <Button title="Criar nova turma" />
      </Footer>
    </Container>
  )
}