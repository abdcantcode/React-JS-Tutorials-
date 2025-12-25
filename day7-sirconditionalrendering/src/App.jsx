import React from 'react'
import Boy from './components/Boy'
import Girls from './components/Girls'
const App = () => {
  const users = [
  { name: "Abdullah", age: 22, gender: "male" },
  { name: "Ayaan", age: 19, gender: "male" },
  { name: "Sara", age: 25, gender: "female" },
  { name: "Rahul", age: 28, gender: "male" },
  { name: "Neha", age: 21, gender: "female" },
  { name: "Imran", age: 30, gender: "male" }
];



  return (
    <div className='h-full w-full'>
      {users[0].gender==='male'?<Boy/>:<Girls/>}
      {users[1].gender==='male'?<Boy/>:<Girls/>}
      {users[2].gender==='male'?<Boy/>:<Girls/>}
      {users[3].gender==='male'?<Boy/>:<Girls/>}
      {users[4].gender==='male'?<Boy/>:<Girls/>}
    </div>
  )
}

export default App
