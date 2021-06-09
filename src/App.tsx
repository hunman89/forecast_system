import Chart from './component/Chart';
import Typography from '@material-ui/core/Typography';

function App() {
  
  return (
    <div className="App">
      <header className="AppHeader">
        <Typography variant="h3" align="center">
          농산물 가격예측 시스템
        </Typography>
      </header>
      <Chart/>
    </div>
  );
}

export default App;
