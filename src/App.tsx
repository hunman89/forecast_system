import ScrollableTabsButtonAuto from './component/Tab';
import Typography from '@material-ui/core/Typography';

function App() {
  
  return (
    <div className="App">
      <header className="AppHeader">
        <Typography variant="h3" align="center">
          농수산물 가격예측 및 꿀팁제공
        </Typography>
      </header>
      <ScrollableTabsButtonAuto/>
    </div>
  );
}

export default App;
