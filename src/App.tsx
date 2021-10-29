import { Graph } from "./component/Graph";
import { Header } from "./component/Header";
import { Tab } from "./component/Tab";

const App = () => {
    return (
        <div className="App">
            <Header />
            <Tab />
            <Graph />
        </div>
    );
};

export default App;
