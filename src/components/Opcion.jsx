import React, { Component } from "react";

class Opcion extends Component {
    render() {
        
        const {prev, hist} = this.props
        return (
            <div className="recordatorio">
                <div>
                    <h4>Selección Anterior: {prev}</h4>
                    <h4>Historial de selecciones:</h4>
                    <ul>{hist}</ul>
                </div>
            </div>
        )
    }
}

export default Opcion