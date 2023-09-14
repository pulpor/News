import { Route, Routes } from 'react-router-dom'

import  { Favorites }  from './components/Favorites'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import NewsList from './components/NewList'

function App() {
  return ( 
    <>
      <Header />
      <Hero />
      <Routes>
        <Route path="/" element={ <NewsList /> } />
        <Route path="/favorites" element={ <Favorites /> } />
      </Routes>
    </>
  )
}

export default App
