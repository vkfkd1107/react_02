import React from 'react';
import ReactDOM, { render } from 'react-dom';
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

// function sum(a, b) {
//   return a+b;
// }
// 이런 함수들을 순수함수라고 호칭하는데
// 입력값을 바꾸려 하지 않고 항상 동일한 입력값에 대해 동일한 결과를 반환하기 때문이다

// function withdraw(account, amout) {
//   account.total -= amout;
// }
// 이 함수는 자신의 입력값을 변경하기 때문에 순수함수가 아니다

// 모든 React 컴포넌트는 자신의 props를 다룰 때 반드시 순수 함수처럼 동작해야한다

// 애플리케이션 UI는 동적이며 시간에 따라 변한다
// React 컴포넌트는 state를 통해 위 규칙을 위반하지 않고 
// 사용자 액션, 네트워크 응답 및 다른 요소에 대한 응답으로 시간에 따라 자신의 출력값을 변경할 수 있다

// ReactDOM.render(
//   <Comment 
//     date={comment.date}
//     text={comment.text}
//     author={comment.author}
//   />,
//   document.getElementById('root')
// )

// State and Lifecycle

// 이 페이지는 React 컴포넌트 안의 state와 생명주기에 대한 개념을 소개한다
// 엘리먼트 렌더링에서는 UI를 업데이트하는 한 가지 방법만 배웠으며, 
// 렌더링 된 출력값을 변경하기 위해 ReactDOM.render()를 호출하였다

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}</h2>
//     </div>
//   );
//   ReactDOM.render(
//     element,
//     document.getElementById('root')
//   );
// }

// setInterval(tick, 1000);

// 이 섹션에서는 Clock 컴포넌트를 완전히 재사용하고 캡슐화하는 방법을 배울 것이다
// 이 컴포넌트는 스스로 타이머를 설정할 것이모 매초 스스로 업데이트할 것이다

// 시계가 생긴 것에 따라 캡슐화하는 것으로 시작할 수 있다

// function Clock(props) {
//   return (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {props.toLocaleTimeString()}</h2>
//     </div>
//   );
// }

// function tick() {
//   ReactDOM.render(
//     <Clock date={new Date()} />,
//     document.getElementById('root')
//   );
// }

// setInterval(tick, 1000);

// 여기는 중요한 요건이 누락되었다
// Clock이 타이머를 설정하고 매초 UI를 업데이트하는 것이 Clock의 구현 세부사항이 되어야 한다

// 이상적으로 한 번만 코드를 작성하고 Clcok이 스스로 업데이트하도록 만드려고 한다



// 이것을 구현하기 위해 Clock컴포넌트에 state를 추가해야 한다
// state는 props와 유사하지만, 비공개이며 컴포넌트에 의해 완전히 제어된다

// 함수에서 클래스로 변환하기

// 다섯 단계로 Clock과 같은 함수 컴포넌트를 클래스로 변환할 수 있다

// 1. React.Component를 확장하는 동일한 이름의 ES6 class를 생성한다
// 2. render() 라고 불리는 빈 메서드를 추가한다
// 3. 함수의 내용을 render() 메서드 안으로 옮긴다
// 4. render() 내용 안에 있는 props를 this.props로 변경한다
// 5. 남아있는 빈 함수 선언을 삭제한다

// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {date: new Date()};
//   }
//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}</h2>
//       </div>
//     );
//   }
// }

// 클래스에 로컬 state추가하기

// 1. render() 메서드 안에 있는 this.props.date를 this.state.date 로 변경한다
// 2. 초기 this.state 를 지정하는 class constructor를 추가한다
//    : 클래스 컴포넌트는 항상 props로 기본 constructor를 호출하게 한다
// 3. <Clock /> 요소에서 date prop을 삭제한다

