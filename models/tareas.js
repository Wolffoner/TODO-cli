const Tarea = require('./tarea');

class Tareas {
  _listado = {};

  constructor(){
    this._listado = {};
  }
  
  get listadoArr(){
    let listado = [];
    Object.keys(this._listado).forEach( key =>{
      let tarea = this._listado[key];
      listado.push(tarea);
    });
    return listado;
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
