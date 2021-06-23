const Tarea = require('./tarea');

class Tareas {
  _listado = {};

  constructor(){
    this._listado = {};
  }
  
  cargarTareasDB(data){
    Object.keys(data).forEach(key =>{
      this._listado[key] = data[key];
      let date = new Date(this._listado[key].fechaAsignado)
      this._listado[key].fechaAsignado = date;
    })
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
