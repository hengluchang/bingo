import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import img_1 from './images/blazers.png';
import img_2 from './images/bucks.png';
import img_3 from './images/cavaliers.png';
import img_4 from './images/celtics.png';
import img_5 from './images/clippers.png';
import img_6 from './images/grizzles.png';
import img_7 from './images/hawks.png';
import img_8 from './images/heat.png';
import img_9 from './images/hornets.png';
import img_10 from './images/knicks.png';
import img_11 from './images/lakers.png';
import img_12 from './images/magic.png';
import img_13 from './images/mavs.png';
import img_14 from './images/nets.png';
import img_15 from './images/nuggets.png';
import img_16 from './images/pacers.png';
import img_17 from './images/pelicans.png';
import img_18 from './images/pistons.png';
import img_19 from './images/rockets.png';
import img_20 from './images/suns.png';
import img_21 from './images/thunder.png';
import img_22 from './images/timberwolves.png';
import img_23 from './images/warriors.png';
import img_24 from './images/bulls.png';
import img_25 from './images/76ers.png';
import logo from './images/logo192.png';

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

map.set(1, img_1);
map.set(2, img_2);
map.set(3, img_3);
map.set(4, img_4);
map.set(5, img_5);
map.set(6, img_6);
map.set(7, img_7);
map.set(8, img_8);
map.set(9, img_9);
map.set(10, img_10);
map.set(11, img_11);
map.set(12, img_12);
map.set(13, img_13);
map.set(14, img_14);
map.set(15, img_15);
map.set(16, img_16);
map.set(17, img_17);
map.set(18, img_18);
map.set(19, img_19);
map.set(20, img_20);
map.set(21, img_21);
map.set(22, img_22);
map.set(23, img_23);
map.set(24, img_24);
map.set(25, img_25);

function Square(props){
      const image = map.get(props.value);
      return (<td><img src={image} width="80" height="80" onClick={() => imageClick()}></img></td>);
    }

const imageClick = () => {
  console.log('Click');
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
      return <button id='generate_button' onClick={this.handleClick}>Shuffle images!</button>
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
                <img src={logo} width="200" height="80"></img>
              </tr>
            </table>
            <div>
              {this.renderButton()}
            </div>
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
          <table>
              <tr>
                <img src={logo} width="200" height="80"></img>
              </tr>
            </table>
        </div>
        );
    }
}

ReactDOM.render(<Board />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
