import React from 'react'
import Men from './components/Men'
import Women from './components/Women';
const App = () => {
  const users = [
    {
      name: "Rahul",
      email: "rahul@gmail.com",
      gender: "male",
      color: "blue"
    },
    {
      name: "Amit",
      email: "amit@gmail.com",
      gender: "male",
      color: "green"
    },
    {
      name: "Priya",
      email: "priya@gmail.com",
      gender: "female",
      color: "pink"
    },
    {
      name: "Neha",
      email: "neha@gmail.com",
      gender: "female",
      color: "purple"
    }
  ];

  return (
    <div>
      {users.map(function(elem){
        let card= elem.gender==='male'?<Men/>:<Women/>
        return card;
      })}
    </div>
  )
}

export default App

