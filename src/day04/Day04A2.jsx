
import React from 'react';

export default class Day04A2 extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }
    
    // 함수를 만들때 주의할 점은 this 사용을 위해
    // 반드시 화살표(=>) 함수를 이용해 함수를 만들어야 한다.
    onButtonClick = () => {
        console.dir(this.state);
        console.dir(this.props);

        const {count} = this.state;
        const {max} = this.props;

        if(Number(count) >= Number(max)) {
            this.setState({count: 0})
        } else {
            this.setState({count: count + 1})
        }
    }

    render() {
        return <div>
            <h3>카운트 : {this.state.count}</h3>
            <button type='button' onClick={this.onButtonClick}>클릭하세요</button>
        </div>
    }
}