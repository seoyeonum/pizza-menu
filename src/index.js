import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  const x = 'jonas';
  return <h1>Hello React!</h1>;
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
