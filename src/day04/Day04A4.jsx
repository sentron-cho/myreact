
import React from 'react';

export default class Day04A4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: this.props.text, check: true };
    }
    
    // 함수를 만들때 주의할 점은 this 사용을 위해
    // 반드시 화살표(=>) 함수를 이용해 함수를 만들어야 한다.
    onChangeText = (event) => {
        console.dir(event.target.value)
        console.dir(this.state);
        this.setState({text: event.target.value})
    }

    onChangeCheck = (event) => {
        console.dir(event.target.checked)
        console.dir(this.state);
        this.setState({check: event.target.checked})
    }

    render() {
        return <div>
            <div>
                <h3>Textbox onChange</h3>
                <input type="text" value={this.state.text} onChange={this.onChangeText} />
                <p>입력된 값은 : {this.state.text}</p>
            </div>

            <div>
                {/* check에서는 값 변경을 위해 checked를 사용해야 한다. */}
                <h3>Selectbox onChange</h3>
                <label for="check">선택하세요: </label>
                <input id="check" type="checkbox" checked={this.state.check} onChange={this.onChangeCheck} />
                <h3>체크박스 상태 : {String(this.state.check)}</h3>
            </div>
        </div>
    }
}