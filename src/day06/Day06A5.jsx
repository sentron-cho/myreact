// 함수형 컴포넌트에서 state를 사용하려면 useState를 import해야 한다.
import React, { useCallback, useState } from "react"

// useCallback를 사용하지 않는 경우
// const Button = ({ onClick, title }) => {
//   console.log(title + " 렌더링");
//   return <button onClick={onClick}>{title}</button>;
// };

// export default function Day06A5(props) {
//     const [count1, setCount1] = useState(props.value);
//     const [count2, setCount2] = useState(props.value);

//     const onClick1 = () => { setCount1(count1 + 1) }
//     const onClick2 = () => { setCount2(count2 + 1) }

//     return (
//         <div>
//             <div>{count1}</div>
//             <div>{count2}</div>
//             <Button onClick={onClick1} title='버튼 1' value={count1}></Button>
//             <Button onClick={onClick2} title='버튼 2' value={count2}></Button>
//         </div>
//     )
// }

// useCallback & memo를 사용하여 최적화 한 경우
const ButtonObject = ({ onClick, title }) => {
  console.log(title + " 렌더링");
  return <button onClick={onClick}>{title}</button>;
};

const Button = React.memo(ButtonObject)

export default function Day06A5(props) {
    const [count1, setCount1] = useState(props.value);
    const [count2, setCount2] = useState(props.value);

    const onClick1 = useCallback(() => { setCount1(count1 + 1) }, [count1])
    const onClick2 = useCallback(() => { setCount2(count2 + 1) }, [count2])

    return (
        <div>
            <div>{count1}</div>
            <div>{count2}</div>
            <Button onClick={onClick1} title='버튼 1' value={count1}></Button>
            <Button onClick={onClick2} title='버튼 2' value={count2}></Button>
        </div>
    )
}