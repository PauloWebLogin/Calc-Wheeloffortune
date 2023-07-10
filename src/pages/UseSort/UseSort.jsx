import { useSort } from '../../hooks/useSort.js';
import { Button } from '../../components/Button/Button.jsx';

function UseSort() {
  const { useSort, ascending, descending } = useSort();

  const data = [
    { name: 'Jose', age: 99, price: 1 },
    { name: 'Alex', age: 33, price: 51 },
    { name: 'Jona', age: 32, price: 501 },
    { name: 'Zack', age: 31, price: 50 },
    { name: 'Maria', age: 1, price: 999 },
  ];

  return (
    <>
      <div>
        <h1>Use Sort</h1>
        <Button onClick={ascending}>Orden Ascendente</Button>
        <Button onClick={descending}>Orden Descendente</Button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default UseSort;
