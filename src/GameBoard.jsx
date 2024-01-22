const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare, turns }) {
  let getBoard = initialBoard;

  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;

    getBoard[row][col] = player;
  }

  // const [getBoard, setGetBoard] = useState(initialBoard);

  // function handleSelectSquare(rowIndex, colIndex) {
  //   setGetBoard((prevGameBoard) => {
  //     const updatedBoard = [
  //       ...prevGameBoard.map((innerArray) => [...innerArray]),
  //     ];
  //     updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
  //     return updatedBoard;

  //   });
  //   onSelectSquare()
  // }
  return (
    <ol id="game-board">
      {getBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSimbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSimbol !== null}
                >
                  {playerSimbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
