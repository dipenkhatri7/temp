import "./App.css";
import Nav from "./components/nav/nav";
import RightLayer from "./components/rightLayer/rightLayer";
import LeftInformation from "./components/leftLayer/leftInformation";
import CenterMap from "./components/Map/centerMap";
function App() {
  return (
    <>
      <Nav />
      <CenterMap />
      <RightLayer />
      <LeftInformation />
    </>
  );
}

export default App;
