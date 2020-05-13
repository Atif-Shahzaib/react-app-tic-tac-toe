import React from 'react';
import MyBoard from './board.js';
class MyGame extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <MyBoard />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}
export default MyGame;  