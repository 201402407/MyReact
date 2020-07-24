import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; // 컴포넌트 import 방법
import * as serviceWorker from './serviceWorker';

// 컴포넌트를 출력하기 위해 ReactDOM.render(param, param) 사용해야 함
// @param1 : 렌더링 할 결과
// @param2 : 그릴 DOM
// DOM은 index.html 에서 확인
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
