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

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}</h2>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById('root'));
// }

// setInterval(tick, 1000);

// 위 함수는 setInterval() 콜백을 이용해 초마다 ReactDOM.render()를 호출한다
// 실제로 대부분의 React앱은 ReactDOM.render()를 한 번만 호출한다


// 변경된 부분만 업데이트하기

// ReactDOM은 해당 엘리먼트와 그 자식 엘리먼트를 이전의 엘리먼트와 비교하고
// DOM을 원하는 상태로 만드는데 필요한 경우에만 DOM을 업데이트한다

// 매초 전체 UI를 다시 그리도록 엘리먼트를 만들었지만 ReactDOM은 내용이 변경된 텍스트 노드만 업데이트한다

// 특정 시점에 UI가 어떻게 보일지 고민하는 접근법은 시간의 변화에 따라
// UI가 어떻게 변화할지 고민하는 것보다 더 많은 버그를 없앨 수 있다


// Component와 Props

// 컴포넌트를 통해 UI를 재사용 가능한 개별적인 여러 조각으로 나누고, 각 조각을 살펴볼 수 있다
// 이 페이지에서는 컴포넌트의 개념을 소개한다

// 개념적으로 컴포넌트는 JavaScript 함수와 유사하다
// Props라고 하는 임의의 입력을 받은 후,
// 화면에 어떻게 표시되는지를 기술하는 React 엘리먼트를 반환한다

// 함수 컴포넌트와 클래스 컴포넌트

// 컴포넌트를 정의하는 가장 간단한 방법은 JavaScript 함수를 작성하는 것이다

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// 이 함수는 데이터를 가진 하나의 props 객체 인자를 받은 후 React 앨리먼트를 반환하므로 유효한 React 컴포넌트이다
// props: 속성을 나타내는 데이터이다

// 이러한 컴포넌트는 JavaScript 함수이기 때문에 말 그대로 '함수 컴포넌트'라고 호칭한다

// 또한 ES6 class를 사용하여 컴포넌트를 정의할 수 있다

// class Welcome2 extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }

// React 관점에서 위 두가지 유형의 컴포넌트는 동일하다

// class는 몇 가지 추가 기능이 있다
// 함수 컴포넌트와 클래스 컴포넌트 둘 다 몇 가지 추가 기능이 있다

// reportWebVitals();

// 컴포넌트 렌더링

// 이전까지는 React 엘리먼트를 DOM 태그로 나타냈다
// const element = <div />;

// React 엘리먼트는 사용자 정의 컴포넌트로도 나타낼 수 있다
// const element = <Welcome name="Sara" />;

// React가 사용자 정의 컴포넌트로 작성한 엘리먼트를 발견하면
// JSX 어트리뷰트와 자식을 해당 컴포넌트에 단일 객체로 전달한다
// 이 객체를 props라고 한다

// 다음은 페이지에 Hello,Sara를 렌더링하는 예시이다
// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// const element = <Welcome name="Sara" />;
// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );

// 이 예시는 다음과 같은 일들이 일어난다

// 1. <Welcome name="Sara" /> 엘리먼트로 ReactDOM.render()를 호출한다
// 2. React는 {name: 'Sara'} 를 props로 하여 Welcome 컴포넌트를 호출한다
// 3. Welcome 컴포넌트는 결과적으로 <h1>Hello, Sara</h1> 엘리먼트를 반환한다
// 4. React DOM은 <h1>Hello, Sara</h1> 엘리먼트와 일치하도록 DOM을 효율적으로 업데이트한다

// **주의**
// 컴포넌트의 이름은 항상 대문자로 시작한다

// React는 소문자로 시작하는 컴포넌트를 DOM 태크로 처리한다
// 예를 들어 <div />는 html div 태그를 나타내지만, 
// <Welcome />은 컴포넌트를 나타내며 범위 안에 Welcome 이 있어야 한다

// 컴포넌트 합성

// 컴포넌트는 자신의 출력에 다른 컴포넌트를 참조할 수 있다
// 이는 모든 세부 단계에서 동일한 추상 컴포넌트를 사용할 수 있음을 의미한다

