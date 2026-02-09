import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Evolucao from './pages/Infos/Evolução/Evolução'
import Racas from './pages/Infos/Raças/Raças'
import Associacoes from './pages/Infos/Associações/Associações'
import EstilosDeLuta from './pages/Infos/Estilos de Luta/Estilos de Luta'
import Clas from './pages/Infos/Clãs/Clãs'
import HospedeiroSukuna from './pages/Infos/Hospedeiro Sukuna/Hospedeiro Sukuna'
import Loja from './pages/Infos/Loja/Loja'
import LoremIpsum from './pages/Infos/Lorem Ipsum/Lorem Ipsum'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/infos/evolucao" element={<Evolucao />} />
        <Route path="/infos/racas" element={<Racas />} />
        <Route path="/infos/associacoes" element={<Associacoes />} />
        <Route path="/infos/estilos" element={<EstilosDeLuta />} />
        <Route path="/infos/clas" element={<Clas />} />
        <Route path="/infos/sukuna" element={<HospedeiroSukuna />} />
        <Route path="/infos/loja" element={<Loja />} />
        <Route path="/infos/lorem-1" element={<LoremIpsum />} />
        <Route path="/infos/lorem-2" element={<LoremIpsum />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
