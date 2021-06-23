
class Tareas {
  _listado = {};

  constructor(){
    this._listado = {};
  }
  
  getTareas(){
    return this._listado;
  }

  addTarea(tarea){
    this._listado[tarea.id] = tarea;
  }
 }

module.exports = Tareas;
