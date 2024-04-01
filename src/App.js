import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homep from './components/pages/HomePage/Homep';
import Footer from './components/pages/Footer/Footer';
import Accordion from './components/Accordion';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact Component={Homep}></Route>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;