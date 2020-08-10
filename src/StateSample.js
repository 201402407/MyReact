import React, { Fragment } from 'react'; // JSX 를 사용하기 위해 반드시 import 해야 함
import './App.css';

// props(속성) : 부모(컴포넌트) 로부터 자식(컴포넌트)에게 전달한 데이터. 정적
// 자식은 데이터를 받기만하고, 수정은 불가능.
// 기본값 설정 및 확인 가능

// state(상태) : 컴포넌트 내부에서 선언한 데이터. 값 변경 가능. 동적
// 컴포넌트 내에서 직접 this.state 를 갱신하는 일은 절대 없도록 하자. 
// -> 개발자가 직접 갱신한 상태를 react가 제대로 처리하지 못함.
// -> 컴포넌트 내에서는 불변 객체로 취급해야 한다.

// 클래스 컴포넌트
class StateSample extends React.Component {
    // props의 기본값 설정 첫 번째 방법
    static defaultProps = {
        nickname : '메이쁘이당'
    }

    // 클래스 필드와 constructor 중 constructor 가 더 늦게 호출된다.(super 사용한 constructor)
    state = {
        number : 100,
        status: {
            heart: 'hot',
            brain: 'cold'
        }
    }

    // Array function 으로 선언 후 이벤트에 바인딩하는 방법 권장
    // function 직접 호출 시 랜더링마다 함수를 생성하므로, 성능 문제 발생 가능
    handleNumberIncrease = () => {
        // state 값을 변경하기 위해서는 무조건 setState 함수를 사용해야함
        // setState 함수 호출 시 무조건 컴포넌트가 reRendering 됨
        // 값만 업데이트 가능
        
        /* 방법 1 */
        // this.setState({
        //     number : this.state.number + 1
        // })

        /* 방법 2 */
        // (state) -> ({number}) 로 변함 : 비구조화 할당(구조 분해 할당)
        this.setState(
            ({ number }) => ({
                number : number + 1
            })
        );
    }

    handleNumberDecrease() {
        /* 방법 3 */
        const { number } = this.state;
        this.setState({
            number : number - 1
        });
    }

    handleMyStatus = () => {
        this.state.status.heart === 'hot'
            ? this.setState({
                number : 500,
                status: {
                    brain: 'stop',
                    heart: 'cold'
                }
            })
            : this.setState({
                ...this.state.number,
                status: {
                    ...this.state.status,   // 전개연산자
                    heart: 'hot'
                }
            })
    }
    
    constructor(props) {
        super(props);
        console.log("Constructor 호출!");
    }
 
    static getDerivedStateFromProps(nexProps, prevState) {
        console.log("getDerivedStateFromProps 호출!");
        return null;
    }
 
     componentDidMount() {
        console.log("componentDidMount 호출!");
    }

    shouldComponentUpdate(nextprops, nextState)
    {
        console.log("sholudComponetUpdate 호출!")
        return true;
    }

    componentDidUpdate()
    {
        console.log("componentDidUpdate 호출!");
    }

    getSnapshotBeforeUpdate(prevProps, prevState)
    {
        console.log("getSnapshotBeforeUpdate 호출!")
        return null;
    }

    render() {
        console.log("render 호출!")
        return (
            <div>안녕하십니까. Render 호출입니다!</div>
        )
    }

    // render() {
    //     return (
    //         <Fragment>
    //             <div>
    //             안녕하세요. 저는 지금 <b>{this.props.nickname}</b> 라는 별명이 있습니다.
    //             </div>
    //             <div>
    //                 <h1>버튼으로 숫자 조정하기</h1>
    //                 <div>현재 값 : {this.state.number}</div>
    //                 <button onClick={this.handleNumberIncrease}> + 버튼 </button>
    //                 <button onClick={this.handleNumberDecrease.bind(this)}> - 버튼 </button>
    //             </div>
    //             <div>
    //                 <div>현재 상태(심장) : {this.state.status.heart}</div>
    //                 <div>현재 상태(머리) : {this.state.status.brain}</div>
    //                 <button onClick={this.handleMyStatus}> 내 상태 변경 </button>
    //             </div>

    //         </Fragment>
    //     );
    // };
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