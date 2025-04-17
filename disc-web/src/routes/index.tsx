import { createFileRoute, Link } from '@tanstack/react-router'
// @ts-ignore
import styles from './index.module.css';
import LeaderboardTable from "@/components/LeaderboardTable/LeaderboardTable.tsx";
import { useState } from "react";


export const Route = createFileRoute('/')({
  component: LeaderBoardPage,
})

interface NavBarItem {
  id: string;
  name: string;
  to: string;
}

function LeaderBoardPage() {
  const tabs: NavBarItem[] = [
    {id: 'leaderboard', name: 'Leaderboard', to: '/'},
    {id: 'rounds', name: 'Rounds', to: '/rounds'}
  ]
  const [selectedTab, setSelectedTab] = useState(tabs[0].id)

  return (
    <div className={styles.headerContainer}>
      <div className={styles.navbarContainer}>
        {tabs.map((t) => (
          <Link to="/" className={`${styles.navbarButton} ${selectedTab === t.id && styles.active}`} onClick={() => setSelectedTab(t.id)}>{t.name}</Link>
        ))}
      </div>
      <h1>Leaderboard</h1>
      <LeaderboardTable/>
    </div>
  )
}
