import { useState } from 'react'

export default function Home(props) {
  const [userid, setUserid] = useState('')
  const [password, setPassword] = useState('')

  const onLogin = () => {
    alert(userid + '(' + password + ')로 로그인하였습니다.')
    window.location.href = '/'
  }

  return (
    <div className="login-box">
      <input
        className="input-email"
        type="text"
        onChange={(e) => setUserid(e.target.value)}
        placeholder="이메일 또는 전화번호"
      />
      <input
        className="input-pass"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="비밀번호"
      />
      <button className="login-button" name="login" onClick={onLogin}>
        로그인
      </button>

      <span>비밀번호를 잊으셨나요?</span>
      <div className="div-line"></div>
      <span>새 계정 만들기</span>
    </div>
  )
}
