// import { useState } from 'react'
// import reactLogo from '/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import './App.css';

function App() {
  const myArray = [
    { id: 'id1', name: 'Jona', age: 18, color: '#F29A86' },
    { id: 'id2', name: 'Pepe', age: 17, color: '#BD87BB' },
    { id: 'id3', name: 'Luis', age: 19, color: '#58C3BB' },
    { id: 'id4', name: 'Ana', age: 99, color: '#8B9068' },
    { id: 'id5', name: 'Maria', age: 2, color: '#F8E469' },
  ];

  const totalAges = myArray.reduce((sum, person) => sum + person.age, 0);
  const averageAge = totalAges / myArray.length;

  return (
    <>
      <h1 style={{color:'rgb(0, 255, 255)'}}>Edem 
      <span style={{color:'rgb(255, 255, 255)'}}> /</span>
      <span style={{color:'rgb(255, 0, 0)'}}> The Bridge</span></h1>
      <div>
        {myArray.map((person) => (
          <p key={person.id}
          style={{color:person.color}}
          // className={person.age >= 18 ? 'adult' : 'minor'}
          className={person.age %2 === 0 ? 'odd' : 'even'}>
            Hola soy {person.name} y tengo {person.age} años
          </p>
        ))}
      </div>
      <p>La media de años es: {averageAge}</p>
    </>
  );
}


export default App
