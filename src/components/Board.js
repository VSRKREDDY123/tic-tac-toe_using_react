import Square from "./Square";
import calculateWinner from "../services/calculateWinner";

export default function Board(props) {
  // const [xTurn, setXTurn] = useState(true);
  // const [squares, setSquares] = useState(Array(9).fill(null));
  const winner = calculateWinner(props.squares);
  let status = winner
    ? "Winner: " + winner
    : "Next player: " + (props.xTurn ? "X" : "O");

  function handleClick(i) {
    if (props.squares[i] || calculateWinner(props.squares)) return;
    const nextSquares = props.squares.slice();
    nextSquares[i] = props.xTurn ? "X" : "O";
    props.onPlay(nextSquares);
  }

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={props.squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={props.squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={props.squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={props.squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={props.squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={props.squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={props.squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={props.squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={props.squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </div>
  );
}
