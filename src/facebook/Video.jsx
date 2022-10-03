import Header from './Header'
import EDU_ICON from './images/edu_icon.png'
import MORE_ICON from './images/more.png'
import VIDEO_SAMPLE from './images/video_sample.mp4'
import HOME_ICON from './images/home.png'
import YOUTUBE_ICON from './images/youtube.png'
import PEOPLE_ICON from './images/people.png'

export default function Video(props) {
  return (
    <>
      <Header />
      <section class="home-layer video-layer">
          <ul class="list">
            <li>
              <div class="card">
                <div class="head">
                  <div>
                    <img class="logo" src={EDU_ICON} alt="광고 아이콘" />
                    <span class="title">에듀윌</span>
                    <span class="time">8월 19일 오후 5:00</span>
                    <img class="more" src={MORE_ICON} alt="더보기 메뉴"/>
                  </div>
                  <div class="text">
                    <p>초시생 필수템, 만화입문서 무료배포! #합격자수1위 #에듀윌 #공인중개사</p>
                  </div>
                </div>
                <div class="body">
                  <div class="image">
                    <video src={VIDEO_SAMPLE} controls autoplay />
                  </div>
                </div>
                <div class="foot">
                  <div class="left">
                    <div class="btn-box active">
                      <img src={HOME_ICON}alt="홈 바로가기" /><span class="btn-text">좋아요</span>
                    </div>
                    <div class="btn-box">
                      <img src={YOUTUBE_ICON} alt="동영상 바로가기" /><span class="btn-text">댓글 달기</span>
                    </div>
                    <div class="btn-box">
                      <img src={PEOPLE_ICON} alt="사용자 바로가기" /><span class="btn-text">공유 하기</span>
                    </div>
                  </div>
                  <div class="right">
                    <span class="text">댓글 17개,</span>
                    <span class="text">조회 32만회</span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </section>
    </>
  )
}