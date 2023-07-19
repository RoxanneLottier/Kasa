import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/index';
import FicheLogement from './pages/Fiche-Logement/index';
import FourOFour from './pages/404/index';
import APropos from './pages/A-Propos/index';

function App() {
  return (
    <>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/404" element={<FourOFour />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="/fiche-logement" element={<FicheLogement />} />
      </Routes>
      </div>
    </>
  );
}

export default App;