// React 앱에서는 버튼, 폼, 다이얼로그, 화면 등의 모든 것들이 흔히 컴포넌트로 표현된다

// 예를 들어 Welcome을 여러 번 렌더링하는 App 컴포넌트를 만들 수 있다

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// function App() {
//   return (
//     <div>
//       <Welcome name="Sara" />
//       <Welcome name="Jisu" />
//       <Welcome name="Heesoo" />
//     </div>
//   )
// }

// 일반적으로 새 React 앱은 최상위에 단일 App 컴포넌트를 가지고 있다
// 하지만 기존 앱에 React를 통합하는 경우 Button과 같은 작은 컴포넌트부터 시작해서 
// 뷰 계층의 상단으로 올라가면서 점진적으로 작업해야 할 수 있다


// 컴포넌트 추출

// function formetDate(date) {
//   return date.toLocaleDateString();
// }

// function Comment(props) {
//   return (
//     <div className="Comment">
//       <div className="UserInfo">
//         <img className="Avatar"
//           src={props.author.avatarUrl}
//           alt={props.author.name}
//         />
//         <div className="UserInfo-name">
//           {props.author.name}
//         </div>
//       </div>
//       <div className="Comment-text">
//         {props.text}
//       </div>
//       <div className="Comment-date">
//         {formetDate(props.date)}
//       </div>
//     </div>
//   );
// }

// function Avatar(props) {
//   return (
//     <img className="Avatar"
//       src={props.user.avatarUrl}
//       alt={props.user.name}
//     />
//   )
// }
// Avatar는 자신이 Comment 내에서 렌더링 된다는 것을 알 필요가 없다
// 따라서 props의 이름을 author에서 일반화된 user로 변경하였다

// 이 컴포넌트는 author 객체, text 문자열 및 date 날짜를 props로 받은 후 
// 소셜 미디어 웹 사이트의 코멘트를 나타낸다

// 이 컴포넌트는 구성요소들이 모두 중첩 구조로 이루어져 있어서 변경하기 어려울 수 있으며,
// 각 구성요소를 개별적으로 재사용하기도 힘들다

// const comment = {
//   date: new Date(),
//   text: 'I hope you enjoy learning React!',
//   author: {
//     name: 'Hello Kitty',
//     avatarUrl: 'https://placekitten.com/g/64/64',
//   },
// };

// ReactDOM.render(
//   <Comment 
//     date={comment.date}
//     text={comment.text}
//     author={comment.author}
//   />,
//   document.getElementById('root')
// );



// Components and Props

// 컴포넌트를 통해 UI를 재사용 가능한 개별적인 여러 조각으로 나누고, 각 조각을 개별적으로 살펴볼 수 있다

// 컴포넌트는 개념적으로 JavaScript 함수와 유사하다
// 'props'라는 임의의 입력을 받은 후, 화면에 어떻게 표시되는지 기술하는 React 엘리먼트를 반환한다

// 함수컴포넌트와 클래스 컴포넌트

// : 컴포넌트를 정의하는 가장 간단한 방법은 JavaStript함수를 작성하는 것이다

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// 이 함수는 데이터를 가진 하나의 props 객체 인자를 받은 후 React 엘리먼트를 반환하므로 유효한 React 컴포넌트이다
// 이런 컴포넌트는 JavaScript 함수이기 때문에 말 그대로 함수 컴포넌트라고 호칭한다

// 또한 ES6 class 를 사용하여 컴포넌트를 정의할 수 있다

// class Welcome extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }

// React의 관점에서 위 두 개 유형의 컴포넌트는 동일하다

// const element = <div />;
// 이 전까지는 이렇게 React 엘리먼트를 DOM 태그로 나타냈다

// const element = <Welcome name="Sara" />;
// React 엘리먼트는 사용자 정의 컴포넌트로도 나타낼 수 있다

// React가 사용자 정의 컴포넌트로 작성한 엘리먼트를 발견하면 
// JSX 어트리뷰트와 자식을 해당 컴포넌트에 단일 객체로 전달한다
// 이 객체를 props라고 한다

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// const element = <Welcome name="Sara" />;
// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );

