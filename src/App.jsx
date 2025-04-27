import { useEffect, useState } from 'react'
import { getRandomName } from './utils/renderName'
import { getCurrentTime } from './utils/getTime'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <Container />
    </>
  )
}

function Header() {
  return (
    <>
      <header className="header">
        <h1 className="header-text">Это мой первый React. проект!</h1>
      </header>
    </>
  )
}

function Container() {
  const [name, setName] = useState(getRandomName())
  useEffect(() => {
    let name = getRandomName()

    setInterval(() => {
      name = getRandomName()
      setName(name)
    }, 10000)
  }, [])
  return (
    <>
    <Header />
    <Greeting name={name} />
    <Clock/>
    </>

  )
}


function Greeting(props) {
  const [isFirstRender, setIsFirstRender] = useState(true)
  const [greeting, setGreeting] = useState(undefined)
  useEffect(() => {
    if (isFirstRender) {
      setGreeting(`Привет ${props.name}`)
      setIsFirstRender(false)
    }
    else {
      setGreeting(`Привет, у тебя поменялось имя, теперь ты ${props.name}!`)
    }
  }, [props.name, isFirstRender])
  return (
    <>
      <p className='greeting'>{greeting}</p>
    </>
  )
}

function Clock() {
  const [currentTime, setCurrentTime] = useState(getCurrentTime())
  const [divisible, setDivisible] = useState(null)
  useEffect(() => {
    const minutes = Number(currentTime.slice(3, 5))
    if (minutes % 5 === 0) {
      setDivisible('Время делится на 5')
    }
    else {
      setDivisible(null)
    }
  }, [currentTime])
  setInterval(() => {
    const time = getCurrentTime()
    setCurrentTime(time)
  }, 1000)
  return (
    <>
      <p className="clocks">{currentTime}</p>
      <p className='clocks'>{divisible}</p>
    </>
  )
}

export default App
