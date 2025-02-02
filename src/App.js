import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/style.css';
import './assets/responsive.css';
import Navbar from './Layout/Navbar/Navbar';
import Footer from './Layout/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from './pages/Home/Home';
import Classes from './pages/Classes/Classes';
import Contact from './pages/ContactPage/ContactPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import ClassesDetails from './pages/ClassesDetails/ClassesDetails';

const App = () => {
  useEffect(() => {
    document.title = "NEXRISE";
  }, []);

  return (
    <div className="app">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact render={(props) => <Home {...props} title="Nexrise" />} />
          <Route path="/error" render={(props) => <ErrorPage {...props} title="Error" />} />
          <Route path="/contact" render={(props) => <Contact {...props} title="Contact" />} />
          <Route path="/nos-formations" exact render={(props) => <Classes {...props} title="Nos formations" />} />
          <Route path="/nos-formations/:slug" render={(props) => <ClassesDetails {...props}/>} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
