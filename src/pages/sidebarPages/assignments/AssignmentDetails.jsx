import { useNavigate } from "react-router"
import { Back } from "../../../svg"

function AssignmentDetails() {
    const navigate = useNavigate()

    function goBack() {
        navigate(-1)
    }
    return (
        <div>
            <small onClick={goBack} style={{cursor: "pointer", color:"#004C97", fontWeight:"bold", display: "flex", gap: "5px"}}><img src={Back} alt=""/> Go back</small>
            <h1>Hello</h1>
        </div>
    )
}

export default AssignmentDetails