// 1. <Welcome name="Sara" /> 엘리먼트로 ReactDOM.render()를 호출한다
// 2. {name: "Sara"}를 props로 하여 Welcome 컴포넌트를 호출한다
// 3. Welcome 컴포넌트는 <h1>Hello, Sara</h1> 엘리먼트를 반환한다
// 4. ReactDOM은 <h1>Hello, Sara</h1> 엘리먼트와 일치하도록 DOM을 효율적으로 업데이트한다

// 컴포넌트 합성

// 컴포넌트는 자신의 출력에 다른 컴포넌트를 참조할 수 있다
//  이는 모든 세부 단계에서 동일한 추상 컴포넌트를 사용할 수 있음을 의미한다
// React 앱에서는 버튼, 폼, 다이얼로그, 화면 등의 모든 것들이 흔히 컴포넌트로 표현된다

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// function App() {
//   return (
//     <div>
//       <Welcome name="jisu1" />
//       <Welcome name="jisu2" />
//       <Welcome name="jisu3" />
//     </div>
//   );
// }

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

// 일반적으로 새 React앱은 최상위에 단일 App 컴포넌트를 가지고 있다
// 하지만 기존앱에 React를 통합하는 경우에는 Button과 같은 
// 작은 컴포넌트부터 시작해서 뷰 계층의 상단으로 올라가면서 점진적으로 작업해야 할 수 있다


// 컴포넌트 추출

// const comment = {
//   date: new Date(),
//   text: 'I hope you enjoy learning React!',
//   author: {
//     name: 'Hello Kitty',
//     avatarUrl: 'https://placekitten.com/g/64/64',
//   },
// };

// function formatDate(date) {
//   return date.toLocaleDateString();
// }

// function Avatar(props) {
//   return (
//     <img className="Avatar"
//       src={props.user.avatarUrl}
//       alt={props.user.name}
//     />
//   );
// }
// Avatar은 자신이 Comment 내에서 렌더링 된다는 것을 알 필요가 없다
// 따라서 props의 이름을 author에서 더욱 일반화된 user로 변경하였다

// props의 이름은 사용될 context가 아닌 컴포넌트 자체의 관점에서 짓는것을 권장한다

// function UserInfo(props) {
//   return (
//     <div className="UserInfo">
//       <Avatar user={props.user} />
//       <div className="UserInfo-name">
//         {props.user.name}
//       </div>
//     </div>
//   );
// }

// Button, Panel, Avatar과 같이 여러 번 사용되거나 
// App, FeedStory, Comment같은 UI 일부가 자체적으로 복잡한 경우 별도의 컴포넌트로 만드는게 좋다

// function Comment(props) {
//   return (
//     <div className="Comment">
//       <UserInfo user={props.author} />
//       <div className="Comment-text">
//         {props.text}
//       </div>
//       <div className="Comment=date">
//         {formatDate(props.date)}
//       </div>
//     </div>
//   );
// }

// 이 컴포넌트는 author(객체), text(문자열), date(날짜)를 props로 받은 후 코멘트를 나타낸다

// props는 일기 전용이다

// 함수 컴포넌트나 클래스 컴포넌트 모두 컴포넌트의 자체 props를 수정해서는 안된다

function sum(a, b) {
  return a+b;
}
// 이런 함수들을 순수함수라고 호칭하는데
// 입력값을 바꾸려 하지 않고 항상 동일한 입력값에 대해 동일한 결과를 반환하기 때문이다

function withdraw(account, amout) {
  account.total -= amout;
}
// 이 함수는 자신의 입력값을 변경하기 때문에 순수함수가 아니다

// 모든 React 컴포넌트는 자신의 props를 다룰 때 반드시 순수 함수처럼 동작해야한다

// 애플리케이션 UI는 동적이며 시간에 따라 변한다
// React 컴포넌트는 state를 통해 위 규칙을 위반하지 않고 
// 사용자 액션, 네트워크 응답 및 다른 요소에 대한 응답으로 시간에 따라 자신의 출력값을 변경할 수 있다

ReactDOM.render(
  <Comment 
    date={comment.date}
    text={comment.text}
    author={comment.author}
  />,
  document.getElementById('root')
)