import React, { Fragment } from 'react'; // JSX 를 사용하기 위해 반드시 import 해야 함
import './App.css';

class ApiTest extends React.Component {

    state = {
        carName : null,
        car : 'K3'
    };

    componentDidMount() {
        fetch('/test')
        .then(res => res.json())
        .then(data => {
            alert(`test api 호출 : ${data.carName}`);
            this.setState({
                carName : data.carName
            });
        });
    }
    
    render() {
        return (
            <Fragment>
                <div style={style}> 
                내 차의 종류는 {this.state.car ? this.state.car : '차없옹!'} 이야. 가자구!! 부릉부릉~ <br/>
                내 애마의 이름은? {this.state.carName ? this.state.carName : '이름따윈...'} !!
                </div>
            </Fragment>
        )
    }
}

const style = {
    backgroundColor: 'black',
    height: '150px',
    padding: '16px',
    color: 'white',
    fontSize: '20px',
  };

export default ApiTest;