import React from 'react'
import fr from '../../images/flor-r.png'
import fl from '../../images/flor-l.png'
import regalo from '../../images/regalo.png'
import map from '../../images/logo-g-map.png'
import bbva from '../../images/logo-bbva.png'
import bcp from '../../images/logo-bcp.png'
import './style.css'

const Regalos = () => {
  return (
    <div className="bkg regalos asistencia">
      <img src={fl} alt="" className="fl" />
      <img src={fr} alt="" className="fr" />
      <div className="max-width">
        <div className="title">
          <img src={regalo} alt="" />
          <h1>Regalos</h1>
        </div>
        <p>Sus buenos deseos son suficientes para nosotros en el
          matrimonio y en caso de querer hacernos un presente este
          puede ser presencial o en efectivo.
        </p>
        <p>
          <b>Dirección del novio: </b>
          Calle Manuel Gonzales 736 - Urb. El Retablo -Comas
          <a href="https://goo.gl/maps/TsEZzLQp2ZCZfBtm7" target="_blank" rel="noreferrer">
            <img src={map} alt="" />
          </a>
        </p>
        <p>
          <b>Dirección de novia: </b>
          Jirón Jose Gaete 119 - Urb. Sta. Luzmila - Comas
          <a href="https://goo.gl/maps/dAvFAaFdiu9JTq2z9" target="_blank" rel="noreferrer">
            <img src={map} alt="" />
          </a>
        </p>
        <div className="cuentas">
          <div>
            <img src={bbva} alt="" />
            <span>0011-0814-0216796743</span>
          </div>
          <div>
            <img src={bcp} alt="" />
            <span>19135987013016</span>
          </div>
        </div>
        <h3>A nombre de Victor Samuel Izquierdo Zuloaga</h3>
      </div>
    </div>
  )
}

export default Regalos
