//@ts-ignore
import styles from './RegisterNewRoundBtn.module.css';

interface Props {
  open: () => void
}
export const RegisterNewRoundBtn = ({open}: Props) => {
  return (
    <div onClick={() => open()} className={styles.button}>
      <span className={styles.plusSign}>+</span>
    </div>
  )
}