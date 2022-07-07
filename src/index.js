import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// import App from './App';
import Day03A1 from './day03/Day03A1';
import Day03A2 from './day03/Day03A2';
import Day03A3 from './day03/Day03A3';
import Day03A4 from './day03/Day03A4';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Day03A1 /> */}
    {/* <Day03A2 /> */}
    {/* <Day03A3 /> */}
    <Day03A4 title="3일차 수업" name="홍길동" value="1000" />
  </React.StrictMode>
);