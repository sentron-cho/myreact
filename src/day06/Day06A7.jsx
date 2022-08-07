import React, { useRef } from 'react'

export default function Day06A7({ value }) {
  const inputPrev = useRef();
  const inputNext = useRef();

  const onNext = () => {
    inputNext.current.focus();
  };
  
  const onPrev = () => {
    inputPrev.current.focus();
  };

  return (
    <div>
        <h3>useRef</h3>
        <div>
          <input ref={inputPrev} />
          <button onClick={onNext}>다음</button>
        </div>
        <div>
          <input ref={inputNext} />
          <button onClick={onPrev}>이전</button>
        </div>       
    </div>
  )
}
