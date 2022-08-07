import { useState, useMemo } from "react"

// 시간이 오래 걸리는 메소드
const calc = (v) => {
    console.log('calc() ----> ')
    for (let i = 0; i < 999999999; i++) { } // 처리시간
    return v + 10000;
}
    
export default function Day06A4(props) {
    const [count, setCount] = useState(props.value);

    // Day06A3이 렌더링되는 매번 호출되어 성능 문제가 발생한다.
    // const value = calc(props.value)

    // 이 경우 불필요한 작업을 하지 않도록 메모된 내용을 재사용한다.
    const value = useMemo(() => {
        return calc(props.value);
    }, [ props.value ])

    // const onChange = (e) => {
    //     const num = Number(e.target.value)
    //     setCount(num)
    // }

    return (
        <div>
            <input type="number" value={count} onChange={(e) => setCount(Number(e.target.value))}></input>
            <h3>value = {value}</h3>
        </div>
    )
}