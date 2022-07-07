
import React from 'react';

// 컴포넌트 방식 1
export default class Day03A3 extends React.PureComponent {
    render() {
        let title = '';
        const islogin = 'Y';

        if(islogin  === 'Y') { title = <div>회원 입니다.</div>; } 
        else { title = <div>비회원 입니다.</div>; }
    
        return title;
    }
}


/* 
// 컴포넌트 방식 2
export default class Day03A3 extends React.PureComponent {
    render() {
        const islogin = 'Y';
        return (
            <div>
                {islogin  === 'Y' ? (<div>회원</div>) : (<div>비회원</div>)}
            </div>
        );
    }
} 
 */

/*
// 함수형 방식
export default function Day03A3() {
    let title = '';
    const islogin = 'Y';

    if(islogin  === 'Y') { title = <div>회원 입니다.</div>; } 
    else { title = <div>비회원 입니다.</div>; }

    return title;
}
*/

/* 
export default function Day03A3() {
    const islogin = 'Y';
    return (
        <div>
            {islogin  === 'Y' ? (<div>회원</div>) : (<div>비회원</div>)}
        </div>
    );
}
*/