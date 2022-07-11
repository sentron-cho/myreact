
import React from 'react';

// 컴포넌트 방식
export default class Day03A1 extends React.Component {
    // DOM을 만들어 결과를 반환한다.
    render() {
        return (
            // 오류
            // <div>Hello</div>
            // <div>World!</div>

            // 정상
            <div>
                {/* 주석은 여기에 ... */}
                <div>Hello</div>
                <div>World</div>
            </div>
        )
    }
}

/*
// 함수형 방식
export default function Day03A1() {
    return (
        <div>
            <div>Hello</div>
            <div>World</div>
        </div>
    )
}
*/