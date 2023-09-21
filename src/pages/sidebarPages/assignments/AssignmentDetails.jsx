import { useNavigate } from "react-router"

function AssignmentDetails() {
    const navigate = useNavigate()

    function goBack() {
        navigate(-1)
    }
    return (
        <div>
            <button onClick={goBack}>Go back</button>
            <h1>Hello</h1>
        </div>
    )
}

export default AssignmentDetails
