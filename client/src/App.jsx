import { useState } from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Header/>
   <Outlet/>
    </>
  )
}

export default App
