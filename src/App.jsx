import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import FormUsers from './components/FormUsers'
import UserCard from './components/userCard'

function App() {
  const [formClose, setformClose] = useState(true)
  const [updateInfo, setUpdateInfo] = useState()
  const baseUrl = 'https://users-crud.academlo.tech/'

  const handleOpen=()=>{
    setformClose(false)
  }

  const [
    users,
    getAllusers,
    createNewUser,
    deleteUserByid,
    updateUserById
  ]=useFetch(baseUrl)

  useEffect(() => {
    getAllusers("/users")
  }, [])
  console.log(users)
  
  return (
    <div className='app'>
      <div className="header">
      <h1>Users CRUD</h1>
      <button  className="btn_header" onClick={handleOpen}><i className='bx bx-user-plus'></i> Create User</button>
      </div>
      <div className={`form_container ${formClose && "form_close"}`}>
      <FormUsers 
      createNewUser={createNewUser}
      updateInfo={updateInfo}
      updateUserById={updateUserById}
      setUpdateInfo={setUpdateInfo}
      setformClose={setformClose}
      /></div>
      <div className='user_container'>
        {
          users?.map(user=>(
            <UserCard 
            key={user.id}
            user={user}
            deleteUserByid={deleteUserByid}
            setUpdateInfo={setUpdateInfo}
            setformClose={setformClose}
           
            />
          ))
        }
      </div>
     
    </div>
  )
}

export default App
