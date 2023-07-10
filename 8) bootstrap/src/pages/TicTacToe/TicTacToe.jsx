import { useState, useEffect } from 'react';
// import Square from '../../components/Square/Square.js';
// import Circle from '../../components/Circle/Circle.js';
import Token from '../../components/Token/Token.js';
import Box from '../../components/Box/Box.js';
import Modal from '../../components/Modal/Modal.js';
import Panel from '../../components/Panel/Panel.js';
import './TicTacToe.css';

const row1 = [0, 1, 2];
const row2 = [3, 4, 5];
const row3 = [6, 7, 8];
const col1 = [0, 3, 6];
const col2 = [1, 4, 7];
const col3 = [2, 5, 8];
const dia1 = [0, 4, 8];
const dia2 = [2, 4, 6];
const possibleWin = [row1, row2, row3, col1, col2, col3, dia1, dia2];

function TicTacToe() {
  const [turn, setTurn] = useState('square');
  const [winner, setWinner] = useState();
  const [board, setBoard] = useState([...Array(9)]); // [undefined, undefined...]
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (board.every((e => !e))) {
      return;
    }

    const win = possibleWin.some((ternary) =>
      ternary.every((ternaryIndex) =>
        board[ternaryIndex] === turn
      )
    );

    win ? setWinner(turn) : setTurn(turn === 'square' ? 'circle' : 'square');
  }, [board]);

  useEffect(() => {
    if (!showError) {
      return;
    }

    setTimeout(() => {
      setShowError(false);
    }, 3000);
  }, [showError]);

  function changeSymbol(index) {
    const localBoard = [...board];
    const canChangeSymbols = board.every(box => box);
    if (localBoard[index] && !canChangeSymbols) {
      setShowError(true);
      return;
    }

    localBoard[index] = turn;
    setBoard(localBoard);
  }

  return (
    <div className='ticTacToe'>
      <h1>Tic tac toe</h1>

      <h2>Turno de</h2>
      <div className='turn box'>
        {/* { turn === 'square' ? <Square /> : <Circle />} */}
        <Token type={turn}/>
      </div>

      { winner &&
        <Modal>
          <Panel>
            <h2 className='win'>Has ganado!</h2>
            <div className='turn box'>
              {/* { turn === 'square' ? <Square /> : <Circle />} */}
              <Token type={turn}/>
            </div>
          </Panel>
        </Modal>
      }

      { showError &&
        <Modal>
          <Panel>
            <h2 className='error'>No puedes reemplazar una ficha si hay casillas vacias</h2>
          </Panel>
        </Modal>
      }

      <div className='board row'>
        {
          board.map((e, index) =>
            <Box
              key={`box${index}`}
              onClick={ () => changeSymbol(index) }
              className='box col-4'
            >
              {/* { e === 'square' && <Square /> }
              { e === 'circle' && <Circle /> } */}
              { e &&
                <Token type={e}/>
              }
            </Box>
          )
        }
      </div>
    </div>
  );
}

export default TicTacToe;
