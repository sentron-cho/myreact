import Header from './Header'
import REACT_NATIVE from './images/react_native.jpg'
import PEOPLE_ICON from './images/people.png'
import MENU_ICON from './images/menu.png'
import HOME_ICON from './images/home.png'
import { useState } from 'react'

export default function People(props) {
  const [active, setActive] = useState(1)

  return (
    <>
      <Header />
      <section className="home-layer people-layer">
        <div className="bg-image"></div>
        <div className="t-layer">
          <div className="t-img">
            <img src={REACT_NATIVE} alt="이미지" />
            <div className="label">React Native blog 페이지의 그룹</div>
          </div>
          <div className="t-title">
            <div className="tr">
              <h1>React Native Community</h1>
              <span>공개그룹. 멤버 5.4천명</span>
            </div>
            <div className="tl">
              <button className="g-btn"><img src={PEOPLE_ICON} alt="사람"/><span>그룹가입</span></button>
              <img src={MENU_ICON} alt="메뉴" />
            </div>
          </div>
          <div className="t-navi">
            <div className="tr">
              <span className={`box ${active === 1 ? 'active' : ''}`} onClick={() => setActive(1)}><span className="title">정보</span><span className="line"></span></span>
              <span className={`box ${active === 2 ? 'active' : ''}`} onClick={() => setActive(2)}><span className="title">토론</span><span className="line"></span></span>
              <span className={`box ${active === 3 ? 'active' : ''}`} onClick={() => setActive(3)}><span className="title">추천</span><span className="line"></span></span>
              <span className={`box ${active === 4 ? 'active' : ''}`} onClick={() => setActive(4)}><span className="title">주제</span><span className="line"></span></span>
              <span className={`box ${active === 5 ? 'active' : ''}`} onClick={() => setActive(5)}><span className="title">사람</span><span className="line"></span></span>
              <span className={`box ${active === 6 ? 'active' : ''}`} onClick={() => setActive(6)}><span className="title">이벤트</span><span className="line"></span></span>
              <span className={`box ${active === 7 ? 'active' : ''}`} onClick={() => setActive(7)}><span className="title">미디어</span><span className="line"></span></span>
              <span className={`box ${active === 8 ? 'active' : ''}`} onClick={() => setActive(8)}><span className="title">파일</span><span className="line"></span></span>
            </div>
            <div className="tl">
              <img src={HOME_ICON} alt="홈" />
              <img src={MENU_ICON} alt="메뉴" />
            </div>
          </div>
        </div>
        <div className="b-layer">
        </div>
      </section>
    </>
  )
}