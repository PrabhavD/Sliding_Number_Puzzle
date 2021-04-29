import logo from './logo.svg';
import './App.css';

function App() {

  var Board = React.createClass({


    getInitialState: function() {
      return {
        tiles: this.shuffle([1, 2, 3, 4, 5, 6, 7, 8, '']),
        complete: false
      };
    },

    checkBoard: function() {
      var tiles = this.state.tiles;

      for (var i = 0; i< tiles.length-1; i++) {
        if (tiles[i] !== i+1) return false;
        else return true;
      }

    }
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
