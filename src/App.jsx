import React, { useState } from "react";
// import { Intro } from "./components";

const App = () => {
  const [status, setStatus] = useState("X");
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState(null);
  const calculateWinner = (squares) => {
    const winning = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winning.length; i++) {
      const [a, b, c] = winning[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const handleClick = (i) => {
    if (winner || squares[i]) {
      return;
    }

    const newSquares = squares.slice();
    newSquares[i] = status;
    setSquares(newSquares);
    const nextPlayer = status === "X" ? "O" : "X";
    setStatus(nextPlayer);

    const calculatedWinner = calculateWinner(newSquares);
    if (calculatedWinner) {
      setWinner(calculatedWinner);
    }
  };

  const renderSquare = (i) => {
    return (
      <button className="square" onClick={() => handleClick(i)}>
        {squares[i]}
      </button>
    );
  };

  const renderStatus = () => {
    if (winner) {
      return `Winner: ${winner}`;
    } else if (squares.every((square) => square)) {
      return "It's a draw!";
    } else {
      return `Next player: ${status}`;
    }
  };

  return (
    <div id="main">
      {/* <Intro /> */}

      <div className="game">
        <div className="game-info">
          <div>{renderStatus()}</div>
        </div>

        <div className="game-board">
          <div className="board-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </div>

          <div className="board-row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </div>
          <div className="board-row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
