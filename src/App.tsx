import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";
type UserType = {
  id: string,
  name: string
}
const App = () => {
  const [users, setUsers] = useState<UserType[]>([])
  const getUser = () => {
    axios.get(`http://localhost:3000/users`).then((res) => setUsers(res.data))
  }
  useEffect(() => {
    getUser()
  }, [])
  const createUser = () => {
    axios.post(`http://localhost:3000/users`).then(() => {
      getUser()
    })
  }
  return(
    <>
      <button onClick={createUser}>create</button>
    <div>{users.map((user) => {
      return <div key={user.id}>{user.name}</div>
    })}</div></>
  )
}

export default App;
