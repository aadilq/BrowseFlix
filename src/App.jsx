/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react'
import './App.css'



const Card = ({title}) => {
  const [hasLiked, setHasLiked] = useState(false);
  return (
    <div className='card-component'>
      <h2>{title}</h2>

      <button onClick={() => setHasLiked(!hasLiked)}>
        {hasLiked ? '❤️' : '🤍'}
      </button>
      

    </div>
  )
}



const App = () => {
  return (
    <div className='card-container'>
      <Card title = "The Batman" />
      <Card title= "Top Gun"/>
      <Card title = "Mission Impossible"/>

    </div>
  )
}

export default App





