import React, { Component } from 'react';
import Square from './Square.js';
import '../Game.css';

class Board extends Component {
	constructor(props) {
		super(props);
		this.state = {
			board: Array(9).fill(null),
			xIsNext: true,
		}
		this.createNewBoard = this.createNewBoard.bind(this);
	}

	createNewBoard(boardSize) {
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
				value={ board[i] }
				/>
		)
	}


  render() {
    return (
      <div>{ this.createNewBoard(3) }</div>
    );
  }
}

export default Board;
