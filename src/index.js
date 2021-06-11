import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// const user = {
//   firstname: "Harper",
//   lastName: "Perz",
//   img:'image.com'
// };

// const formatName = (user) => {
//   return user.firstname + " " + user.lastName;
// };

// // after compilation, jsx expression become regular js function calls and evaluate to js objets
// // this means that we can use jsx inside of if statements and for loops, assign it to variables, accept
// // it as arguments, and return it from function;

// function getGreeting(user) {
//   if (user) {
//     return <h1>Hello, {formatName(user)}!</h1>;
//   }
//   return <h1>Hello, Stranger.</h1>;
// }

// // specifing arrtibutes with jsx
// // you may use quotes to specify string literals as Attributes
// const element1 = <div tabIndex="0"></div>;

// // we can also use curly braces to embed a js expression in an attribute
// const element2 = <img src={user.img} alt={user.firstname}></img>;

// jsx tags may contain children
// const element = (
//   <div>
//     <h1>Hello</h1>
//     <h2>Good to see you here</h2>
//   </div>
// );

// jsx represents objects:-
// babel complies jsx dow to react.creatElement() calls.
const element1 = <h1 className="gretting">Hello world</h1>;
const element2 = React.createElement(
  "h1",
  { className: "greeting" },
  "Hello world"
);
//here element1 and element2 are identical

ReactDOM.render(
  <div>
    element1 output:{element1} element2 output:{element2}
  </div>,
  document.getElementById("root")
);
/*
jsx is a syntax extesion to javascript. It looks like template language, but
it comes with the full power of js. JSX produces react elements.
Since JSX is closer to JavaScript than to HTML, React DOM uses camelCase property naming convention instead of HTML attribute names.
For example, class becomes className in JSX, and tabindex becomes tabIndex.

*/
