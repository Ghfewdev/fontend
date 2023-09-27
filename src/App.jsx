import React, { useEffect, useState } from 'react'

const App = () => {
  const [user, setUser] = useState([])
  useEffect(()=> {
    fetch(import.meta.env.VITE_API+"/users")
    .then(res => res.json())
    .then(result => {
      setUser(result)
      console.log(result)
    })
  },[])
  return (
    <div>
      <ul>{user.map(user => (
          <div key={user.id}>{user.id}, {user.name}, {user.email}</div>
        ))}
        </ul>
    </div>
  )
}

export default App
