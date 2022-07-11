import React from 'react';

// React 안의 Component 상속하여 컴포넌트(클래스) 생성
export default class Day03A4 extends React.Component {
     // DOM을 만들어 결과를 반환한다.
    render() {
        console.log("render() ==========> ");
        // this.props = { title: "저의 이름은", name: "홍길동" }
        console.dir(this.props);
    
        return <h1>
            {this.props.title} 이름은 {this.props.name} 입니다.
        </h1>;
    }
}