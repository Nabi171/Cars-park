import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import Notfound from './NotFound/Notfound';
import Home from './components/Home/Home';
import Header from './Header/Header';
// import Reviews from './components/Reviews/Reviews';
import Dassboard from './components/Dassboard/Dassboard';
import Blogs from './components/Blogs/Blogs';
import About from './components/About/About';
import ReviewSection from './components/ReviewSection/ReviewSection';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/reviewsection" element={<ReviewSection />} />
        <Route path="/dassboard" element={<Dassboard />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Notfound></Notfound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
