import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/index';
import FicheLogement from './pages/Fiche-Logement/index';
import PageNotFound from './pages/404/404';
import APropos from './pages/A-Propos/index';

function App() {
  return (
    <>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page-not-found" element={<PageNotFound />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="/fiche-logement/:id" element={<FicheLogement />} />
      </Routes>
      </div>
    </>
  );
}

export default App;
