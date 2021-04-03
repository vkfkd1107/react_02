import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';


// const element = <h1>Hello, world!</h1>;
// 위의 태그 문법은 jsx라하는 javaScript를 확장한 문법이다
// javaScript의 모든 기능이 포함되어 있다

// jsx는 react element를 생성한다

// react에서는 별도의 파일에 마크업과 로직을 넣어 기술을 인위적으로 분리하는 대신, 둘 다 포함하는 컴포넌트라고 부르는 느슨하게 연결된 유닛으로 관심사를 분리한다

// const name = 'Kang jisu';
// const element = <h1>Hello, {name}</h1>;
// 위는 name이라는 변수를 선언한 후 중괄호로 감싸 JSX 안에 사용하였다

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Kang',
  lastName: 'jisu'
};

const element = (
  <h1>
    Hello, {getGreeting(user)}
  </h1>
);

function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}</h1>;
  }
  return <h1>Hello, Stranger</h1>;
}
// JSX를 if 구문 및 for loop 안에 사용하고 변수 할당, 인자, 함수로부터 반환할 수 있다

ReactDOM.render(
  element,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
