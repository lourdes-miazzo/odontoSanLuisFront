
import React from 'react'
import './footer.css'
import iconoInsta from "./instagram.png"
import iconoFaceb from "./facebook.png"
import iconoOdonto from "./iconoLourdes.png"
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer>
      <div className='backg'>
        <div className='row-container'>
          <div></div>
          <div className='grid-container'>
              <div className='first'>
                <Link to="/"><img src={iconoOdonto} alt="ícono del círculo odontológico de San Luis" className='iconoOdonto'/></Link>
              </div>
              <div className='vertical'></div>
              <div className='second'>
                <p className='title'>INFORMACIÓN</p>
                <div className='infoText'>
                <p>circuloOdontologicoSanLuis@gmail.com</p>
                <p>0266 442-6636</p>
                <p>Ayacucho 1362</p>
                </div>
              </div>
              <div className='third'>
                  <p className='title'>SEGUINOS</p>
                  <div className='aroundIcons'>
                  <a href="https://www.instagram.com/lourdesmiazzo/" target="blank"><img src={iconoInsta} alt="icono de instagram version gráfica" className='icono'></img></a>
                  <a href="https://www.facebook.com/analourdes.miazzo/?locale=es_LA" target="blank"><img  src={iconoFaceb} alt="icono de facebook version gráfica" className='icono'></img></a>
                  <a href="https://api.whatsapp.com/send?phone=5493516318407" target="blank"><img  src={iconoFaceb} alt="icono de facebook version gráfica" className='icono'></img></a>
                  </div>
              </div>
          </div>
          <div></div>
        </div>
      </div>
    </footer>
  )
}

export default Footer