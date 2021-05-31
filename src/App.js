import "./App.css";
import Home from "./pages/home/home";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/mediaquery.scss";
import WhoAreWePage from "../src/pages/who_are_we/who_are_we";
import Services from "./pages/services/services";
function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      {/* <WhoAreWePage /> */}
      <Services />
    </div>
  );
}

export default App;
