export default function GameOver({ winner }) {
  return (
    <div id="game-over">
      <h2>GameOver!</h2>
      {winner && <p>{winner} won!</p>}
      {!winner && <p>No winner</p>}
      <p><button>Rematch</button></p>
    </div>
  );
}
