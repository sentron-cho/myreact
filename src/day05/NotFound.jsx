export default function NotFound() {
    return (
        <div>
            <h3>화면을 찾을수 없습니다.</h3>
            <button onClick={() => window.location.href='/'}>메인가기</button>
            <button onClick={() => window.history.go(-1)}>뒤로가기</button>
            <button onClick={() => window.location.href='/about'}>About</button>
        </div>
    )
}