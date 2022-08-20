import { Link, Route, BrowserRouter, Routes } from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import About from './About'

// import './default.css'
import './style.scss'

export default function Day08() {
  return (
    <BrowserRouter>
      {/* 헤더에서 네비게이션(메뉴)를 설정해야 한다. */}
      <header>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/About">About</Link>
      </header>

      {/* 헤더에서 클릭된 URL을 찾아 매칭되는 화면을 그리기 위한 라우터를 설정한다. */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}