import { useState } from "react"

function Password() {
    const [password, setPassword] = useState("")

    return (
        <form>
        <div>
            <label htmlFor="currentPassword">Current Password</label>
        <input type="text" value={password} onChange={setPassword}/>
        </div>
        <div>
            <label htmlFor="currentPassword">New password</label>
        <input type="text" value={password}/>
        </div>
        <div>
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
