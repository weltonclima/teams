import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useState } from 'react';
import { FlatList, KeyboardAvoidingView } from "react-native";
import { BorderlessButton } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components/native';
import LogotSvg from "../../assets/Logo.svg";
import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { Input } from "../../components/Input";
import { TeamButton } from "../../components/TeamButton";
import { Text } from "../../components/Text";
import { useTeam } from '../../hooks/useTeam';
import { ITeam } from '../../interfaces/ITeam';
import { Container, Content, Footer, Header, Player, PlayerContent, PlayerGroup, PlayerText, TeamAccount, TeamGroup, TeamGroupButton } from "./styles";

export function Team() {
  const [name, setName] = useState("");
  const [squad, setSquad] = useState("one");

  const theme = useTheme();
  const navigation = useNavigation();
  const params = useRoute().params as ITeam;
  const {
    handleRemoveTeam,
    handlecreatePlayer,
    handleRemovePlayer,
    players,
    isError
  } = useTeam();

  return (
    <KeyboardAvoidingView>
      <Container>
        <Header>
          <BackButton onPress={() => navigation.goBack()} />
          <LogotSvg />
        </Header>
        <Content>
          <Text type="title">{params.name}</Text>
          <Text type="subtitle">adicione a galera e separe os times</Text>
        </Content>
        <Input
          value={name}
          onChangeText={setName}
          isAddButton
          placeholder="Nome do participante"
          isError={isError}
          buttonProps={{
            onPress: () => {
              handlecreatePlayer(name, squad, params.id);
              setName("");
            },
          }}
        />
        <TeamGroup>
          <TeamGroupButton>
            <TeamButton
              selected={squad == "one"}
              tiltle="TIME A"
              onPress={() => setSquad("one")}
            />
            <TeamButton
              selected={squad == "two"}
              tiltle="TIME B"
              onPress={() => setSquad("two")}
            />
          </TeamGroupButton>
          <TeamAccount>{players.filter(f => f.teamId == params.id).length}</TeamAccount>
        </TeamGroup>
        <PlayerGroup>
          <FlatList
            data={players.filter(f => f.squad == squad && f.teamId == params.id)}
            renderItem={({ item }) => (
              <Player>
                <PlayerContent>
                  <Ionicons
                    name="person"
                    size={24}
                    color={theme.colors.gray[200]}
                  />
                  <PlayerText>{item.name}</PlayerText>
                </PlayerContent>
                <BorderlessButton>
                  <Ionicons
                    name="close"
                    size={24}
                    color={theme.colors.red.dark}
                    onPress={() => handleRemovePlayer(item)}
                  />
                </BorderlessButton>
              </Player>
            )}
          />
        </PlayerGroup>
        <Footer>
          <Button
            type="red"
            title="Remover turma"
            onPress={() => handleRemoveTeam(params)}
          />
        </Footer>
      </Container>
    </KeyboardAvoidingView>
  )
}