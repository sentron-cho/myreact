
import React from 'react';

export default class Day04A5 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { radio: this.props.value };
    }
    
    // 함수를 만들때 주의할 점은 this 사용을 위해
    // 반드시 화살표(=>) 함수를 이용해 함수를 만들어야 한다.
    onChangeRadioWin = (event) => {
        console.dir(event.target.checked)
        console.dir(this.state);
        if(event.target.checked) this.setState({radio: 'win'})
    }

    onChangeRadioMac = (event) => {
        if(event.target.checked) this.setState({radio: 'mac'})
    }
    
    onChangeRadioUnix = (event) => {
        if(event.target.checked) this.setState({radio: 'unix'})
    }

    onChangeRadio = (value) => {
        this.setState({radio: value})
    }

    render() {
        return <div>
            {/* radio를 그룹핑하려면 name을 동일하게... */}
            {/* radio에서는 값 변경을 위해 checked를 사용해야 한다. */}
            <h3>Radiobox onChange</h3>
            {/*
            <input type="radio" name="os" checked={this.state.radio === 'win'} value="win" onChange={this.onChangeRadioWin} />윈도우
            <input type="radio" name="os" checked={this.state.radio === 'mac'} value="mac" onChange={this.onChangeRadioMac} />맥
            <input type="radio" name="os" checked={this.state.radio === 'unix'} value="unix" onChange={this.onChangeRadioUnix} />유닉스
            */}
            <input type="radio" name="os" checked={this.state.radio === 'win'} onChange={() => this.onChangeRadio('win')} />윈도우
            <input type="radio" name="os" checked={this.state.radio === 'mac'} onChange={() => this.onChangeRadio('mac')} />맥
            <input type="radio" name="os" checked={this.state.radio === 'unix'} onChange={() => this.onChangeRadio('unix')} />유닉스

            <h3>체크박스 상태 : {String(this.state.radio)}</h3>
        </div>
    }
}