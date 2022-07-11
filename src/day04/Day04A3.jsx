
import React from 'react';

export default class Day04A3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { birthday: 2000 };
    }
    
    // 함수를 만들때 주의할 점은 this 사용을 위해
    // 반드시 화살표(=>) 함수를 이용해 함수를 만들어야 한다.
    onChangeSelection = (event) => {
        console.dir(event)
        console.dir(event.target)
        console.dir(event.target.value)
        console.dir(this.state);
        this.setState({birthday: event.target.value})

    }

    render() {
        return <div>
            <h3>생년월일 : {this.state.birthday}</h3>
            <select onChange={this.onChangeSelection} value={this.state.birthday}>
                <option value={1999}>1999</option>
                <option value={2000}>2000</option>
                <option value={2001}>2001</option>
                <option value={2010}>2010</option>
            </select>
        </div>
    }
}