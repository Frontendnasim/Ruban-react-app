import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src="profile.png" className="App-logo" alt="logo" /> */}
        <img alt="" src="/profile.png" className="profile"></img>
        <p>
          {/* Edit <code>src/App.js</code> and save to reload. */}
          Hello React!
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
