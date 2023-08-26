import { Outlet } from "react-router"
import styles from './Dashboard.module.css'

function DisplayPage() {
    return (
        <div className={styles.outlet}>
              <Outlet />
        </div>
    )
}

export default DisplayPage
