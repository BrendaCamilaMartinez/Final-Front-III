import React, { Component } from 'react';



class ContenedorHistoria extends Component {



  render() {
    
    // props


    const { historia, id, opcionA, opcionB, handleClick } = this.props

    return (
        <div className="contenedorHistoria" key={id}>
          <div>

            <h2 className="historia">{historia}</h2>
          </div>

          <div className="opciones">

            <div className="opcion">

              <button id="A" className="boton" onClick={handleClick}>A</button>

              <h3>{opcionA}</h3>

            </div>

            <div className="opcion">

              <button id="B" className="boton" onClick={handleClick}>B</button>

              <h3>{opcionB}</h3>

            </div>
          </div>
        </div>
    )
  }
}



export default ContenedorHistoria