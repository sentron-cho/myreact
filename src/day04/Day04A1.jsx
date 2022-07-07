
import React from 'react';
import ReactDOM from 'react-dom';

export default class Day04A1 extends React.PureComponent {
    componentDidMount() {
        const element = (
            <div>
                <div>Hello</div>
                <div>World</div>
            </div>
        );
        
        setTimeout(() => {
            ReactDOM.render(element, document.getElementById('title'));
        }, 1000);
    }

    render() {
        return <div id='title'>안녕하세요</div>
    }
}

// function tick() {
//     const element = (
//         <div>
//             <div>Hello</div>
//             <div>World</div>
//         </div>
//     );

//     ReactDOM.render(element, document.getElementById('root'));
// }

// setInterval(tick, 1000)