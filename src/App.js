import "./App.css";
import AppHeader from "./components/AppHeader";
import Bracket from "./components/Bracket";
import Standings from "./components/Standings";
import Games from "./components/Games";
import AppFooter from "./components/AppFooter";

function App() {
    return (
        <div className="App">
            <AppHeader></AppHeader>
            <Bracket></Bracket>
            <Standings></Standings>
            <Games></Games>
            <AppFooter></AppFooter>
        </div>
    );
}

export default App;
