import "./App.scss";
import Home from "./pages/home/home";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/mediaquery.scss";
import WhoAreWePage from "../src/pages/who_are_we/who_are_we";
import Services from "./pages/services/services";
import ContactUs from "./pages/contact_us/contact_us";
import SlideRoutes from "react-slide-routes";
import {
  Route,
  Router,
  Switch,
  useLocation,
  useParams,
} from "react-router-dom";
import Banner from "./components/banner/banner";
import { useState } from "react";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {/* <Banner
        conf={{
          isButton: location.pathname == "/" ? true : false,
          page:
            location.pathname == "/"
              ? 1
              : location.pathname == "/about"
              ? 2
              : location.pathname == "/services"
              ? 3
              : 4,
        }}
      /> */}
      <Switch
      // location={location}
      // duration={1000}
      // effect="ease-in-out"
      // pathList={["/", "/about", "/services", "/contact"]}
      >
        <Route path="/" exact component={Home} />
        <Route path="/about" component={WhoAreWePage} />
        <Route path="/services" component={Services} />
        <Route path="/contact" component={ContactUs} />
      </Switch>
    </div>
  );
}

export default App;
