import { useNavigation } from '@react-navigation/native';
import { ReactNode, createContext, useContext, useState } from 'react';
import { Alert } from 'react-native';
import { IPlayer } from '../interfaces/IPlayer';
import { ITeam } from '../interfaces/ITeam';

interface TeamContextProps {
  teams: ITeam[];
  players: IPlayer[];
  isError: boolean;
  handlecreateTeam: (name: string) => void;
  handleRemoveTeam: (team: ITeam) => void;
  handlecreatePlayer: (name: string, squad: string, teamId: number) => void;
  handleRemovePlayer: (player: IPlayer) => void;
}
const TeamContext = createContext({} as TeamContextProps);

interface TeamProviderProps {
  children: ReactNode;
}

export function TeamProvider({ children }: TeamProviderProps) {
  const [teams, setSteams] = useState<ITeam[]>([]);
  const [players, setPlayers] = useState<IPlayer[]>([]);
  const [isError, setError] = useState(false);

  const navigation = useNavigation();

  function handlecreateTeam(name: string) {
    if (!name) {
      Alert.alert("Opa!", "Nome da turma é obrigatório.");
      setError(true);
      return
    }
    if (teams.find(f => f.name === name)) {
      Alert.alert("Opa!", "Turma já existe!");
      setError(true);
      return
    }

    setSteams(old => [...old, { name, id: (old.findLast(a => a.id)?.id ?? 0) + 1 }]);
    navigation.goBack();
  }

  function handleRemoveTeam(team: ITeam) {
    setSteams(old => [...old.filter(t => t !== team)]);
    setPlayers(old => [...old.filter(f => f.teamId !== team.id)]);
    navigation.goBack();
  }

  function handlecreatePlayer(name: string, squad: string, teamId: number) {
    if (!name) {
      Alert.alert("Opa!", "Nome do participante é obrigatório.");
      setError(true);
      return
    }

    if (players.find(f => f.name === name && f.squad === squad)) {
      Alert.alert("Opa!", "Player já existe!");
      setError(true);
      return
    }

    setPlayers(old => [
      ...old,
      {
        name,
        squad,
        teamId,
        id: (old.findLast(a => a.id)?.id ?? 0) + 1
      },
    ]);
  }

  function handleRemovePlayer(player: IPlayer) {
    setPlayers(players.filter(t => t !== player));
  }

  return (
    <TeamContext.Provider
      value={{
        teams,
        players,
        isError,
        handlecreateTeam,
        handleRemoveTeam,
        handlecreatePlayer,
        handleRemovePlayer,
      }}
    >
      {children}
    </TeamContext.Provider>
  )
}

export const useTeam = () => useContext(TeamContext);