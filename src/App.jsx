import { useState } from "react";

import Player from "./Player";
import GameBoard from "./GameBoard";
import Log from "./Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";

function deriveActivePlayer(gameTurns){
  let currentPlayer = "X";

  if (gameTurns.length >0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
}
export default function App() {
  //const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns)

  function handleActivePlayer(rowIndex, colIndex) {
    //setActivePlayer((currentPlayer) => (currentPlayer === "X" ? "O" : "X"));
    setGameTurns((prevTurns) => {
     const currentPlayer = deriveActivePlayer(prevTurns)

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer},
        ...prevTurns,
      ];

      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard
          onSelectSquare={handleActivePlayer}
         turns = {gameTurns}
        />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}
