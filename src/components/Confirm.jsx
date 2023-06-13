/* eslint-disable react/prop-types */
import "./styles/Confirm.css"

const Confirm = ({setDeleteClose}) => {
    
  return (
    <div className="delete">
        <h2>Delete</h2>
        <p>User deleted</p>
        <button onClick={setDeleteClose(true)}>Confirm</button>
    </div>
  )
}

export default Confirm