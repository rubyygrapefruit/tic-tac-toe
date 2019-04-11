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
			status: 'First Player is X',
			timesClicked: 0,
		}
		this.createNewBoard = this.createNewBoard.bind(this);
		this.renderSquare = this.renderSquare.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.calculateWinner = this.calculateWinner.bind(this);
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
		const { board, xIsNext, timesClicked } = this.state;
		const boardCopy = board.slice();
		if (this.calculateWinner(boardCopy) || boardCopy[i] ) {
			return;
		}
		boardCopy[i] = xIsNext ? 'X' : 'O';
		this.setState({
			board: boardCopy,
			xIsNext: !xIsNext,
			timesClicked: timesClicked + 1,
		},()=> this.checkStatus());
	}

	calculateWinner(board) {
		const lines = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];
		for (let i = 0; i < lines.length; i++) {
			const [a, b, c] = lines[i];
			if (board[a] && board[a] === board[b] && board[a] === board[c]) {
				return board[a];
			}
		}
		return null;
	}

	checkStatus(){
		const { board, xIsNext, timesClicked } = this.state;
		let updatedState = {};
		const winner = this.calculateWinner(board);
		if (winner) {
			updatedState={
				status:`Winner is ${winner}`,
			}
		} else if ( timesClicked === 9) {
			updatedState={
				status: 'This is a draw',
			}
		} else {
			updatedState={
				status: `Next player is ${xIsNext ? 'X': 'O'}`,
			}
		}
		this.setState({
			...updatedState,
		})
	}

  render() {
		const { status } = this.state;
    return (
			<div>
				{status}
      	<div>{this.createNewBoard(3)}</div>
			</div>
    );
  }
}

export default Board;
