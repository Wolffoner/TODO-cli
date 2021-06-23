require('colors');

const showMenu = () => {
  console.clear();
  console.log('====================='.green);
  console.log('Seleccione una opcion'.green);
  console.log('=====================\n'.green);

  console.log('1. Crear Tareas');
  console.log('2. Listar Tareas');
  console.log('3. Listar Tareas Pendientes');
  console.log('4. Listar Tareas Completadas');
  console.log('5. Completar Tarea(s)');
  console.log('6. Borrar Tarea(s)');
  console.log('0. Salir');
}


module.exports = {
  showMenu
}
