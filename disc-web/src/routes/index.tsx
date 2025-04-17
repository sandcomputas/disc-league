import { createFileRoute } from '@tanstack/react-router'
// @ts-ignore
import styles from './index.module.css';
import LeaderboardTable from "@/components/LeaderboardTable/LeaderboardTable.tsx";


export const Route = createFileRoute('/')({
  component: LeaderBoardPage,
})
function LeaderBoardPage() {

  return (
    <div>
      <h1>Leaderboard</h1>
      <LeaderboardTable/>
    </div>
  )
}
