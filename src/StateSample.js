import React from 'react'; // JSX 를 사용하기 위해 반드시 import 해야 함
import './App.css';

// props(속성) : 부모(컴포넌트) 로부터 자식(컴포넌트)에게 전달한 데이터.
// 자식은 데이터를 받기만하고, 수정은 불가능.
// 기본값 설정 및 확인 가능

// 클래스 컴포넌트
class StateSample extends React.Component {
    // props의 기본값 설정 첫 번째 방법
    static defaultProps = {
        nickname : '메이쁘이당'
    }

    render() {
        return (
            <div>
                안녕하세요. 저는 지금 <b>{this.props.nickname}</b> 라는 별명이 있습니다.
            </div>
        );
    };
}

// props의 기본값 설정 두 번째 방법
StateSample.defaultProps = {
    nickname : '메이쁘'
}

// 함수형 컴포넌트
function MyNameSample(props) {
    return (
        <div>
            Hello! 내 이름은 {props.name} 야. 잘 부탁해!
        </div>
    )
}

MyNameSample.defaultProps = {
    name : '익명'
}


// 함수형 컴포넌트 (ES6 이상)
const MyAgeSample = ({ age }) => {
    // 함수 내부이기 때문에 기본값 설정 첫 번째 방법 사용 불가능
    // defaultProps = {
    //     age : 25
    // }

    return (
        <div>
            Hello! 내 나이는 {age} 야. 잘 부탁해! 
        </div>
    );
}

MyAgeSample.defaultProps = {
    age : 120
}

// 무조건 모듈 당 한 개의 default export 만 존재 가능
// 그 외에는 export로 진행
export {MyNameSample, MyAgeSample};
export default StateSample;