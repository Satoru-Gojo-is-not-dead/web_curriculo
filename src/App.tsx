import './styles/components/App.sass'

import Header from './components/Header'

import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default App
