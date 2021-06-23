require('colors');

const showMenu = () => {
  console.clear();
  console.log('====================='.green);
  console.log('Seleccione una opcion'.green);
  console.log('=====================\n'.green);

  console.log(`${`1.`.green} Crear Tareas`);
  console.log(`${`2.`.green} Listar Tareas`);
  console.log(`${`3.`.green} Listar Tareas Pendientes`);
  console.log(`${`4.`.green} Listar Tareas Completadas`);
  console.log(`${`5.`.green} Completar Tarea(s)`);
  console.log(`${`6.`.green} Borrar Tarea(s)`);
  console.log(`${`7.`.green} Salir`);
}


module.exports = {
  showMenu
}
