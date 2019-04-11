import React, { Component } from 'react';
import Board from './Components/Board.js';
import './Game.css';

class Game extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasGameStarted: false,
		}
		this.handleNewGame = this.handleNewGame.bind(this);
	}

	handleNewGame(e) {
		const { hasGameStarted } = this.state;
		e.preventDefault();
		this.setState({
			hasGameStarted: !hasGameStarted,
		})
	}

  render() {
		const { hasGameStarted } = this.state;
    return (
			<div>
				<button className="newGame-button" onClick={this.handleNewGame}>New Game</button>
				{ hasGameStarted && <Board />}
			</div>
		)
	}
}

export default Game;
