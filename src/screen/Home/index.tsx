import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { BackHandler, FlatList } from "react-native";
import LogoSvg from "../../assets/Logo.svg";
import UsersThreeFillSvg from "../../assets/UsersThreeFill.svg";
import { Button } from "../../components/Button";
import { Text } from "../../components/Text";
import { useTeam } from "../../hooks/useTeam";
import { Container, Footer, Header, Main, TeamContent, TeamText } from "./styles";

export function Home() {

  const navigation = useNavigation();
  const { teams } = useTeam();

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      return true;
    })
  }, [])

  return (
    <Container>
      <Header>
        <LogoSvg />
        <Text type="title" style={{ marginTop: 32 }}>Turmas</Text>
        <Text type="subtitle">jogue com a sua turma</Text>
      </Header>
      <Main>
        <FlatList
          data={teams}
          keyExtractor={item => `${item.id}`}
          renderItem={({ item }) => (
            <TeamContent
              onPress={() => navigation.navigate("Team", item)}
            >
              <UsersThreeFillSvg fontSize={32} />
              <TeamText>{item.name}</TeamText>
            </TeamContent>
          )}
        />
      </Main>
      <Footer>
        <Button
          title="Criar nova turma"
          onPress={() => navigation.navigate("NewTeam")}
        />
      </Footer>
    </Container>
  )
}