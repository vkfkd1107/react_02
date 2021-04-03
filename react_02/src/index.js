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

// function formatName(user) {
//   return user.firstName + ' ' + user.lastName;
// }

// const user = {
//   firstName: 'Kang',
//   lastName: 'jisu'
// };

// const element = (
//   <h1>
//     Hello, {getGreeting(user)}
//   </h1>
// );

// function getGreeting(user) {
//   if (user) {
//     return <h1>Hello, {formatName(user)}</h1>;
//   }
//   return <h1>Hello, Stranger</h1>;
// }
// JSX를 if 구문 및 for loop 안에 사용하고 변수 할당, 인자, 함수로부터 반환할 수 있다

// const element = (
//   <div>
//     <h1>Hello</h1>
//     <h2>Good to see you here</h2>
//   </div>
// );
// jsx 태그는 자식을 포함할 수 있다

// const title = response.potentiallyMaliciousInput;
// const element = <h1>{title}</h1>
// ReactDOM은 JSX에 삽입된 모든 값을 렌더링하기 전에 이스케이프 하므로,
// 애플리케이션에서 명시적으로 작성되지 않은 내용은 주입되지 않는다
// 모든 항목은 렌더링 되기 전에 문자열로 변환된다
// 이러한 특성으로 XSS 공격을 방지할 수 있다

const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);

const element2 = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world'
);

// Babel은 JSX를 React.createElement() 호출로 컴파일한다
// React.createElement()는 버그가 없는 코드를 작성하는데 도움이 되도록 몇 가지 검사를 수행

const element3 = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
};

// 이런 객체를 React element 라고 한다
// 이것을 화면에서 보고 싶은 것을 나타내는 표현이라 생각하면 된다
// React는 이 객체를 읽어서, DOM을 구성하고 최신 상태로 유지하는 데 사용한다

ReactDOM.render(
  element,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
