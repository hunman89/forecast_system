import Chart from './component/Chart';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          농산물 가격예측 시스템
        </a>
      </header>
      <Chart/>
    </div>
  );
}

export default App;
