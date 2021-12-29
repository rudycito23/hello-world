import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Samurai Jack
        </h1>
        <img src="https://static.wikia.nocookie.net/samuraijack/images/5/5c/Samurai_Jack.png" className="App-logo" alt="logo" />
        <p>
          Congrats! This is your first website introducing Samurai Jack!
        </p>
        <p>
          Click on the link below to learn more about Jack.
        </p>
        <a
          className="App-link"
          href="https://en.wikipedia.org/wiki/Samurai_Jack"
          target="_blank"
          rel="noopener noreferrer"
        >
          Samurai Jack!
        </a>
      </header>
    </div>
  );
}

export default App;
