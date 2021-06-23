const { v4: uuidv4 } = require('uuid');

class Tarea {
  id = '';
  descripcion = '';
  fechaCompletado = null;
  fechaAsignado = null;

  constructor(desc){
    this.descripcion = desc;
    this.id = uuidv4();
    this.fechaAsignado = new Date();
  }

  getId(){
    return this.id;
  }

  getDescripcion(){
    return this.descripcion;
  }

  setDescripcion(desc){
    this.descripcion = desc;
  }

  getFechaCompletado(){
    let fecha = (this.fechaCompletado === null)
      ? `Sin Completar`
      : this.fechaCompletado;
    return fecha;
  }

  setFechaCompletado(fecha){
    this.fechaCompletado = fecha;
  }

  getFechaAsignado(){
    return this.fechaAsignado;
  }

  setFechaAsignado(fecha){
    this.fechaAsignado = fecha;
  }
}

module.exports = Tarea;
