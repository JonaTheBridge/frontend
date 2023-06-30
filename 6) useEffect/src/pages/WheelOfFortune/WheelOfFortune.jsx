import { useEffect, useState } from 'react';
import Input from '../../components/Input/Input.jsx';

function WheelOfFortune() {
  const scores = [10, 20, 50, 100, 200, 500];
  const [originalPhrase, setOriginalPhrase] = useState('');
  const [encryptedPhrase, setEncryptedPhrase] = useState('');
  const [letter, setLetter] = useState('');
  const [tryPhrase, setTryPhrase] = useState('');
  const [hasWinner, setHasWinner] = useState(false);
  const [hasLoser, setHasLoser] = useState(false);
  const [score, setScore] = useState();
  const [playerScore, setPlayerScore] = useState(0);
  const [fails, setFails] = useState([]);
  const [initGame, setInitGame] = useState(false);

  useEffect(() => {
    setInitGame(!hasLoser && !hasWinner && originalPhrase);
  }, [hasLoser, hasWinner, originalPhrase]);

  useEffect(() => {
    const splittedOriginalPhrase = originalPhrase.split('');
    const splittedEncryptedPhrase = encryptedPhrase.split(' ');
    let letterScore = 0;
    for (let i = 0; i < splittedOriginalPhrase.length; i++) {
      const splittedLetter = splittedOriginalPhrase[i];
      if (splittedLetter.toUpperCase() === letter.toUpperCase()) {
        splittedEncryptedPhrase[i] = letter;
        letterScore += score;
        setEncryptedPhrase(splittedEncryptedPhrase.join(' '));
      }
    }

    if (letter && !letterScore) {
      setFails([...fails, letter]);
    } else {
      setPlayerScore(playerScore + letterScore);
    }

    setScore();
  }, [letter]);

  useEffect(() => {
    if (fails.length === 5) {
      setHasLoser(true);
    }
  }, [fails]);

  useEffect(() => {
    const splittedOriginalPhrase = originalPhrase.split('');
    const splittedEncryptedPhrase = splittedOriginalPhrase.map((l) => l === ' ' ? '|' : '_');
    setEncryptedPhrase(splittedEncryptedPhrase.join(' '));
  }, [originalPhrase]);

  useEffect(() => {
    if (tryPhrase && originalPhrase && tryPhrase.toUpperCase() === originalPhrase.toUpperCase()) {
      setHasWinner(true);
      setEncryptedPhrase(originalPhrase);
    }
  }, [tryPhrase]);

  // function blurOriginalPhraseHandler(e) {
  //   setOriginalPhrase(e.target.value);
  // }

  // function keyUpOriginalPhraseHandler(e) {
  //   if (e.code === 'Enter') {
  //     setOriginalPhrase(e.target.value);
  //   }
  // }

  // function changeLetterHandler(e) {
  //   const { value } = e.target;
  //   if (value) {
  //     setLetter(value);
  //   }
  // }

  // function keyUpTryPhraseHandler(e) {
  //   if (e.code === 'Enter') {
  //     setTryPhrase(e.target.value);
  //   }
  // }

  // function blurTryPhraseHandler(e) {
  //   setTryPhrase(e.target.value);
  // }

  function clickScoreHandler() {
    const index = Math.floor(Math.random() * scores.length);
    setScore(scores[index]);
  }

  return (
    <>
      { hasWinner && <h4>Has ganado!</h4> }
      { hasLoser && <h4>Has perdido</h4> }

      { initGame && <h1>{ `My score: ${playerScore}` }</h1> }
      { initGame && <h3>{ `Número de errores: ${fails.length}: ${ fails }` }</h3> }

      { !initGame && !hasWinner && !hasLoser && <Input
        type='password'
        placeholder='Inserte una pelicula'
        // onKeyUp={ keyUpOriginalPhraseHandler }
        onKeyUp={ (e) => e.code === 'Enter' && setOriginalPhrase(e.target.value) }
        // onBlur={ blurOriginalPhraseHandler }
        onBlur={ (e) => setOriginalPhrase(e.target.value) }
      />}

      { initGame && <p>{ encryptedPhrase }</p> }

      { !score && initGame && <button onClick={ clickScoreHandler }> Girar la ruleta </button> }
      <h2>{ score }</h2>

      { score && <Input
        type='text'
        placeholder='Inserte una letra'
        maxLength='1'
        // onChange={ changeLetterHandler }
        onChange={ (e) => e.target?.value && setLetter(e.target.value) }
      /> }

      { !score && initGame && <Input
        type='text'
        placeholder='Inserte la solución'
        // onKeyUp={ keyUpTryPhraseHandler }
        onKeyUp={ (e) => e.code === 'Enter' && setTryPhrase(e.target.value) }
        // onBlur={ blurTryPhraseHandler }
        onBlur={ (e) => setTryPhrase(e.target.value) }
      /> }
    </>
  );
}

export default WheelOfFortune;
