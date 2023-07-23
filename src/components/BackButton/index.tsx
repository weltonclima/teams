import { BorderlessButton, BorderlessButtonProps } from "react-native-gesture-handler";
import CaretLeftSvg from "../../assets/CaretLeft.svg";

export function BackButton({ ...rest }: BorderlessButtonProps) {
  return (
    <BorderlessButton {...rest}>
      <CaretLeftSvg />
    </BorderlessButton>
  )
}