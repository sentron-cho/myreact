import { useState } from 'react'
import Header from './Header'
import Menu from './Menu'

import IMAGE_A from './images/game-a.jpg'
import IMAGE_B from './images/game-b.jpg'
import IMAGE_C from './images/game-c.jpg'
import RIGHT from './images/right.png'
import LEFT from './images/left.png'
import IMAGE_1 from './images/game-1.jpg'
import IMAGE_2 from './images/game-2.jpg'
import IMAGE_3 from './images/game-3.jpg'

export default function Game(props) {
  const [menu, setMenu] = useState(false);

  const onClickMenu = (isshow) => {
    setMenu(isshow)
  }

  return (
    <>
      <Header onClick={() => onClickMenu(true)}/>
      <Menu show={menu} onClick={() => onClickMenu(false)}/>
      <section className="home-layer game-layer">
        <ul className="list">
          <li className="img-box left">
            <img src={IMAGE_A} alt="이미지"/>
          </li>
          <li className="img-box center">
            <button className="btn-prev"><img src={LEFT} alt="왼쪽"/></button>
            <img src={IMAGE_B} alt="이미지"/>
            <button className="btn-next"><img src={RIGHT} alt="오른쪽"/></button>
          </li>
          <li className="img-box right">
            <img src={IMAGE_C} alt="이미지"/>
          </li>
        </ul>

        <div className="card">
          <h3 className="title">추천게임</h3>
          <ul>
            <ImageBox src={IMAGE_1} />
            <ImageBox src={IMAGE_2} />
            <ImageBox src={IMAGE_3} />
            <ImageBox src={IMAGE_1} />
            <ImageBox src={IMAGE_2} />
            <ImageBox src={IMAGE_3} />
            <button className="btn-next"><img src={RIGHT} alt="오른쪽"/></button>
          </ul>
        </div>
      </section>
    </>
  )
}

const ImageBox = (props) => {
  return (<li className="c-li"><img src={props.image} alt="이미지" /></li>)
}