import {createRootRoute, Outlet} from '@tanstack/react-router'
import {TanStackRouterDevtools} from '@tanstack/router-devtools'
// @ts-ignore
import styles from './root.module.css'
// @ts-ignore
import image from "@/assets/logo.png"


export const Route = createRootRoute({
    component: RootComponent,
})

function RootComponent() {

    return (
        <>
            <div className={styles["logoContainer"]}>
                <img className={styles["logo"]} src={image}/>
            </div>
            <div className={styles["outletContainer"]}>
                <Outlet/>
            </div>
            <TanStackRouterDevtools position="bottom-right"/>
        </>
    )
}
