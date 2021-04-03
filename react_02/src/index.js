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

// const element = (
//   <h1 className="greeting">
//     Hello, world!
//   </h1>
// );

// const element2 = React.createElement(
//   'h1',
//   {className: 'greeting'},
//   'Hello, world'
// );

// Babel은 JSX를 React.createElement() 호출로 컴파일한다
// React.createElement()는 버그가 없는 코드를 작성하는데 도움이 되도록 몇 가지 검사를 수행

// const element3 = {
//   type: 'h1',
//   props: {
//     className: 'greeting',
//     children: 'Hello, world!'
//   }
// };

// 이런 객체를 React element 라고 한다
// 이것을 화면에서 보고 싶은 것을 나타내는 표현이라 생각하면 된다
// React는 이 객체를 읽어서, DOM을 구성하고 최신 상태로 유지하는 데 사용한다

// 엘리먼트 렌더링

// 엘리먼트는 React앱의 가장 작은 단위이다\

// 엘리먼트는 화면에 표시할 내용을 기술한다

// const element = <h1>Hello, world</h1>;

// 브라우저 DOM 엘리먼트와 달리 React 엘리먼트는 일반 객체이며 쉽게 생성할 수 있다
// React DOM은 React 엘리먼트와 일치하도록 DOM을 업데이트한다

// 엘리먼트는 컴포넌트의 '구성 요소'이다

// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );

// index.html에 <div id="root"></div> 가 있다
// 이 안의 모든 엘리먼트를 ReactDOM에서 관리하므로 이것을 root DOM노드라고 한다
// React로 구현된 애플리케이션은 일반적으로 하나의 루트 DOM노드가 있다
// React를 기존 앱에 통합하려는 경우 원하는 만큼 많은 수의 독립된 루트 DOM노드가 있을 수 있다

// React 엘리먼트를 루트 DOM 노드에 렌더링하려면 둘 다 ReactDOM.render()로 전달하면 된다
// const element = <h1>Hello, world</h1>;
// ReactDOM.render(element, document.getElementById('root'));

// 렌더링 된 엘리먼트 업데이트하기

// React 엘리먼트는 불변객체이다

// 엘리먼트를 생성한 이후에는 해당 엘리먼트의 자식이나 속성을 변경할 수 없다
// 엘리먼트는 특정 시점의 UI를 보여준다

// UI를 업데이트 하는 유일한 방법은 새로운 엘리먼트를 생성하고 ReactDOM.render()로 전달하는거다

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);

// 위 함수는 setInterval() 콜백을 이용해 초마다 ReactDOM.render()를 호출한다
// 실제로 대부분의 React앱은 ReactDOM.render()를 한 번만 호출한다


reportWebVitals();
