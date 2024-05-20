// 1.Import the React and ReactDOM library
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// 2.Get a reference to the div with ID root
const el = document.getElementById('root');

// 3.Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// 4.Create a components
// function App() {
//   // we don't always have to declare a variable ahead of time
//   return <h1>{new Date().toLocaleTimeString()}</h1>;
// }

// function App() {
//   let message = 'Enter age'
//   return <input
//     type="number"
//     list={[1, 2, 3]}
//     style={{ color: 'red' }}
//     alt={message}
//   />;
// }
// function App() {
//   let config = {color: 'red'}
//   return (
//     <div>
//       // doesn't work
//       {/*<h1>{config}</h1>*/}
//       // as a prop, OK!
//       <input abc={config}/>
//     </div>
//   )
// }

// function App() {
//   return (
//     <div className="wrapper">
//       <textarea
//         readOnly={true}
//         maxLength={3}
//         spellCheck={true}
//         style={{backgroundColor: 'gray'}}
//       />
//     </div>
//   );
// }

// 5.Show the components on the screen
root.render(<App/>);