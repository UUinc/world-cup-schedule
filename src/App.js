import "./App.css";
import AppHeader from "./components/AppHeader";
import Bracket from "./components/Bracket";
import Standings from "./components/Standings";
import Games from "./components/Games";
import AppFooter from "./components/AppFooter";
// Ads
import HorizontalAd from "./components/HorizontalAd";

function App() {
    return (
        <div className="App">
            <AppHeader></AppHeader>
            <Bracket></Bracket>
            <HorizontalAd></HorizontalAd>
            <Standings></Standings>
            <HorizontalAd></HorizontalAd>
            <Games></Games>
            <AppFooter></AppFooter>
        </div>
    );
}

export default App;
