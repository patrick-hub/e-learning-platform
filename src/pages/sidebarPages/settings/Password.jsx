import { useState } from "react"
import styles from "./Settings.module.css"

function Password() {
    const [password, setPassword] = useState("")

    return (
        <form className={styles.form}>
        <div className={styles.input}>
            <label htmlFor="currentPassword">Current Password</label>
        <input type="text" value={password} onChange={setPassword}/>
        </div>
        <div  className={styles.input}>
            <label htmlFor="currentPassword">New password</label>
        <input type="text" value={password}/>
        </div>
        <div  className={styles.input}>
            <label htmlFor="currentPassword">Confirm Password</label>
        <input type="text" value={password}/>
        </div> 
        <div>
            <button type='submit'>Update Password</button>
        </div>
        </form>
    )
}

export default Password
