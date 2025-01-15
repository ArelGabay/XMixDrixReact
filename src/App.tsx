import React, { useState } from 'react';
import GameBoard from './components/GameBoard';
import './App.css';

const App: React.FC = () => {
    const [xWins, setXWins] = useState(0); // Player X win count
    const [oWins, setOWins] = useState(0); // Player O win count
    const [isXNext, setIsXNext] = useState(true); // Track whose turn it is
    const [gameMessage, setGameMessage] = useState('Current Player: X'); // Initial message

    const resetBoard = () => {
        // Reset the board and update the turn message
        setIsXNext(true);
        setGameMessage('Current Player: X');
    };

    return (
        <div className="App container text-center">
            <header className="my-4">
                <h1>X Mix Drix</h1>
            </header>
            {/* Horizontal scoreboard */}
            <div className="scoreboard d-flex justify-content-around align-items-center my-4">
                <div className="score">
                    <h5>Player X</h5>
                    <p className="badge bg-danger fs-5">{xWins}</p>
                </div>
                <div className="score">
                    <h5>Player O</h5>
                    <p className="badge bg-primary fs-5">{oWins}</p>
                </div>
            </div>
            <p className="turn-indicator fw-bold">{gameMessage}</p>
            <GameBoard />
            <button className="btn btn-outline-success mt-4 invisible-button" onClick={resetBoard}>
                Play Again
            </button>
        </div>
    );
};

export default App;
