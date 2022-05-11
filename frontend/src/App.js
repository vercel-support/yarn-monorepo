import logo from './logo.svg';
import './App.css';
import { getSiteInfo } from "@yarn-monorepo/framework";

function App() {
  let siteInfo = getSiteInfo();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{siteInfo.title}</h1>
        <p>
        {siteInfo.sub}
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
