const Tarea = require('./tarea');

class Tareas {
  _listado = {};

  constructor(){
    this._listado = {};
  }
  
  getTareas(){
    return this._listado;
  }
  
  crearTarea(desc = ''){
    let tarea = new Tarea(desc);
    this._listado[tarea.getId()] = tarea;
  }
}

module.exports = Tareas;