// Clock은 이제 함수가 아닌 클래스로 정의된다
// render 메서드는 업데이트가 발생할 때마다 호출되지만, 
// 같은 DOM 노드로 <Clock />을 렌더링하는 경우 Clock 클래스의 단일 인스턴스만 사용된다

// 이것은 로컬 state와 생명주기 메서드와 같은 부가적인 기능을 사용할 수 있게 한다


// **** 생명주기 메서드를 클래스에 추가하기 ****

// 많은 컴포넌트가 있는 애플리케이션에서 컴포넌트가 삭제될 때 
// 해당 컴포넌트가 사용 중이던 리소스를 확보하는 것이 중요하다

// Clock이 처음 DOM에 렌더링 될 때마다 타이머를 설정하려고 한다
// 이것을 React에서 마운팅이라고 한다
// Clock에 의해 생성된 DOM이 삭제될 때마다 타이머를 해제하려고 한다
// 컴포넌트 클래스에서 특별한 메서드를 선언하여
// 컴포넌트가 마운트되거나 언마운트 될 때 일부 코드를 작동할 수 있다

// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {date: new Date()};
//   }
//   componentDidMount() {
//     this.timerID = setInterval(
//       () => this.tick(),
//       1000
//     );
//   }
//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }
//   tick() {
//     this.setState({
//       date: new Date()
//     });
//   }
//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}</h2>
//       </div>
//     );
//   }
// }
// 이런 메서드들을 생명주기 메서드라고 불린다
// componentDidMount() 메서드는 컴포넌트 출력물이 DOM에 렌더링 된 후에 실행된다
// 이 장소가 타이머를 설정하기에 좋은 장소이다

// this.props가 React에 의해 스스로 설정되고 this.state.가 특수한 의미가 있지만,
// 타이머 ID와 같이 데이터 흐름 안에 포함되지 않는 어떤 항목을 보관할 필요가 있다면
// 자유롭게 클래스에 수동으로 부가적인 필드를 추가해도 된다

// ReactDOM.render(
//   <Clock />,
//   document.getElementById('root')
// );

// 1. <Clock />가 ReactDOM.render() 로 전달된다
// 2. React는 Clock컴포넌트의 constructor를 호출한다
// 3. Clock이 현재 시각을 표시해야 되므로 현재 시각이 포함된 객체로 this.state를 초기화한다
// 4. React는 Clock컴포넌트의 render() 메서드를 호출한다
// 5. 이를 통해 React는 화면에 표시되어야 할 내용을 알게 된다
// 6. React는 Clock의 렌더링 출력값을 일치시키기 위해 DOM을 업데이트한다
// 7. Clock출력값이 DOM에 삽입되면, React는 componentDidMount() 생명주기 메서드를 호출한다
// 8. Clock 컴포넌트는 매초 컴포넌트의 tick() 메서드를 호출하기 위한 타이머를 설정하도록 브라우저에 요청한다
// 9. 매초 브라우저가 tick() 메서드를 호출한다
// 10. Clock 컴포넌트는 setState() 에서 현재 시각을 포함하는 객체를 호출하면서 UI업데이트를 진행한다
// 11. setState() 호출 덕분에 React는 state가 변경된 것을 인지한다
// 12. React는 화면에 표시될 내용을 알아내기 위해 render() 메서드를 다시 호출한다
// 13. 이때 render() 메서드 안의 this.state.date.가 달라진다
// 14. 렌더링 출력값은 업데이트된 시각을 포함한다
// 15. React는 이에 따라 DOM을 업데이트한다
// 16. Clock 컴포넌트가 DOM으로부터 한 번이라도 삭제된 적이 있다면 React는 타이머를 멈추기 위해 componentWillUnmount() 생명주기 메서드를 호출한다


// State를 올바르게 사용하기

// 1. 직접 state를 수정하면 안된다
// this.state.comment = 'Hello';
// 이 코드는 컴포넌트를 다시 렌더링하지 않는다

// 대신 setState() 를 사용한다
// this.setState({comment: 'Hello'});
// this.state를 지정할 수 있는 유일한 공간은 .constructor이다


