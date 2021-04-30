import './App.css';
import Deck from './components/Deck';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Card Deck Generator
        </p>
        <Deck />
      </header>
    </div>
  );
}

export default App;
