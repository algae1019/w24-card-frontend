import React, { useEffect, useState } from 'react'
import './App.css'
import Games from './Games.js'

const App = () => {
  const [games, setGames] = useState([])

  const fetchData = async () => {
    try {
      const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:8080/card/games'
      const response = await fetch(apiUrl)

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      const data = await response.json()

      setGames(data)
    } catch (error) {
      console.error('Error fetching data: ', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="App">
      <Header />
      <Cards title="Playing Card Games" listGame={games} />
    </div>
  )
}

const Header = () => {
  return <h1>Cards</h1>
}

const Cards = ({ title, listGame }) => {
  return (
    <div className="gameslist">
      <div className="gamestitle">{title}</div>
      <div className="card-games">
        {listGame.map((game) => <Games key={game.id} game={game} />)}
      </div>
    </div>
  )
}

export default App
