import { useState } from 'react'
import SAMPLE_IMG from './images/sample_image.jpg'
import CLOSE_IMG from './images/close.png'

export default function Home(props) {
  const [list, setList] = useState([
    {
      name: 'Cha & Kwon',
      title: '변호사 및 법률 사무소',
      text: '정천수 님 외 ${1}명이 이 페이지를 좋아합니다.',
      count: 1,
    },
    {
      name: '홍길동',
      title: '우리의 영웅',
      text: '홍길동의 무예는 ${1}단 입니다.',
      count: 1,
    },
    {
      name: '이순신',
      title: '임진왜란',
      text: '우리에겐 아직 ${1}척의 배가 있습니다.',
      count: 1,
    },
  ])

  const onClickLink = () => {
    window.open('http://www.daum.net')
  }

  const onClickLike = (item) => {
    item.count = item.count + 1
    // 자바스크립트 {...} [...] 문법 (비구조화 할당/구조분해 할당)
    setList([...list])
  }

  return (
    <section className="container">
      <ul className="list">
        {list.map((item, i) => {
          return (
            <li key={i}>
              <div className="card">
                <img src={SAMPLE_IMG} alt="광고 메인 이미지" />
                <div className="text">
                  <span className="title" onClick={onClickLink}>
                    {item.name}
                  </span>
                  <span className="label">{item.title}</span>
                  <span className="label">
                    {item.text.replace('${1}', item.count)}
                  </span>
                </div>
                <button onClick={() => onClickLike(item)}>좋아요</button>
                <span className="btn-box">
                  <img src={CLOSE_IMG} alt="닫기 버튼" />
                </span>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
