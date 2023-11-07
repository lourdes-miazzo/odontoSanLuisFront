import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/home/Home.jsx"
import Nosotros from "./pages/nosotros/Nosotros.jsx"
import Noticias from "./pages/noticias/Noticias.jsx"
import Cursos from "./pages/cursos/Cursos.jsx"
import Contacto from "./pages/contacto/Contacto.jsx"
import Error404 from "./pages/error/Error404.jsx"
import Register from './pages/register/Register.jsx';
import Login from './pages/login/Login.jsx';
import BarraNav from './components/barraNav/BarraNav.jsx';
import NewsDetail from './components/newsDetail/NewsDetail.jsx';
import { AuthProvider } from './context/AuthContext.jsx';


function App() {
  return (
    <>
    <AuthProvider>
      <BrowserRouter>
          <BarraNav/>
        <Routes>
            <Route exact path="/" element={<Home/>}/> 
            <Route exact path="/api/nosotros" element={<Nosotros/>}/>
            <Route exact path="/api/noticias" element={<Noticias/>}/>
            <Route exact path="/api/noticias/:id" element={<NewsDetail/>}/>
            <Route exact path="/api/cursos" element={<Cursos/>}/>
            <Route exact path="/api/contacto" element={<Contacto/>}/>
            <Route exact path="/api/register/registro" element={<Register/>}/>
            <Route exact path="/api/register/login" element={<Login/>}/> 
            <Route path='/*' element={<Error404/>}/>
        </Routes>
      </BrowserRouter> 
    </AuthProvider> 
    </>
  )
}

export default App
