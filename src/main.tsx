import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import ListarProducts from './pages/ListarProducts/index.tsx'
import CadastrarProducts from './pages/CadastrarProducts/index.tsx'
import './index.css'
import Header from './componets/Header/Index.tsx'
import Login from './pages/Login/index.tsx'
import Footer from './componets/Footer/indes.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<ListarProducts />} />
      <Route path="/cadastrar" element={<CadastrarProducts />} />
      <Route path="/login" element={<Login/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  </StrictMode>,
)
