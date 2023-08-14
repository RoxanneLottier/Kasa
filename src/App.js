import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import FicheLogement from './pages/Fiche-Logement/FicheLogement';
import PageNotFound from './pages/404/404';
import APropos from './pages/A-Propos/Apropos';
import Header from './components/Header/Index';
import Footer from './components/Footer/Index';

function App() {
  return (
    <>
      <div className="App">
        <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<PageNotFound />} />
              <Route path="/a-propos" element={<APropos />} />
              <Route path="/fiche-logement/:id" element={<FicheLogement />} />
            </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
