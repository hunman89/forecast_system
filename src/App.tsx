import ScrollableTabsButtonAuto from "./component/Tab";
import Typography from "@material-ui/core/Typography";

function App() {
  return (
    <div className="App">
      <header className="AppHeader" style={{ margin: "20px" }}>
        <Typography variant="h3" align="center">
          농축산업 경영정보 제공서비스
        </Typography>
      </header>
      <ScrollableTabsButtonAuto />
    </div>
  );
}

export default App;
