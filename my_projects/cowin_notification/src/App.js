import logo2 from './logo2.svg';
import './App.css';

function App() {
  return (
    <div style={{ maxWidth: '500px' }}>
      <div className="heading">
        <h1 className="header-text">My Covid App</h1>
        <img src={logo2} className="App-logo" alt="logo"></img>
      </div>
      <div className="text"></div>
      <div className="container"></div>
    </div>
  );
}

export default App;
