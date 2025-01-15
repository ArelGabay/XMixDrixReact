import React from 'react';
import './GameBoard.css';

const GameBoard: React.FC = () => {
    const board = Array(9).fill(null); // Dummy board for UI purposes

    return (
        <div className="game-board">
            {board.map((cell, index) => (
                <div key={index} className="cell">
                    <img
                        src={cell ? (cell === 'X' ? '/x.png' : '/o.png') : '/gray_square.png'}
                        alt={cell || 'Empty'}
                        className="cell-image"
                    />
                </div>
            ))}
        </div>
    );
};

export default GameBoard;