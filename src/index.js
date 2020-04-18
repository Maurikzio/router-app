import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// import MyRouter from './MyRouter'
// import DummyRouter from './practice/dummyRouter'
// import Router2 from './router2'
// import Nested from './nested'
// import CrazyRouter from './crazy-router/crazyRouter'
import SuperRouter from './components/super-router'

const contacts = [{
  firstName: "Барней",
  lastName: "Стинсовский",
  phone: "+380956319521",
  gender: "male"
}, 
{
  firstName: "Робин",
  lastName: "Щербатская",
  phone: "+380931460123",
  gender: "female"
}, 
{
  firstName: "Аномный",
  lastName: "Анонимус",
  phone: "+380666666666"
}, 
{
  firstName: "Лилия",
  lastName: "Олдровна",
  phone: "+380504691254",
  gender: "female"
}, 
{
  firstName: "Маршэн",
  lastName: "Эриксонян",
  phone: "+380739432123",
  gender: "male"
}, 
{
  firstName: "Теодор",
  lastName: "Мотсбэс",
  phone: "+380956319521",
  gender: "male"
},
{
firstName: "Теоoo",
lastName: "Мот",
phone: "+380956319521",
gender: "female"
}];

ReactDOM.render(
  <React.StrictMode>
    <SuperRouter data={contacts}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
