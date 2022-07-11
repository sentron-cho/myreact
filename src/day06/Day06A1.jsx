import { Component } from 'react';

// React.Component 또는
export default class Day06A1 extends Component {
    // props or state 및 함수 접근시 this를 주로 사용한다.

    constructor(props) {
        super(props);
        // 객체 형식의 state를 선언 및 초기화 할 수 있다.
        // this.state, this.props을 사용
        this.state = { name : "홍길동", count: this.props.value }
    }

    onClick = () => {
        // this.setState를 사용
        this.setState( { count: this.state.count + 1 } );
    }

    // render 함수 안에서 return으로 jsx(DOM)을 반환한다.
    render() {
        return (
            <div>
                <h3>제 이름은 {this.state.name} 입니다.</h3>
                <p>count = {this.state.count}</p>
                {/* this.onClick를 사용하여 함수 호출 */}
                <button type="button" onClick={this.onClick}>버튼을 클릭하세요</button>
            </div>
        )
    }
}