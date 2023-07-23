import { TeamButton as Button, Container, TeamButtonText } from "./styles";

interface TeamButtonProps {
  tiltle: string;
  selected: boolean;
  onPress: () => void;
}
export function TeamButton({
  tiltle, selected, onPress
}: TeamButtonProps) {
  return (
    <Container selected={selected}>
      <Button
        style={{ borderRadius: 4 }}
        onPress={onPress}
      >
        <TeamButtonText selected={selected}>{tiltle}</TeamButtonText>
      </Button>
    </Container>
  )
}