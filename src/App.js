import "./App.css";
import AppHeader from "./components/AppHeader";
import Bracket from "./components/Bracket";
import Standings from "./components/Standings";
import AppFooter from "./components/AppFooter";

function App() {
    return (
        <div className="App">
            <AppHeader></AppHeader>
            <Bracket></Bracket>
            <Standings></Standings>
            <AppFooter></AppFooter>
        </div>
    );
}

export default App;
