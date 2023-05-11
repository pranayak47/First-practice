import React, { useState } from 'react';

const TicTacToe = () => {
    const [board, setBoard] = useState(Array(9).fill(''));
    const [player, setPlayer] = useState('X');
    const [winner, setWinner] = useState('');

    const handleCellClick = (index) => {
        if (board[index] === '' && !winner) {
            const newBoard = [...board];
            newBoard[index] = player;
            setBoard(newBoard);
            setPlayer(player === 'X' ? 'O' : 'X');
            checkWinner(newBoard);
        }
    };

    const checkWinner = (board) => {
        const lines = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6] // Diagonals
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                setWinner(board[a]);
                break;
            }
        }
    };

    const handleRestart = () => {
        setBoard(Array(9).fill(''));
        setPlayer('X');
        setWinner('');
    };

    return (
        <div className="tic-tac-toe">
            <div className="board">
                {board.map((cell, index) => (
                    <div
                        key={index}
                        className={`cell ${cell}`}
                        onClick={() => handleCellClick(index)}
                    >
                        {cell}
                    </div>
                ))}
            </div>
            {winner && (
                <div className="winner">
                    <p>Winner: {winner}</p>
                </div>
            )}
            <button onClick={handleRestart}>Restart</button>
        </div>
    );
};

export default TicTacToe;
