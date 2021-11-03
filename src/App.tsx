import { Footer } from "./component/Footer";
import { Graph } from "./component/Graph";
import { Header } from "./component/Header";
import { Tab } from "./component/Tab";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Tab />
      <Graph />
      <Footer />
    </div>
  );
};

export default App;
