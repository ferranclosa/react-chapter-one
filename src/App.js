import React, { useState } from 'react';
import './App.css';
import Counter from '../src/Counter'

const  App = () => {

  let greeting = 'Welcome to React'
  const user = {fistName: 'Ferran', lastName: 'Closa'}
  const users = [
    {shortName: 'Closa', isDeveloper: true}, 
    {shortName: 'Giralt', isDeveloper: false}, 
    {shortName: 'Cervera', isDeveloper: true}, 
    {shortName: 'Tim', isDeveloper: false}, 
    {shortName: 'Tom', isDeveloper: true}, 
    {shortName: 'Cocovado', isDeveloper: true}, 
    
  ]
  const [query, setQuery] = useState('')

  const showUsers = true

  if (!showUsers) {
    return null
  }

 const handleChange = event => {
      setQuery(event.target.value)
  }
  return (
    <div className="App">

      <h1>{greeting} {user.lastName}
      </h1>
      { showUsers ? (
      <ul>
          {users
            .filter(user => user.shortName.includes(query))
            .map(user =>
               <li>{user.shortName}</li>
          )}
      </ul>
      ) : null}
      <input type="text" onChange={handleChange} />
     <Counter />
    </div>
  );
}

export default App;
