import "./App.css";
import AppHeader from "./components/AppHeader";
import Bracket from "./components/Bracket";
import Standings from "./components/Standings";
import Matches from "./components/Matches";
import AppFooter from "./components/AppFooter";

function App() {
    return (
        <div className="App">
            <AppHeader></AppHeader>
            <Bracket></Bracket>
            <Standings></Standings>
            <Matches></Matches>
            <AppFooter></AppFooter>
        </div>
    );
}

export default App;
