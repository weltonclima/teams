import CaretLeftSvg from "../../assets/CaretLeft.svg";
import LogotSvg from "../../assets/Logo.svg";
import UsersThreeSvg from "../../assets/UsersThree.svg";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Text } from "../../components/Text";
import { Container, Content, Header } from "./styles";

export function NewTeam() {
  return (
    <Container>
      <Header>
        <CaretLeftSvg />
        <LogotSvg />
      </Header>
      <UsersThreeSvg />
      <Content>
        <Text type="title">Nova Turma</Text>
        <Text type="subtitle">crie uma turma para adicionar pessoas</Text>
      </Content>
      <Input placeholder="Nome da turma" />
      <Button title="Criar" style={{ marginTop: 20 }} />
    </Container>
  )
}