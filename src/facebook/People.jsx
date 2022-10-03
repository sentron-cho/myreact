import Header from './Header'
import REACT_NATIVE from './images/react_native.jpg'
import PEOPLE_ICON from './images/people.png'
import MENU_ICON from './images/menu.png'
import HOME_ICON from './images/home.png'
import MORE_ICON from './images/more.png'
import { useState } from 'react'

export default function People(props) {
  const [active, setActive] = useState(1)

  return (
    <>
      <Header />
      <section class="home-layer people-layer">
        <div class="bg-image"></div>
        <div class="t-layer">
          <div class="t-img">
            <img src={REACT_NATIVE} alt="이미지" />
            <div class="label">React Native blog 페이지의 그룹</div>
          </div>
          <div class="t-title">
            <div class="tr">
              <h1>React Native Community</h1>
              <span>공개그룹. 멤버 5.4천명</span>
            </div>
            <div class="tl">
              <button class="g-btn"><img src={PEOPLE_ICON} alt="사람"/><span>그룹가입</span></button>
              <img src={MENU_ICON} alt="메뉴" />
            </div>
          </div>
          <div class="t-navi">
            <div class="tr">
              <span class={`box ${active === 1 ? 'active' : ''}`} onClick={() => setActive(1)}><span class="title">정보</span><span class="line"></span></span>
              <span class={`box ${active === 2 ? 'active' : ''}`} onClick={() => setActive(2)}><span class="title">토론</span><span class="line"></span></span>
              <span class={`box ${active === 3 ? 'active' : ''}`} onClick={() => setActive(3)}><span class="title">추천</span><span class="line"></span></span>
              <span class={`box ${active === 4 ? 'active' : ''}`} onClick={() => setActive(4)}><span class="title">주제</span><span class="line"></span></span>
              <span class={`box ${active === 5 ? 'active' : ''}`} onClick={() => setActive(5)}><span class="title">사람</span><span class="line"></span></span>
              <span class={`box ${active === 6 ? 'active' : ''}`} onClick={() => setActive(6)}><span class="title">이벤트</span><span class="line"></span></span>
              <span class={`box ${active === 7 ? 'active' : ''}`} onClick={() => setActive(7)}><span class="title">미디어</span><span class="line"></span></span>
              <span class={`box ${active === 8 ? 'active' : ''}`} onClick={() => setActive(8)}><span class="title">파일</span><span class="line"></span></span>
            </div>
            <div class="tl">
              <img src={HOME_ICON} alt="홈" />
              <img src={MENU_ICON} alt="메뉴" />
            </div>
          </div>
        </div>
        <div class="b-layer">
        </div>
      </section>
    </>
  )
}