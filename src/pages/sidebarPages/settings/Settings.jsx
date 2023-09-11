import { Link } from "react-router-dom"

function Settings() {
    return (
        <div>
            <nav style={{display: "flex", listStyle: "none", textDecoration:"none", gap:"20px", borderBottom: "1px solid grey", borderBlockWidth: "1px"}}>
                <Link to="/dashboard/settings/profile" style={{textDecoration: "none"}}>Profile</Link>
                <Link style={{textDecoration: "none"}}>Password</Link>
                <Link style={{textDecoration: "none"}}>Notification</Link>
            </nav>
        </div>
    )
}

export default Settings
