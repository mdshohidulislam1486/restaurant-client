import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './pages/Shared/Header/Header';
import Home from './pages/Home/Home/Home';
import About from './pages/About/About';
import Foods from './pages/Foods/Foods';

function App() {
  return (
    <>
    <BrowserRouter>
    <Header></Header>
      <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="/home" index element={<Home />} />
      <Route path="/about" element={<About />}></Route>
      <Route path="/foods" element={<Foods />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
