import { Link, Route, BrowserRouter, Routes } from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import About from './About'
import NotFound from './NotFound'

import './default.css'

export default function Day05A1() {
  return (
    <BrowserRouter>
      {/* 헤더에서 네비게이션(메뉴)를 설정해야 한다. */}
      <header>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/down">Down</Link>
        <Link to="/login">Login</Link>
      </header>

      {/* 헤더에서 클릭된 URL을 찾아 매칭되는 화면을 그리기 위한 라우터를 설정한다. */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}