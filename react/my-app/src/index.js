import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import 추가
import Library from './chapter_03/Library';
import Clock from './chapter_04/Clock';
import CommentList from './chapter_05/Comment_list';
import NotificationList from './chapter_06/NotificationList';
import Accommodate from './chapter_07/Accommodate';
import ConfirmButton_class from './chapter_08/Confirmbutton_class';
import ConfirmButton_function from './chapter_08/Confirmbutton_function';
import LandingPage from './chapter_09/LandingPage';
import AttendanceBook from './chapter_10/AttendanceBook';
import SignUp from './chapter_11/SignUp';
import Calculator from './chapter_12/Calculator';
import ProfileCard from './chapter_13/ProfileCard';

const root = ReactDOM.createRoot(document.getElementById('root'));
// setInterval(() => {
//   root.render(
//     <React.StrictMode>
//       <Clock />
//     </React.StrictMode>
//   );
// }, 1000);
root.render(
  <React.StrictMode>
    <ProfileCard />
  </React.StrictMode>
);

// // 왜 선생님이랑 다르지...? 버전이 달라서인가...? >>> ㅇㅇ
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Library />
//   </React.StrictMode>
// );

// 이거는 실행이 안됨 >>> 현재 리액트는 18버전 이상이고 아래 코드는 이전 버전의 리액트에서 실행하던 방식
// ReactDOM.render(
//   <React.StrictMode>
//     <Library />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
