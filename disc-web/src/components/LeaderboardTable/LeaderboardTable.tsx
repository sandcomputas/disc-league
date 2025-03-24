import {useQuery} from "@tanstack/react-query";
import LeaderboardTableEntry from "@/components/LeaderboardTable/LeaderboardTableEntry.tsx";
// @ts-ignore
import styles from './LeaderboardTable.module.css';

function LeaderboardTable() {
    const {isPending, error, data} = useQuery<LeaderboardEntry[]>({
        queryKey: ['leaderboard'],
        queryFn: async (): Promise<LeaderboardEntry[]> => {
            return fetch('http://localhost:8080/leaderboard').then((res) => res.json())
        },
    })

    if (isPending) return 'Loading'
    if (error) return 'An error has occured: ' + error.message
    return (
        <>
            <div className={styles["tableHeader"]}>
                <div>Position</div>
                <div>Name</div>
                <div>Other...</div>
            </div>
            <div className={styles["leaderBoardTableContainer"]}>
                {data.map((r) => (
                    <div key={r.position}>
                        <LeaderboardTableEntry leaderboardEntry={r}/>
                    </div>
                ))}
            </div>
        </>
    )
}

export default LeaderboardTable;