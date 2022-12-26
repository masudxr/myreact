import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
 

// const element = React.createElement('HI', null, 'Hello World');
const index =0;
setInterval(() => {
  const element = (
    <h1 className='heading' tabIndex={index}>
      <span className='text'>Current Time Clock: {new Date().toLocaleTimeString()}</span>
      <img src=''/>
    </h1>
  );
  
const domContainer = document.getElementById('root');
const myElement = React.createElement("div", null, element);

const root = ReactDOM.createRoot(domContainer);
root.render(myElement);
})

// virtual Dom

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
