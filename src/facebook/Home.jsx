import Header from './Header'

import EDU_ICON from './images/edu_icon.png'
import MORE_ICON from './images/more.png'
import MAIN_IMAGE from './images/sample-image-1.jpg'
import HOME_ICON from './images/home.png'
import YOUTUBE_ICON from './images/youtube.png'
import PEOPLE_ICON from './images/people.png'

export default function Home(props) {
  return (
    <>
      <Header />
      <section class="home-layer">
        <ul class="list">
          <li>
            <div class="card">
              <div class="head">
                <div>
                  <img class="logo" src={EDU_ICON} alt="광고 아이콘" />
                  <span class="title">에듀윌</span>
                  <img class="more" src={MORE_ICON} alt="더보기 메뉴" />
                </div>
                <div class="text">
                  <p>🚨기간한정 특별 이벤트🚨</p>
                  <p>초시생 필수템, 만화입문서 무료배포!</p>
                  <p class="blue">#합격자수1위 #에듀윌 #공인중개사</p>
                </div>
              </div>
              <div class="body">
                <div class="image">
                  <img src={MAIN_IMAGE} alt="광고 메인 이미지" />
                </div>
                <div class="text">
                  <div>
                    <p class="grey sm">EDUWILL.NET</p>
                    <p class="bold">입문교재 선착순 무료신청☞</p>
                    <p class="grey">합격자 수 1위 에듀윌 공인중개사</p>
                  </div>
                  <button>더 알아보기</button>
                </div>
              </div>
              <div class="foot">
                <div class="btn-box active">
                  <div>
                    <img src={HOME_ICON} alt="홈 바로가기" />
                    <span class="btn-text">좋아요</span>
                  </div>
                </div>
                <div class="btn-box">
                  <div>
                    <img src={YOUTUBE_ICON} alt="동영상 바로가기" />
                    <span class="btn-text">댓글 달기</span>
                  </div>
                </div>
                <div class="btn-box">
                  <div>
                    <img src={PEOPLE_ICON} alt="사용자 바로가기" />
                    <span class="btn-text">공유 하기</span>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </>
  )
}