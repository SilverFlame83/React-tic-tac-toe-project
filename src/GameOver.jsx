export default function GameOver({ winner, onRestart }) {
  return (
    <div id="game-over">
      <h2>GameOver!</h2>
      {winner && <p>{winner} won!</p>}
      {!winner && <p>No winner</p>}
      <p>
        <button onClick={onRestart}>Rematch</button>
      </p>
    </div>
  );
}
