import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function Square(props){
      return (<td>{props.value}</td>
      );
    }
  
  
class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(25).fill(null),
        };
    }

    handleClick = () => {
      console.log("inside handleclick")
      const squares = this.state.squares.slice();
      var i;
      for (i = 0; i < 25; i++) {
          squares[i] = i;
      }
      shuffle(squares)
      this.setState(
        {squares: squares}
      );
    }

    renderButton = () => {
      return <button onClick={this.handleClick}>Shuffle numbers!</button>
    }

    renderSquare(i) {
        return <Square 
        value={this.state.squares[i]}
        />;
    }

    render() {
        return (
        <div id="board">
            <table>
            <tr>
              {this.renderSquare(0)}
              {this.renderSquare(1)}
              {this.renderSquare(2)}
              {this.renderSquare(3)}
              {this.renderSquare(4)}
            </tr>
            <tr>
              {this.renderSquare(5)}
              {this.renderSquare(6)}
              {this.renderSquare(7)}
              {this.renderSquare(8)}
              {this.renderSquare(9)}
            </tr>
            <tr>
              {this.renderSquare(10)}
              {this.renderSquare(11)}
              {this.renderSquare(12)}
              {this.renderSquare(13)}
              {this.renderSquare(14)}
            </tr>
            <tr>
              {this.renderSquare(15)}
              {this.renderSquare(16)}
              {this.renderSquare(17)}
              {this.renderSquare(18)}
              {this.renderSquare(19)}
            </tr>
            <tr>
              {this.renderSquare(20)}
              {this.renderSquare(21)}
              {this.renderSquare(22)}
              {this.renderSquare(23)}
              {this.renderSquare(24)}
            </tr>
          </table>
          <div>
              {this.renderButton()}
          </div>
        </div>
        );
    }
}

ReactDOM.render(<Board />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
