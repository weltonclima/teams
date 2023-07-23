import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from "react-native";
import LogotSvg from "../../assets/Logo.svg";
import UsersThreeSvg from "../../assets/UsersThree.svg";
import { BackButton } from "../../components/BackButton";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Text } from "../../components/Text";
import { useTeam } from "../../hooks/useTeam";
import { Container, Content, ContentTouchable, Header } from "./styles";

export function NewTeam() {
  const [name, setName] = useState("");

  const navigation = useNavigation();
  const { isError, handlecreateTeam } = useTeam();

  return (
    <KeyboardAvoidingView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <ContentTouchable>
            <Header>
              <BackButton onPress={() => navigation.goBack()} />
              <LogotSvg />
            </Header>
            <UsersThreeSvg />
            <Content>
              <Text type="title">Nova Turma</Text>
              <Text type="subtitle">crie uma turma para adicionar pessoas</Text>
            </Content>
            <Input
              placeholder="Nome da turma"
              value={name}
              onChangeText={setName}
              isError={isError}
            />
          </ContentTouchable>
          <Button
            title="Criar"
            style={{ marginTop: 20 }}
            onPress={() => handlecreateTeam(name)}
          />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}