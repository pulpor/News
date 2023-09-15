import { Route, Routes } from 'react-router-dom'

import  { Favorites }  from './components/Favorites'
import { FullNews } from './components/FullNews'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { NavBar } from './components/NavBar'
import NewsList from './components/NewList'
import NewsNav from './components/NewsNav'

function App() {
  return (
    <>
      <Header />

      <Routes>

        <Route path="/" element={<>
          <Hero />
          <NavBar />
          <NewsList />
        </>} />

        <Route path="/favorites" element={<>
          <Hero />
          <NavBar />
          <Favorites />
        </>} />

        <Route path="/newsnav" element={<>
          <NavBar />
          <NewsNav />
        </>} />

        <Route path="/new/:newsId" element={<FullNews />} />
      </Routes>
    </>
  )
}

export default App
