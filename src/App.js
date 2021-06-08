import "./App.css";
import Home from "./pages/home/home";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/mediaquery.scss";
import WhoAreWePage from "../src/pages/who_are_we/who_are_we";
import Services from "./pages/services/services";
import ContactUs from "./pages/contact_us/contact_us";
import SlideRoutes from "react-slide-routes";
import { Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <SlideRoutes
        location={location}
        duration={1200}
        effect="ease-in-out"
        pathList={["/", "/about", "/services", "/contact"]}
      >
        <Route path="/" exact component={Home} />
        <Route path="/about" component={WhoAreWePage} />
        <Route path="/services" component={Services} />
        <Route path="/contact" component={ContactUs} />
      </SlideRoutes>
    </div>
  );
}

export default App;
