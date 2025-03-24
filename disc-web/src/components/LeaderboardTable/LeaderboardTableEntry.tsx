// @ts-ignore
import styles from './LeaderboardTable.module.css';

interface Props {
    leaderboardEntry: LeaderboardEntry;
}

function LeaderboardTableEntry({leaderboardEntry}: Props) {
    return (
        <div className={styles["leaderboardEntryContainer"]}>
            <div>{leaderboardEntry.position}</div>
            <div>{leaderboardEntry.name}</div>
            <div>Something else</div>
        </div>
    )
}

export default LeaderboardTableEntry;