import Header from './Header'
import IMAGE_A from './images/game-a.jpg'
import IMAGE_B from './images/game-b.jpg'
import IMAGE_C from './images/game-c.jpg'
import RIGHT from './images/right.png'
import LEFT from './images/left.png'
import IMAGE_1 from './images/game-1.jpg'
import IMAGE_2 from './images/game-2.jpg'
import IMAGE_3 from './images/game-3.jpg'

export default function Game(props) {
  return (
    <>
      <Header />
      <section class="home-layer game-layer">
        <ul class="list">
          <li class="img-box left">
            <img src={IMAGE_A} alt="이미지"/>
          </li>
          <li class="img-box center">
            <button class="btn-prev"><img src={LEFT} alt="왼쪽"/></button>
            <img src={IMAGE_B} alt="이미지"/>
            <button class="btn-next"><img src={RIGHT} alt="오른쪽"/></button>
          </li>
          <li class="img-box right">
            <img src={IMAGE_C} alt="이미지"/>
          </li>
        </ul>

        <div class="card">
          <h3 class="title">추천게임</h3>
          <ul>
            <li class="c-li"><img src={IMAGE_1} alt="이미지" /></li>
            <li class="c-li"><img src={IMAGE_2} alt="이미지" /></li>
            <li class="c-li"><img src={IMAGE_3} alt="이미지" /></li>
            <li class="c-li"><img src={IMAGE_1} alt="이미지" /></li>
            <li class="c-li"><img src={IMAGE_2} alt="이미지" /></li>
            <li class="c-li"><img src={IMAGE_3} alt="이미지" /></li>
            <button class="btn-next"><img src={RIGHT} alt="오른쪽"/></button>
          </ul>
        </div>
      </section>
    </>
  )
}