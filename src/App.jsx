import { useState } from 'react'
import ContactList from './components/ContactList'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ContactList />
    </>
  )
}

export default App
