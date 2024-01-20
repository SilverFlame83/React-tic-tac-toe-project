import { useState } from "react";

import Player from "./Player";
import GameBoard from "./GameBoard";

export default function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  function handleActivePlayer() {
    setActivePlayer((currentPlayer) => (currentPlayer === "X" ? "X" : "O"));
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
            isActive={activePlayer === "X"}
          />
        </ol>
        <GameBoard onSelectSquare={handleActivePlayer} />
      </div>
      LOG
    </main>
  );
}
