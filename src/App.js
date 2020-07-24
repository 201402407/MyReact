/** 
 * 이와 같이, import 가 가능한 이유는 Webpack 을 사용하고 있기 때문임
 * 나중에 프로젝트 빌드 시 Webpack 에서 파일의 확장자에 따라 다른 작업을 수행
 * css : 프로젝트에서 사용한 프로젝트 한 파일에 결합 (?) 
 * JS : 모든 코드들의 로딩 순서 설정, 파일 하나로 통합
 * svg와 같은 파일 : 파일로서 불러온 다음, 특정 경로에 사본을 만든 이후 해당 경로를 텍스트로 받아옴
 * */
import React, { Fragment } from 'react'; // JSX 를 사용하기 위해 반드시 import 해야 함
import './App.css';
// import StateSample from './StateSample'; // StateSample.js 에서 StateSample class import 해옴
import { MyAgeSample, MyNameSample } from './StateSample';
import StateSample from './StateSample';

// 컴포넌트를 생성하는 방법 : 클래스, 함수
function App() {
  // var를 쓰지 않고 let을 사용하는 이유
  // var은 scope(범위)가 함수 단위 -> 내부 함수에서 재정의하면 그 값으로 완전히 변경됨
  // let은 scope(범위)가 블록 단위 -> 내부 함수에서 재정의하면 그 함수 내부에서만 변경됨
  const myName = 'Maivve';
  let greet = 'Hi Baby!';
  let number = 2;

  // 별도 변수로 style 설정 가능
  const style = {
    backgroundColor: 'black',
    padding: '16px',
    color: 'white',
    fontSize: '15px'
  };

  return (
    <div className="App">
      <body>

      {/* DOM에 별도 노드 생성 없이 (자식)노드들을 그룹화할 수 있다. */}
      <Fragment>
          <div style={style}>
            {greet}, i'm {myName}.
          </div>

          {/* 조건부 렌더링 - 삼항 연산자 */}
          <div>
            { 
              1 + 3 === 4
                ? (<div>정답</div>)
                : (<div>오답</div>)
            }
          </div>

          {/* 조건부 렌더링 - AND 연산자. 오직 True만 처리 */}
          <div>
            {
              1 + 3 === 4 && (<div>True일 때만 출력. False는 무시</div>)
            }
          </div>

          {/* IIFE 사용 (비추천. JSX 외부에서 작성하기) */}
          <div>
            {
              // (function() {
              //   if(number === 1) return (<div>One</div>);
              //   if(number === 2) return (<div>Two</div>);
              //   if(number === 3) return (<div>Three</div>);
              // })()

              (() => {
                if(number === 1) return (<div>One</div>);
                if(number === 2) return (<div>Two</div>);
                if(number === 3) return (<div>Three</div>);
              })()
            }
          </div>

          <StateSample nickname="보디가드"></StateSample>
          <MyAgeSample></MyAgeSample>
          <MyNameSample name='Maivve'></MyNameSample>
          
        </Fragment>
      </body>
    </div>
  );
}

export default App;
