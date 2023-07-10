import { useState, useEffect } from 'react';
import './TicTacToe.css';
import { Circle } from '../../components/Circle/Circle.js';
import { Square } from '../../components/Square/Square.js';
import { Turn } from '../../components/Turn/Turn.js';
import { Modal } from '../../components/Modal/Modal.js';
import { Panel } from '../../components/Panel/Panel.js';

const WinCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function Tictactoe() {
  const [pull, setPull] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState('circle');
  const [isGameOver, setIsGameOver] = useState(false);
  const [winner, setWinner] = useState(null);
  const [gameReset, setGameReset] = useState(false);

  const handleClick = (index) => {
    if (!isGameOver && pull[index] === null) {
      const newPull = [...pull];
      newPull[index] = turn;
      setPull(newPull);
      setTurn(turn === 'circle' ? 'square' : 'circle');
    }
  };

  const checkWinner = () => {
    for (const combination of WinCombinations) {
      const [a, b, c] = combination;
      if (pull[a] && pull[a] === pull[b] && pull[a] === pull[c]) {
        return pull[a];
      }
    }
    return null;
  };

  const resetGame = () => {
    setPull(Array(9).fill(null));
    setTurn('circle');
    setIsGameOver(false);
    setWinner(null);
    setGameReset(false);
  };

  useEffect(() => {
    const winner = checkWinner();
    const isTie = pull.every((value) => value !== null);

    if (winner) {
      setWinner(winner);
      setIsGameOver(true);
    } else if (isTie) {
      setWinner('Tie');
      setIsGameOver(true);
    }
  }, [pull]);

  useEffect(() => {
    if (gameReset) {
      resetGame();
    }
  }, [gameReset]);

  return (
    <>
      <h1 className="text-center">Tic Tac Toe</h1>
      <h2 className="d-flex justify-content-center align-items-center">Turno de</h2>
      <div className="d-flex justify-content-center align-items-center">
        <Turn>
          {turn === 'circle' ? <Circle /> : <Square />}
        </Turn>
      </div>
      <div className="d-flex justify-content-center align-items-center vh-50">
        <div className="row myrow">
          {pull.map((value, index) => (
            <div
              key={index}
              className="col-4 bg-secondary border border-1 border-dark p-3 d-flex justify-content-center align-items-center"
              onClick={() => handleClick(index)}
            >
              {value === 'circle' ? <Circle /> : value === 'square' ? <Square /> : null}
            </div>
          ))}
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        {isGameOver && (
          <Modal>
            <Panel>
              <h3 className="text-center">{winner === 'Tie' ? 'Empate' : `Ganador: ${winner}`}</h3>
              <button onClick={() => setGameReset(true)}>Reiniciar</button>
            </Panel>
          </Modal>
        )}
      </div>
    </>
  );
}

export default Tictactoe;

