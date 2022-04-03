import React, { Component } from 'react';
import Contenedor from './Contenedor.jsx';
import Contador from './Opcion.jsx';
import data from './data.json';
import Swal from 'sweetalert2'

class Inicio extends Component {

  constructor(props) {
    super(props);
    this.state = {
      historias: data,
      eleccionFinal: "",
      historialDeElecciones: [],
      contador: 0,
    }
  }

  componentDidUpdate(prevProps, prevState) {
    let historial = this.state.historialDeElecciones
    if (prevState.contador !== this.state.contador) {
      historial.push(this.state.eleccionFinal);
    }
  }

  handleClick = (e) => {
    let idBtn = e.target.id
    let ultima = this.state.eleccionFinal
    this.setState({ eleccionFinal: idBtn })


    if (this.state.contador >= 7) {

      Swal.fire('Hemos llegado al final de la aventura')
    }

    else if (idBtn === "A" && ultima === "B") {
      this.setState({ contador: this.state.contador + 1 })
    }

    else if ((idBtn === "A" && ultima === "A") || (idBtn === "B" && ultima === "B")) {
      this.setState({ contador: this.state.contador + 2 })
    }

    else if (idBtn === "B" && ultima === "A") {
      this.setState({ contador: this.state.contador + 3 })
    }

    else if (idBtn === "A" && ultima === "") {
      this.setState({ contador: this.state.contador + 1 })
    }

    else if (idBtn === "B" && ultima === "") {
      this.setState({ contador: this.state.contador + 2 })
    }
    console.log('el boton fue pulsado');
    console.log(this.state.historialDeElecciones);
    console.log(this.state.contador)
  }


  render() {
    let i = this.state.contador
    let historialDeElecciones = this.state.historialDeElecciones
    return (
      <div className="App">
        <main className="layout">
          <Contenedor handleClick={this.handleClick} key={this.state.historias[i].id} historia={this.state.historias[i].historia} opciona={this.state.historias[i].opciones.a} opcionb={this.state.historias[i].opciones.b} />

          <Contador prev={this.state.eleccionFinal} hist={historialDeElecciones.map((cont, pos) => <li key={pos}>{cont}</li>
          )} />
        </main>
      </div>
    )
  }
};

export default Inicio;