// 2. State 업데이트는 비동기적일 수도 있다

// React는 성능을 위해 여러 setState() 호출을 단일 업데이트로 한꺼번에 처리할 수 있다
// this.props와 this.state가 비동기적으로 업데이트될 수 있기 때문에 다음 state를 계산할 때 해당 값에 의존해서는 안된다

// this.setState({
//   counter: this.state.counter + this.props.increment,
// });
// 위 코드는 카운터 업데이트에 실패할 수 있다
// 이를 수정하기 위해 객체보다는 함수를 인자로 사용하는 다른 형태의 setState() 를 사용한다
// 그 함수는 이전 state를 첫 번째 인자로 받아들일 것이고, 업데이트가 적용된 시점의 props를 두 번째 인자로 받아들일 것이다

// this.setState((state, props) => ({
//   counter: state.counter + props.increment
// }));

// 위에서는 화살표 함수를 사용했지만, 일반적인 함수에서도 정상적으로 작동한다

// this.setState(function(state, props){
//   return {
//     counter: state.counter + props.increment
//   };
// });


// **** State 업데이트는 병합된다 ****

// setState() 를 호출할 때 React는 제공한 객체를 현재 state로 병합한다
// state는 다양한 독립적인 변수를 포함할 수 있다

// 데이터는 아래로 흐른다

// 부모 컴포넌트나 자식 컴포넌트 모두 특정 컴포넌트가 유상태인지 또는 무상태인지 알 수 없고
// 함수나 클래스로 정의되었는지 관심을 가질 필요가 없다

// 이 때문에 state는 로컬 또는 캡슐화라고 불린다
// state가 소유하고 설정한 컴포넌트 이외에는 어떠한 컴포넌트에도 접근할 수 없다

// 컴포넌트는 자신의 state를 자식 컴포넌트에 props로 전달할 수 있다

// 이벤트 처리하기

// React 엘리먼트에서 이벤트를 처리하는 방식은 DOM 엘리먼트에서 이벤트를 처리하는 방식과 유사하다

// React의 이벤트는 소문자 대신 케멀 케이스를 사용한다
// JSX를 사용하여 문자열이 아닌 함수로 이벤트 핸들러를 전달한다

// React는 false를 반환해도 기본 동작을 방지할 수 없다
// 반드시 preventDefault를 명시적으로 호출해야 한다

// function ActionLink() {
//   function handleClick(e) {
//     e.preventDefault();
//     alert('The link was clicked');
//   }
//   return (
//     <a href="#" onClick={handleClick}>
//       Click
//     </a>
//   );
// }

// class Toggle extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {isToggleOn: true};
//     this.handleClick = this.handleClick.bind(this);    
//   }
//   handleClick() {
//     this.setState(state => ({
//       isToggleOn: !state.isToggleOn
//     }));
//   }
//   render() {
//     return (
//       <button onClick={this.handleClick}>
//         {this.state.isToggleOn ? 'ON' : 'OFF'}
//       </button>
//     );
//   }
// }

// JSX 콜백 안에서 this의 의미에 대해 주의해야 한다
// JavaScript에서 클래스 메서드는 기본적으로 바인딩되어 있지 않다

// this.handleClick을 바인딩하지 않고 onClick에 전달하였다면, 함수가 실제 호출될 때 this는 underfined가 된다
// 이는 React만의 특수한 동작이 아니며 JavaScript에서 함수가 작동하는 방식의 일부이다
// 일반적으로 onClick={this.handleClick}과 같이 뒤에 () 를 사용하지 않고 메서드를 참조할 경우, 해당 메서드를 바인딩 해야 한다

// class LogginButton extends React.Component {
//   handleClick() {
//     alert('this is ',this)
//   }
//   render() {
//     return (
//       <button onClick={() => this.handleClick()}>
//         Click me
//       </button>
//     );
//   }
// }

