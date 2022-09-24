
import MORE_ICON from './images/more.png'
import FACEBOOK_ICON from './images/facebook-icon.png'
import HOME_ICON from './images/home.png'
import YOUTUBE_ICON from './images/youtube.png'
import PEOPLE_ICON from './images/people.png'
import GAME_ICON from './images/game.png'
import MENU_ICON from './images/menu.png'
import ALARM_ICON from './images/alarm.png'

export default function Header() {
    return (
      <div className="header">
        <div class="head-logo">
          <img src={FACEBOOK_ICON} alt="메인 로고 아이콘" />
          <input placeholder="Facebook 검색" />
        </div>
        <div class="head-nav">
          <nav class="">
            <span class="btn-box active" onClick={() => window.location.href = "/"} >
              <img src={HOME_ICON} alt="홈 바로가기" />
              <span class="btn-line"></span>
            </span>
            <span class="btn-box" onClick={() => window.location.href = "/video"}>
              <img src={YOUTUBE_ICON} alt="동영상 바로가기"/>
              <span class="btn-line"></span>
            </span>
            <span class="btn-box" onClick={() => window.location.href = "/people"} >
              <img src={PEOPLE_ICON} alt="사용자 바로가기" />
              <span class="btn-line"></span>
            </span>
            <span class="btn-box" onClick={() => window.location.href = "/game"} >
              <img src={GAME_ICON} alt="게임 바로가기" />
              <span class="btn-line"></span>
            </span>
          </nav>
        </div>
        <div class="head-side">
          <span class="btn-box">
            <img src={MENU_ICON} alt="메뉴 바로가기" />
          </span>
          <span class="btn-box">
            <img src={ALARM_ICON} alt="알림 바로가기" />
          </span>
          <span class="btn-box">
            <img src={MORE_ICON} alt="더보기 바로가기" />
          </span>
        </div>
      </div>
    )
  }
  