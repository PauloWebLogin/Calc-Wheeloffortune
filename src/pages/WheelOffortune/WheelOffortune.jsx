import { useState } from 'react';
import './WheelOffortune.css';
import Input from '../../components/Input/Input';

function WheelOffortune() {
  const [secretWord, setSecretWord] = useState('');
  const [finishWin, setFinishWin] = useState(false);
  const [finishLoser, setFinishLoser] = useState(false);
  const [score, setScore] = useState(0);
  const [errorCount, setErrorCount] = useState(0);
  const [clickCount, setClickCount] = useState(0);
  const [guessedLetters, setGuessedLetters] = useState([]);

  const handleEnter = (e) => {
    if (e.key === 'Enter' && e.target.value !== '') {
      setSecretWord(e.target.value);
    }
  };

  const handleSpinWheel = () => {
    if (clickCount < 5) {
      const randomScore = [100, 200, 300, 400, 500][Math.floor(Math.random() * 5)];
      setScore((prevScore) => prevScore + randomScore);
      setClickCount((prevCount) => prevCount + 1);
    }
  };

  const handlerSolutionEnter = (e) => {
    if (e.key === 'Enter' && e.target.value !== '') {
      const enteredLetter = e.target.value.toLowerCase();
      const secretWordLower = secretWord.toLowerCase();

      if (secretWordLower.includes(enteredLetter)) {
        setGuessedLetters((prevLetters) => [...new Set([...prevLetters, enteredLetter])]);

        const guessedWord = secretWordLower
          .split('')
          .map((char) => (guessedLetters.includes(char) ? char : ' _ '))
          .join('');

        if (guessedWord === secretWordLower) {
          setFinishWin(true);
        }
      } else {
        setErrorCount((prevCount) => prevCount + 1);
        if (errorCount + 1 >= 4) {
          setFinishLoser(true);
        }
      }

      e.target.value = '';
    }
  };


  const renderDashes = () => {
    const characters = secretWord.split('');
    const dashedCharacters = characters.map((char, index) => {
      const isLetterUsed = guessedLetters.includes(char.toLowerCase());
      return (
        <span key={index} className="dash">
          {isLetterUsed || char === ' ' ? char : ' _ '}
        </span>
      );
    });
    return dashedCharacters;
  };

  return (
    <>
       <div className="text-center">
        <h1 className="text-center">Play Wheel Off Fortune</h1>
        {!secretWord && (
          <div>
            <Input
              type="password"
              placeholder="Escribe una película"
              onKeyDownHandler={handleEnter}
            />
          </div>
        )}

        {secretWord && !finishWin && !finishLoser && (
          <div className="d-flex justify-content-center align-items-center flex-column">
            <div>
              <h2>Mi puntuación: {score}</h2>
            </div>
            <div>
              <h3>Número de errores: {errorCount}/5</h3>
            </div>
            <button onClick={handleSpinWheel} disabled={clickCount >= 5}>
              Gire la rueda
            </button>
            <Input
              type="text"
              placeholder="Escribe la película"
              onKeyDownHandler={handlerSolutionEnter}
            />
            <div>{renderDashes()}</div>
          </div>
        )}

        {finishWin && (
          <div>
            <h2>¡Has ganado!</h2>
          </div>
        )}

        {finishLoser && (
          <div>
            <h2>¡Has perdido!</h2>
          </div>
        )}
      </div>
    </>
  );
}

export default WheelOffortune;



