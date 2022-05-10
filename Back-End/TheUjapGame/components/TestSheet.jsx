//styles
import styles from "../styles/components/TestSheet.module.scss";
//icons
import { IoCaretForwardCircleSharp } from "react-icons/io5";

import { useAttack } from "../hooks";

export default function TestSheet({
  name = "Test",
  power = 0,
  cost = 0,
  reward = 0,
  fresher = { id: -1 },
  level = 0,
}) {
  const { attackNft } = useAttack();

  return (
    <div className={styles.testSheet}>
      <h3> {name} </h3>
      <p>Poder: {power}</p>
      <p>Costo: {cost}</p>
      <p>Recompensa: {reward}</p>
      <IoCaretForwardCircleSharp onClick={() => attackNft(level, fresher.id)} />
    </div>
  );
}
