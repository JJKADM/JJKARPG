import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Evolucao from './pages/Infos/Evolucao/Evolucao'
import Racas from './pages/Infos/Raças/Raças'
import Humanos from './pages/Infos/Raças/Humanos/Humanos'
import CadaverAmaldicoado from './pages/Infos/Raças/Cadáver Amaldiçoado/Cadaver'
import FetosAmaldicoadosPinturaDaMorte from './pages/Infos/Raças/Fetos Amaldiçoados: Pintura da Morte/Fetos'
import Maldicoes from './pages/Infos/Raças/Maldições/Maldicoes'
import Associacoes from './pages/Infos/Associações/Associações'
import Kyoto from './pages/Infos/Associações/Kyoto/Kyoto'
import Tokyo from './pages/Infos/Associações/Tokyo/Tokyo'
import Outsiders from './pages/Infos/Associações/Outsiders/Outsiders'
import EstilosDeLuta from './pages/Infos/Estilos de Luta/Estilos de Luta'
import Esgrima from './pages/Infos/Estilos de Luta/Esgrima/Esgrima'
import PunhoDivergente from './pages/Infos/Estilos de Luta/PunhoDiverg/Punhodiverg'
import Clas from './pages/Infos/Clãs/Clãs'
import Gojou from './pages/Infos/Clãs/Gojou/Gojou'
import Kamo from './pages/Infos/Clãs/Kamo/Kamo'
import Zenin from './pages/Infos/Clãs/Zenin/Zenin'
import HospedeiroSukuna from './pages/Infos/Hospedeiro Sukuna/Hospedeiro Sukuna'
import Sukuna from './pages/Sukuna/Sukuna'
import Loja from './pages/Loja/Loja'
import ItemLojaPage from './pages/Loja/ItemLojaPage'
import Carteira from './pages/Carteira/Carteira'
import Perfil from './pages/Perfil/Perfil'
import Listausers from './pages/ListaUsuarios/Listausers'
import Login from './pages/LoginRegistro/Login'
import Register from './pages/LoginRegistro/Register'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/infos/evolucao" element={<Evolucao />} />
        <Route path="/infos/racas" element={<Racas />} />
        <Route path="/infos/racas/humanos" element={<Humanos />} />
        <Route path="/infos/racas/cadaver" element={<CadaverAmaldicoado />} />
        <Route
          path="/infos/racas/fetos"
          element={<FetosAmaldicoadosPinturaDaMorte />}
        />
        <Route path="/infos/racas/maldicoes" element={<Maldicoes />} />
        <Route path="/infos/associacoes" element={<Associacoes />} />
        <Route path="/infos/associacoes/kyoto" element={<Kyoto />} />
        <Route path="/infos/associacoes/tokyo" element={<Tokyo />} />
        <Route path="/infos/associacoes/outsiders" element={<Outsiders />} />
        <Route path="/infos/estilos" element={<EstilosDeLuta />} />
        <Route path="/infos/estilos/esgrima" element={<Esgrima />} />
        <Route path="/infos/estilos/punho-divergente" element={<PunhoDivergente />} />
        <Route path="/infos/clas" element={<Clas />} />
        <Route path="/infos/clas/gojou" element={<Gojou />} />
        <Route path="/infos/clas/kamo" element={<Kamo />} />
        <Route path="/infos/clas/zenin" element={<Zenin />} />
        <Route path="/infos/sukuna" element={<HospedeiroSukuna />} />
        <Route path="/hospedeiro" element={<Sukuna />} />
        <Route path="/infos/loja" element={<Loja />} />
        <Route path="/loja" element={<Loja />} />
        <Route path="/loja/produto" element={<ItemLojaPage />} />
        <Route path="/carteira" element={<Carteira />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/usuarios" element={<Listausers />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
