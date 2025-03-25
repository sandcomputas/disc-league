// @ts-ignore
import styles from './LeaderboardTable.module.css';
import {FormEntry} from "@/components/LeaderboardTable/FormEntry/FormEntry.tsx";

interface Props {
    leaderboardEntry: LeaderboardEntry;
}

function LeaderboardTableEntry({leaderboardEntry}: Props) {
    return (
        <div className={styles.leaderboardEntryContainer}>
            <div>{leaderboardEntry.position}</div>
            <div>{leaderboardEntry.name}</div>
            <div>Something else</div>
            <div className={styles.formEntry}>
                {leaderboardEntry.lastFive && leaderboardEntry.lastFive.map((n) => <FormEntry value={n}/>)}
            </div>
        </div>
    )
}

export default LeaderboardTableEntry;