// 조건부 렌더링

// React에서 원하는 동작을 캡슐화하는 컴포넌트를 만들 수 있다
// 이렇게 하면 애플리케이션의 상태에 따라서 컴포넌트 중 몇 개만을 렌더링 할 수 있다

// React에서 조건부 렌더링은 JavaScript에서의 조건 처리와 같이 동작한다

// function UserGreeting(props) {
//   return <h1>Welcome back!</h1>;
// }

// function GuestGreeting(props) {
//   return <h1>Please sign up</h1>;
// }

// function Greeting(props) {
//   const isLoggedIn = props.isLoggedIn;
//   if (isLoggedIn) {
//     return <UserGreeting />;
//   }
//   return <GuestGreeting />;
// }

// function LoginButton(props) {
//   return (
//     <button onClick={props.onClick}>
//       Login
//     </button>
//   );
// }

// function LogoutButton(props) {
//   return (
//     <button onClick={props.onClick}>
//       Logout
//     </button>
//   );
// }

// class LoginControl extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleLoginClick = this.handleLoginClick.bind(this);
//     this.handleLogoutClick = this.handleLogoutClick.bind(this);
//     this.state = {isLoggedIn: false};
//   }
//   handleLoginClick() {
//     this.setState({isLoggedIn: true});
//   }
//   handleLogoutClick() {
//     this.setState({isLoggedIn: false});
//   }
//   render() {
//     const isLoggedIn = this.state.isLoggedIn;
//     let button;
//     if (isLoggedIn) {
//       button = <LogoutButton onClick={this.handleLogoutClick} />;
//     }
//     else {
//       button = <LoginButton onClick={this.handleLoginClick} />;
//     }
//     return (
//       <div>
//         <Greeting isLoggedIn={isLoggedIn} />
//       </div>
//     );
//   }
// }


// const listItems = numbers.map((number) => 
//   <li>{number}</li>
// );

// function NumberList(props) {
//   const numbers = props.numbers;
//   const listItems = numbers.map((number) =>
//     <li key={number.toString()}>
//       {number}
//     </li>
//   );
//   return (
//     <ul>{listItems}</ul>
//   );
// }

// const numbers = [1,2,3,4,5];

// key는 React가 어떤 항목을 변경, 추가 또는 삭제할지 식별하는 것을 돕는다
// key는 엘리먼트에 안정적인 고유성을 부여하기 위해 배열 내부의 엘리먼트에 지정해야 한다

// const numbers = [1,2,3,4,5];
// const listItems = numbers.map((number) => 
//   <li key={number.toString()}>
//     {number}
//   </li>
// );

// key로 컴포넌트 추출하기

// 키는 주변 배열의 context에서만 의미가 있다

// 예를 들어 ListItem 컴포넌트를 추출한 경우 ListItem 안에 있는 li 엘리먼트가 아니라
// ListItem 엘리먼트가 key를 가져야한다

// function ListItem(props) {
//   return <li>{props.value}</li>
// }

// function NumberList(props) {
//   const numbers = props.numbers;
//   const listItems = numbers.map((number) =>
//     <ListItem key={number.toString()} value={number} />
//   );
//   return (
//     <ul>
//       {listItems}
//     </ul>
//   )
// }
// map 함수 내부에 있는 엘리먼트에 key를 넣어주는게 좋다

// const numbers = [1,2,3,4,5];


// key는 형제 사이에서만 고유한 값이어야 한다

// key는 배열 안에서 형제 사이에서 고유해야 하고 전체 범위에서 고유할 필요는 없다
// 두 개의 다른 배열을 만들 때 동일한 key를 사용할 수 있다

function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) =>
        <li key={post.id}>
          {post.title}
        </li>
      )}
    </ul>
  );
  const content = props.posts.map((post) =>
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}

const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];

ReactDOM.render(
  <Blog posts={posts} />,
  document.getElementById('root')
);
