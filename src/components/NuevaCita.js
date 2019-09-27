import React, { Component } from 'react';
import uuid from 'uuid';

const stateInicial = {
    cita: {
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    },
    error:false
}

class NuevaCita extends Component {
    state = { ...stateInicial }

     handleChange = e => {
         console.log(e.target.name + ': ' + e.target.value);

         //colocar lo que el usuario escribe en el state
         this.setState({
            cita: {
                ...this.state.cita,
                [e.target.name] : e.target.value
            }

         })
         //console.log(this.state); btgg  
     }

     handleSubmit = e => {
         e.preventDefault();
    
        //extraer los valores del 
        const { mascota, propietario, fecha, hora, sintomas } = this.state.cita;    
       
        //validar que todos los campos esten llenos
        if(mascota === '' || propietario === '' || fecha === '' || hora === '' || sintomas === ''){
            this.setState({
                error: true
            });

            //detener la ejecucion
            return;
        }

        //generar objeto con los datos
        const nuevaCita = {...this.state.cita};
        nuevaCita.id = uuid();

        //agregar la cita al state de app
        this.props.crearNuevaCita(nuevaCita);

        //Colocar en el state el stateInicial
        this.setState({
            ...stateInicial
        })
     }

    render() {

        // extraer valor del state
        const { error } = this.state;

        return (
            <div className="card mt-5 py-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb5">
                        Llena el formulario para crear una nueva cita
                    </h2>

                    {error ? <div className ="alert alert-danger mt-2 mb-5 text-center"> 
                    Todos los campos son obligatorios
                    </div> : null}

                    <form
                        onSubmit={ this.handleSubmit }
                    >
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Nombre Mascota
                            </label>
                            <div className="col-sm-8 col-lg-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre mascota"
                                    name="mascota"
                                    onChange={this.handleChange} 
                                    value={this.state.cita.mascota}
                                />
                            </div>
                        </div> {/* form group 1*/}

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Nombre Dueño
                            </label>
                            <div className="col-sm-8 col-lg-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre dueño mascota"
                                    name="propietario"
                                    onChange={this.handleChange} 
                                    value={this.state.cita.propietario} 
                                />
                            </div>
                        </div> {/* form group 2*/}

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Fecha
                            </label>
                            <div className="col-sm-8 col-lg-4">
                                <input
                                    type="date"
                                    className="form-control"
                                    name="fecha"
                                    onChange={this.handleChange} 
                                    value={this.state.cita.fecha} 
                                />
                            </div>
                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Hora
                            </label>
                            <div className="col-sm-8 col-lg-4">
                                <input
                                    type="time"
                                    className="form-control"
                                    placeholder="Nombre dueño mascota"
                                    name="hora"
                                    onChange={this.handleChange} 
                                    value={this.state.cita.hora} 
                                />
                            </div>
                        </div> {/* form group 4*/}

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Nombre Dueño
                            </label>
                            <div className="col-sm-8 col-lg-10">
                                <textarea
                                    className="form-control"
                                    name="sintomas"
                                    placeholder="Describe los Sintomas"
                                    onChange={this.handleChange} 
                                    value={this.state.cita.sintomas}
                                ></textarea>
                            </div>
                        </div> {/* form group 4*/}

                        <input type="submit" className="py-3 met-2 btn btn-success btnblock" value="Agregar nueva cita"/>
                    </form>
                </div>
            </div>
        );
    }
}

export default NuevaCita;