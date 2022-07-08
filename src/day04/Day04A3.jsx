
import React from 'react';

export default class Day04A3 extends React.PureComponent {
    constructor(props) {
        console.log('constructor() =========>');
        super(props);
        this.state = { count: 0 };
    }
    
    componentDidMount() {
        console.log('componentDidMount() =========>');
        // setInterval(function, time) 함수는 두번째 파라메터의 시간 마다(ms) 
        // 매번 주기적(time)으로 첫번째 함수를 호출하는 타이머 함수이다.
        
        // 즉, 1000ms(1초)마다 function(state의 카운트를 1씩 증가)하기위한 명령이다.
        setInterval(() => {
            this.setState({count: this.state.count + 1})
        }, 1000);
    }

    render() {
        console.log('render() =========> ' + this.state.count);
        return <div>카운트 : {this.state.count}</div>
    }
}