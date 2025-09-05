import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const pizzaData = [
  {
    name: 'Focaccia',
    ingredients: 'Bread with italian olive oil and rosemary',
    price: 6,
    photoName: 'pizzas/focaccia.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Margherita',
    ingredients: 'Tomato and mozarella',
    price: 10,
    photoName: 'pizzas/margherita.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Spinaci',
    ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
    price: 12,
    photoName: 'pizzas/spinaci.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Funghi',
    ingredients: 'Tomato, mozarella, mushrooms, and onion',
    price: 12,
    photoName: 'pizzas/funghi.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Salamino',
    ingredients: 'Tomato, mozarella, and pepperoni',
    price: 15,
    photoName: 'pizzas/salamino.jpg',
    soldOut: true,
  },
  {
    name: 'Pizza Prosciutto',
    ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
    price: 18,
    photoName: 'pizzas/prosciutto.jpg',
    soldOut: false,
  },
];

function App() {
  return (
    // JSX 에서는 class 대신 className 사용 (class 는 이미 JS의 예약어)
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // 각 속성명은 JavaScript 명명규칙에 따라 camel 표기법을 따른다.
  // const style = { color: 'red', fontSize: '48px', textTransform: 'uppercase' };
  const style = {};
  return (
    <header className="header footer">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our menu</h2>
      <Pizza />
      <Pizza />
      <Pizza />
      <Pizza />
    </main>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  // if (hour >= openHour && hour <= closeHour) alert("We're currently open!");
  // else alert("Sorry we're closed");
  // ※ strict mode 에서는 모든 게 두 번씩 실행된다.

  return (
    <footer className="fotter">
      {new Date().toLocaleTimeString()}. We're currently open
    </footer>
    // return React.createElement('footer', null, "We're currently open!");
  );
}

// React 에서 Component 를 구성할 때는...
// 1. function name 은 대문자로 시작할 것
// 2. markup (대개는 JSX) 를 반환해야 한다.
function Pizza() {
  return (
    <div>
      <img src="pizzas/spinaci.jpg" alt="Pizza spinaci" />
      <h3>Pizza Spinaci</h3>
      <p>Tomato, mozarella, spinach, and ricotta cheese</p>
    </div>
  );
}

// React v18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// // React before 18
// React.render(<App />, document.getElementById('root'));

// Before we start coding: Debugging
// 1. App 이 실행 중인지 확인하기 (npm start)
// → 만약 실행 중에도 작동 안한다면 중지(Ctrl+C) 후 재시작(npm start)
// 2. 터미널을 항상 열어두기 (브라우저 console 역시 열어두기)
// → 브라우저에 나타난 에러가 이해되지 않는다면 복사 후 구글에 검색
// 3. ESLint 가 알려주는 에러(밑줄) 참고하기
// → OUTPUT 탭에서 에러 내용을 확인할 수도 있다.
// 4. 위 모든 게 정상이라면, 작성한 코드에 버그가 존재한다.
// → 학습 과정에서는 JONAS 의 FINAL 코드와 비교해보기!

// Components as Building Blocks
// : Component?
// - React applications are entirely made out of component
// - Building blocks of user interfaces in React
// - Piece of UI has its own data, logic, and appearance (how it works and looks)
// - We build complex UIs by building multiple components and combining them
// - Components can be reused, nested inside each other, and pass data between them

// JSX: JavaScript XML
// ※ XML: eXtensivla Markup Language

// What's JSX?
// - Declarative syntax to describe what components look like and how they work
// - Components must return a block of JSX
// - Extension of JavaScript that allows us to embed JavaScript, CSS, and React components into HTML
// - Each JSX elelment is converted to a React.createElement function call
// - We could use React without JSX
