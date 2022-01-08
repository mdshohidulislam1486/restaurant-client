
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './pages/Shared/Header/Header';
import Home from './pages/Home/Home/Home';
import About from './pages/About/About';
import Foods from './pages/Foods/Foods';
import AllSeaFoods from './AllSeaFoods/AllSeaFoods';
import Categories from './pages/Categories/Categories';
import OurMenues from './pages/OurMenues/OurMenues';
import Footer from './pages/Shared/Footer/Footer';
import NotFound from './pages/NotFound/NotFound';

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
      <Route path="/allseafood" element={<AllSeaFoods />}></Route>
      <Route path="/categories" element={<Categories></Categories>}></Route>
      <Route path="/menues" element={<OurMenues></OurMenues>}></Route>
      <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
    </>
  );
}

export default App;
