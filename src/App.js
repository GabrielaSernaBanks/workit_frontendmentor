import './App.css';
import "./App.scss";

import Nav from './components/Nav.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Main />
      <Footer/>
    </div>
  );
}

export default App;
