import React, { Component } from 'react';
import Square from './Square.js';
import '../Game.css';

class Board extends Component {
	constructor(props) {
		super(props);
		this.state = {
			board: Array(9).fill(null),
			value: null,
			xIsNext: true,
		}
		this.createNewBoard = this.createNewBoard.bind(this);
		this.renderSquare = this.renderSquare.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	createNewBoard(boardSize) {
		// I made this particular function so that the board size can change dynamically
		let squares = [];
		for (let i = 0; i < boardSize; i++) {
			let row = [];
			for (let j = 0; j < boardSize; j++) {
				row.push(this.renderSquare(i * boardSize + j));
			}
			squares.push(<div key={i} className="board-row">{row}</div>);
		}
		return squares;
	}

	renderSquare(i) {
		const { board } = this.state;
		return (
			<Square
				key={i}
				value={board[i]}
				onHandleClick={()=> this.handleClick(i)}
				/>
		)
	}

	handleClick(i) {
		const { board, xIsNext } = this.state;
		const boardCopy = board.slice();
		boardCopy[i] = xIsNext ? 'X' : 'O';
		this.setState({
			board: boardCopy,
			xIsNext: !xIsNext,
		})
	}


  render() {
		const { xIsNext } = this.state;
 		const status = `Next player is ${xIsNext ? 'X': 'O'}`
    return (
			<div>
				{status}
      	<div>{this.createNewBoard(3)}</div>
			</div>
    );
  }
}

export default Board;
