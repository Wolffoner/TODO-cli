const { v4: uuidv4 } = require('uuid');

class Tarea {
  id = '';
  descripcion = '';
  fechaCompletado = null;
  fechaAsignado = null;

  constructor(desc = ''){
    this.descripcion = desc;
    this.id = uuidv4();
    this.fechaAsignado = new Date();
  }

  get id(){
    return this.id;
  }

  get descripcion(){
    return this.descripcion;
  }

  set descripcion(desc){
    this.descripcion = desc;
  }

  get fechaCompletado(){
    return this.fechaCompletado;
  }

  set fechaCompletado(fecha){
    this.fechaCompletado = fecha;
  }

  get fechaAsignado(){
    return this.fechaAsignado;
  }

  set fechaAsignado(fecha){
    this.fechaAsignado = fecha;
  }
}

module.exports = Tarea;
