import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
// @ts-ignore
import styles from './root.module.css'
// @ts-ignore
import image from "@/assets/logo.png"
import { RegisterNewRoundBtn } from "@/components/RegisterNewRoundBtn/RegisterNewRoundBtn.tsx";
import { useState } from "react";
import { RegisterNewRoundDialog } from "@/components/RegisterNewRoundDialog/RegisterNewRoundDialog.tsx";


export const Route = createRootRoute({
  component: RootComponent,
})

interface NavBarItem {
  id: string;
  name: string;
  to: string;
}

function RootComponent() {
  const tabs: NavBarItem[] = [
    {id: 'leaderboard', name: 'Leaderboard', to: '/'},
    {id: 'rounds', name: 'Rounds', to: '/rounds'}
  ]
  const [selectedTab, setSelectedTab] = useState(tabs[0].id)

  const [registerNewRoundOpen, setRegisterNewRoundOpen] = useState(false)

  return (
    <>
      <div className={styles["logoContainer"]}>
        <img className={styles["logo"]} src={image}/>
      </div>
      <div className={styles["outletContainer"]}>
        <div className={styles.navbarContainer}>
          {tabs.map((t) => (
            <Link to="/" className={`${styles.navbarButton} ${selectedTab === t.id && styles.active}`}
                  onClick={() => setSelectedTab(t.id)}>{t.name}</Link>
          ))}
        </div>
        <Outlet/>
      </div>
      {registerNewRoundOpen && <RegisterNewRoundDialog close={() => setRegisterNewRoundOpen(false)}/>}
      <RegisterNewRoundBtn open={() => setRegisterNewRoundOpen(true)}/>
      <TanStackRouterDevtools position="bottom-right"/>
    </>
  )
}
