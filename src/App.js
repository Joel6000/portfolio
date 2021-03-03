import './App.css';
import './index.css'
import NavigationBar from './components/NavigationBar.js';
import Footer from './components/Footer.js';
import Homepage from './components/Homepage.js';
import {Route} from "react-router-dom";
import About from './components/About.js';
import Experiences from './components/Experiences.js';
import Contact from './components/Contact.js'
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div style={{height:"100%"}}>
      <NavigationBar/>
      <Route exact path="/">
        <Homepage/>
      </Route>
      <Route exact path="/about"> <About/> </Route>
      <Route exact path="/about" component={About}/>
      <Route exact path="/portfolio"> <Portfolio/> </Route>
      <Route exact path="/experiences" component={Experiences}/>
      <Route exact path="/portfolio" component={Portfolio}/>
      <Route exact path="/contact" component={Contact}/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
