//@ts-ignore
import styles from './FormEntry.module.css';

interface Props {
    value: number
}

export function FormEntry({value}: Props) {
    // TODO: denne kan ta hensyn til bane rating?
    const determineColor = (value: number) => {
        console.log(value, value < 0)
        if (value <= 5) return '#88d498';
        if (value <= 10) return '#f7b733';
        if (value >= 11) return '#fc4a1a';
    }

    return (
        <div
            className={styles.formEntry}
            style={{backgroundColor: determineColor(value)}}
        >
            {value}
        </div>
    )
}
