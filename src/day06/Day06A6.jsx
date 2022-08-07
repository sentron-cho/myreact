import React, { useEffect, useState, useLayoutEffect } from 'react'

export default function Day06A6({ value }) {
  const [count1, setCount1] = useState(value)
  const [count2, setCount2] = useState(value)

  // useEffect 화면 표시 효과(깜빡임 현상 발생)
  useEffect(() => {
    if (count1 === 0) {
        setCount1(10 + Math.random() * 200)
        // setTimeout(() => {
        //     setCount1(10 + Math.random() * 200)
        // }, 1000);
    }
  }, [count1])

  // useLayoutEffect 화면 표시 효과(깜빡임 현상 발생 안함)
  useLayoutEffect(() => {
    if (count2 === 0) {
        setCount2(10 + Math.random() * 200)
    }
  }, [count2])

  return (
    <div>
        <h3>useEffect 버튼 count = {count1}</h3>
        <button onClick={() => setCount1(0)}>클릭하세요</button>
        
        <h3>useLayoutEffect 버튼 count = {count2}</h3>
        <button onClick={() => setCount2(0)}>클릭하세요</button>
    </div>
  )
}
