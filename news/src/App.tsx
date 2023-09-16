import { Route, Routes, useNavigate } from 'react-router-dom'

import  { Favorites }  from './components/Favorites'
import { FullNews } from './components/FullNews'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { NavBar } from './components/NavBar'
import NewsList from './components/NewList'
import NewsNav from './components/NewsNav'
import Release from './components/Release'
import { Footer } from './components/Footer'

function App() {
  const navigate = useNavigate();
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
          <NavBar />
          <Favorites />
        </>} />

        <Route path="/newsnav" element={<>
          <NavBar />
          <NewsNav />
        </>} />

        <Route path="/release" element={<>
          <NavBar />
          <Release />
        </>} />

        <Route path="/new/:newsId" element={<>
          <FullNews />
          <Footer handleButtonClick={() => navigate('/newsnav')} />
        </>} />

      </Routes>
    </>
  )
}

export default App
