
import React from 'react';

// 컴포넌트 생명 주기 확인
export default class Day03A4 extends React.PureComponent {
    state = {
        count: 0
    }

    constructor(props) {
        console.log("constructor() ==========> ");
        super(props);

        // console.dir(props);
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log("getDerivedStateFromProps() ==========> ");
        // console.dir(nextProps);
        // console.dir(prevState);

        // 조건에 따라 특정 값 동기화
        // if(nextProps.value !== prevState.count) {
        //   return { count: nextProps.value };
        // }

        // state를 변경할 필요가 없다면 null을 반환
        return null;
    }

    componentDidMount() {
        console.log("componentDidMount() ==========> ");

    }
    
    render() {
        console.log("render() ==========> ");
    
        return <ul>
            <li>props.title = {this.props.title}</li>
            <li>props.name = {this.props.name}</li>
            <li>props.value = {this.props.value}</li>
            <li>state.count = {this.state.count}</li>
        </ul>;
    }
}