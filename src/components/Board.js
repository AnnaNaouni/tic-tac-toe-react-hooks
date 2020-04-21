import React from 'react';
import Square from './Square';

function Board(props) {

    console.log(props);

    function renderSquare(i) {
        return (
            <Square
                winner={isWinningSquare(i, props.winner)}
                value={props.squares[i]}
                onClick={() => props.onClick(i)}
            />
        );
    }

    return (
        <div>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    );
}

function isWinningSquare(i, winningSquares) {
    if (winningSquares != null) {
        if (winningSquares.indexOf(i) !== -1) {
            return true;
        }
    }
    return false;
}

export default Board;