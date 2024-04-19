import './scss/index.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import BreedDetailPage from './pages/BreedDetailPage';
import MostSearchedPage from './pages/MostSearchedPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/breed/:id" element={<BreedDetailPage />} />
          <Route path="/most-searched" element={<MostSearchedPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
