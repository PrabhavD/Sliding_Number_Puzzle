import logo from './logo.svg';
import './App.css';

function App() {

  var Board = React.createClass({
    
    getInitialState: function() {
      let tiles = [1, 2, 3, 4, 5, 6, 7, 8, ''];
      tiles = tiles.sort(() => Math.random() - 0.5);
      return {
        tiles: tiles,
        complete: false
      };
    },

    checkBoard: function() {
      var tiles = this.state.tiles;

      for (var i = 0; i< tiles.length-1; i++) {
        if (tiles[i] !== i+1) {
          return false;
        } else {
          return true;
        }
      }
    },

    mouseClick: function(tile1, position, status) {
      var tiles = this.state.tiles;
      // All possible moves as denoted by index
      var possible_moves = [
        [null,1,3,null], [null,2,4,0], [null,null,5,1],
        [0,4,6,null], [1,5,7,3], [2,null,8,4],
        [3,7,null,null], [4,8,null,6], [5,null,null,7]
      ];

      function moveTile(i, possible_moves) {
        var all_dir = ['up', 'right', 'down', 'left'];
        var move_to_cell1 = document.querySelector('.tile:nthchild(' + (move + 1) + ')');
        dir = all_dir[i];
        tile1.classList.add('move-' + direction);
      }

      //set new state
      function updated_state() {
        tiles[position] = '';
        tiles[move] = status;
        this.setState({
          tiles: tiles,
          possible_moves: possible_moves,
          complete: this.checkBoard()
        });
      };

      //exit if they have completed game
      if (this.state.complete) return;
      
      //Recalibrate all possible moves
      for (var i = 0; i< possible_moves[position].length, i++) {
        var move = possible_moves[position][i];
        //Condition if tile is empty
        if (typeof move === 'number' && !tiles[move]) {
          moveTile(i, move);
          break;
        }
      }
    },

    //Restart Game
    restartGame: function() {
      this.setState(this.getInitialState());
    },
    render: function() {
      return (
      <div className='App'>
        <div id="game-board">
          {this.state.tiles.map(function(tile, position) {
            return ( <Tile status={tile} key={position} mouseClick={this.mouseClick} />);
          }, this)}
        </div>
        <Menu completeClass={this.state.complete ? 'button win' : 'button'} status={this.state.complete ? 'Winner!' : 'Solve'} restart={this.restartGame} />
      </div>
      );
    }
  });

  var Tile = React.createClass({
    clickHandler: function(e) {
      this.props.tileClick(e.target, this.props.key, this.props.status);
    },
    render: function() {
      return <div className="tile" onClick={this.clickHandler}>{this.props.status}</div>;
    }
});

var Menu = React.createClass({
  clickHandler: function() {
      this.props.restart();
  },
  render: function() {
      return <div id="menu">
          <h3 id="subtitle">{this.props.status}</h3>
          <a className={this.props.winClass} onClick={this.clickHandler}>Restart</a>
      </div>;
  }
});

export default App;