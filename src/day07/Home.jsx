import { useState } from 'react'
import SAMPLE_IMG from "./images/sample_image.jpg"
import CLOSE_IMG from "./images/close.png"

// export default function Home(props) {
//   const [count, setCount] = useState(0)

//   const onClickLink = () => {
//     window.open('http://www.daum.net')
//   }

//   const onClickLike = () => {
//     setCount(count+1)
//   }

//   return (
//     <section className="container">
//       <ul className="list">
//         <li>
//           <div className="card">
//             <img src={SAMPLE_IMG} alt="광고 메인 이미지" />
//             <div className="text">
//               <span className="title" onClick={onClickLink}>Cha & Kwon</span>
//               <span className="label">변호사 및 법률 사무소</span>
//               <span className="label">정천수 님 외 {count}명이 이 페이지를 좋아합니다.</span>
//             </div>
//             <button onClick={onClickLike}>좋아요</button>
//             <span className="btn-box">
//               <img src={CLOSE_IMG} alt="닫기 버튼" />
//             </span>
//           </div>
//         </li>
//       </ul>
//     </section>
//   )
// }

// 1차 리펙토링 (리스트를 만들자)
// export default function Home(props) {
//   const [count, setCount] = useState(0)
//   const [list, setList] = useState([
//     {name: 'Cha & Kwon', title: '변호사 및 법률 사무소', text: '정천수 님 외 2명이 이 페이지를 좋아합니다.'},
//     {name: '홍길동', title: '우리의 영웅', text: '홍길동의 무예는 1단 입니다.'},
//     {name: '이순신', title: '임진왜란', text: '우리에겐 아직 12척의 배가 있습니다.'}
//   ])

//   const onClickLink = () => {
//     window.open('http://www.daum.net')
//   }

//   const onClickLike = () => {
//     setCount(count+1)
//   }

//   return (
//     <section className="container">
//       <ul className="list">
//         { list.map((item) => {
//           return <li>
//             <div className="card">
//               <img src={SAMPLE_IMG} alt="광고 메인 이미지" />
//               <div className="text">
//                 <span className="title" onClick={onClickLink}>{item.name}</span>
//                 <span className="label">{item.title}</span>
//                 <span className="label">{item.text}</span>
//               </div>
//               <button onClick={onClickLike}>좋아요</button>
//               <span className="btn-box">
//                 <img src={CLOSE_IMG} alt="닫기 버튼" />
//               </span>
//             </div>
//           </li>
//         }) }
//       </ul>
//     </section>
//   )
// }

// 2차 리펙토링(카운팅을 하자.)
export default function Home(props) {
  const [list, setList] = useState([
    {name: 'Cha & Kwon', title: '변호사 및 법률 사무소', text: '정천수 님 외 ${1}명이 이 페이지를 좋아합니다.', count: 1},
    {name: '홍길동', title: '우리의 영웅', text: '홍길동의 무예는 ${1}단 입니다.', count: 1},
    {name: '이순신', title: '임진왜란', text: '우리에겐 아직 ${1}척의 배가 있습니다.', count: 1}
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
        { list.map((item, i) => {
          return <li key={i}>
            <div className="card">
              <img src={SAMPLE_IMG} alt="광고 메인 이미지" />
              <div className="text">
                <span className="title" onClick={onClickLink}>{item.name}</span>
                <span className="label">{item.title}</span>
                <span className="label">{item.text.replace('${1}', item.count)}</span>
              </div>
              <button onClick={() => onClickLike(item)}>좋아요</button>
              <span className="btn-box">
                <img src={CLOSE_IMG} alt="닫기 버튼" />
              </span>
            </div>
          </li>
        }) }
      </ul>
    </section>
  )
}