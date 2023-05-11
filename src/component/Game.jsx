import React from 'react';
import './Game.css';
import TicTacToe from './Logic.jsx';

const Game = () => {
    return (
        <div className="App">
            <h1>Tic Tac Toe</h1>
            <TicTacToe />
        </div>
    );
};

export default Game;
