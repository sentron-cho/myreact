
import React from 'react';


// 컴포넌트 방식
export default class Day03A2 extends React.Component {
    // DOM을 만들어 결과를 반환한다.
    render() {
        const name = "홍길동";
        return (
            <div>
                <div>Hello</div>
                <div>{name}!</div>
            </div>
        )
    }
}


/* 
// 함수형 방식
export default function Day03A2() {
	const name = "홍길동";
	return (
		<div>
			<div>Hello</div>
			<div>{name}!</div>
		</div>
	);
} 
 */