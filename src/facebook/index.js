import { Link, Route, BrowserRouter, Routes } from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import Regist from './Regist'
import Identify from './Identify'

import Video from './Video'
import People from './People'
import Game from './Game'

import './default.scss'
import './react.scss'

export default function Facebook() {
  return (
    <BrowserRouter>
      {/* 헤더에서 네비게이션(메뉴)를 설정해야 한다. */}
      {/* <header>
        <Link className="" to="/">홈</Link>
        <Link to="/login">로그인</Link>
        <Link to="/regist">사용자 등록</Link>
        <Link to="/identify">사용자 찾기</Link>
      </header> */}

      {/* 헤더에서 클릭된 URL을 찾아 매칭되는 화면을 그리기 위한 라우터를 설정한다. */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/regist" element={<Regist />} />
          <Route path="/identify" element={<Identify />} />
          <Route path="/video" element={<Video />} />
          <Route path="/people" element={<People />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}