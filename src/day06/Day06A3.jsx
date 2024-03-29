// 함수형 컴포넌트에서 state를 사용하려면 useState를 import해야 한다.
import { useEffect, useState } from "react"

// 부모에서 전달된 props는 함수의 파라메터로 전달된다.
export default function Day06A3(props) {
    // React 함수형 컴포넌트에서 state를 사용하기 위해
    // useState를 사용해야 한다.
    const [count, setCount] = useState(props.value);
    const [name, setName] = useState("홍길동");

    useEffect(() => {
        console.log('useEffect(() => {}, [count]) ----> ')
        console.log('count = ' + count)
        console.log('\n')

        // 카운트가 5이면 이름을 변경
        if(count === 5) { setName("김유신") }
        // 카운트가 10이면 이름을 변경
        else if(count === 10) { setName("강감찬") }
        
        // if(count > 10) setCount(0)
    }, [count])

    const onClick = () => {
        console.log('setCount() -----> onClick')
        setCount(count + 1);
    }

    // return으로 jsx(DOM)을 반환한다.
    return (
        <div>
            <h3>제 이름은 {name} 입니다.</h3>
            <p>count = {count}</p>
            {/* this.onClick를 사용하여 함수 호출 */}
            <button type="button" onClick={onClick}>버튼을 클릭하세요</button>
        </div>
    )
}