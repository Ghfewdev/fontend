import React, { useEffect, useState } from 'react'

const App = () => {
  const [user, setUser] = useState([])
  useEffect(()=> {
    fetch(import.meta.env.VITE_API+"/testt")
    .then(res => res.json())
    .then(result => {
      setUser(result)
      console.log(result)
    })
  },[])
  return (
    <div>
      <ul>{user.map(t => (
          <div key={t.id}>{t.id}, {t.fname}, {t.email}</div>
        ))}
        </ul>
    </div>
  )
}

export default App
