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

var map = new Map();

map.set(1, "images/76ers.png");
map.set(2, "images/blazers.png");
map.set(3, "images/bucks.png");
map.set(4, "images/cavaliers.png");
map.set(5, "images/celtics.png");
map.set(6, "images/clippers.png");
map.set(7, "images/grizzles.png");
map.set(8, "images/hawks.png");
map.set(9, "images/heat.png");
map.set(10, "images/hornets.png");
map.set(11, "images/knicks.png");
map.set(12, "images/lakers.png");
map.set(13, "images/magic.png");
map.set(14, "images/mavs.png");
map.set(15, "images/nets.png");
map.set(16, "images/nuggets.png");
map.set(17, "images/pacers.png");
map.set(18, "images/pelicans.png");
map.set(19, "images/pistons.png");
map.set(20, "images/rockets.png");
map.set(21, "images/suns.png");
map.set(22, "images/thunder.png");
map.set(23, "images/timberwolves.png");
map.set(24, "images/warriors.png");
map.set(25, "images/bulls.png");

function Square(props){
      const image = map.get(props.value);
      return (<td><img src={image} width="200" height="200"></img></td>);
    }
  
  
class Board extends React.Component {
    constructor(props) {
        super(props);
        var squares = [];
        for (var i = 1; i <= 25; i++) {
          squares.push(i);
        }
        shuffle(squares)
        this.state = {
            squares: squares
        };
    }

    handleClick = () => {
      const squares = this.state.squares.slice();
      shuffle(squares)
      console.log("after shuffle: " + squares)

      this.setState(
        {squares: squares}
      );
    }

    renderButton = () => {
      return <button onClick={this.handleClick}>Shuffle images!</button>
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
