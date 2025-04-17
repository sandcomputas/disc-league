// @ts-ignore
import styles from "./RegisterNewRoundDialog.module.css";

interface Props {
  close: () => void
}

export const RegisterNewRoundDialog = ({close}: Props) => {
  return (
    <div className={styles["modal-overlay"]}>
      <div className={styles["modal-content"]}>
        <h2>Register new round</h2>
        <button onClick={() => close()}>close</button>
      </div>

    </div>
  )
}