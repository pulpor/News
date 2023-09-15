import { Route, Routes } from 'react-router-dom'

import  { Favorites }  from './components/Favorites'
import { FullNews } from './components/FullNews'
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
        <Route path="/new/:newsId" element={<FullNews />} />
      </Routes>
    </>
  )
}

export default App
