import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Evolucao from './pages/Infos/Evolução/Evolução'
import Racas from './pages/Infos/Raças/Raças'
import Associacoes from './pages/Infos/Associações/Associações'
import Kyoto from './pages/Infos/Associações/Kyoto/Kyoto'
import Tokyo from './pages/Infos/Associações/Tokyo/Tokyo'
import Outsiders from './pages/Infos/Associações/Outsiders/Outsiders'
import EstilosDeLuta from './pages/Infos/Estilos de Luta/Estilos de Luta'
import Clas from './pages/Infos/Clãs/Clãs'
import HospedeiroSukuna from './pages/Infos/Hospedeiro Sukuna/Hospedeiro Sukuna'
import Sukuna from './pages/Sukuna/Sukuna'
import Loja from './pages/Loja/Loja'
import ItemLojaPage from './pages/Loja/ItemLojaPage'
import LoremIpsum from './pages/Infos/Lorem Ipsum/Lorem Ipsum'
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
        <Route path="/infos/associacoes" element={<Associacoes />} />
        <Route path="/infos/associacoes/kyoto" element={<Kyoto />} />
        <Route path="/infos/associacoes/tokyo" element={<Tokyo />} />
        <Route path="/infos/associacoes/outsiders" element={<Outsiders />} />
        <Route path="/infos/estilos" element={<EstilosDeLuta />} />
        <Route path="/infos/clas" element={<Clas />} />
        <Route path="/infos/sukuna" element={<HospedeiroSukuna />} />
        <Route path="/hospedeiro" element={<Sukuna />} />
        <Route path="/infos/loja" element={<Loja />} />
        <Route path="/loja" element={<Loja />} />
        <Route path="/loja/produto" element={<ItemLojaPage />} />
        <Route path="/infos/lorem-1" element={<LoremIpsum />} />
        <Route path="/infos/lorem-2" element={<LoremIpsum />} />
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
