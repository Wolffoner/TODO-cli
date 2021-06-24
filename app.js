const { 
  inquirerMenu, 
  inquirerPausa,
  leerInput  
} = require('./helpers/inquirer');
const { guardarDB, leerDB } = require('./helpers/fileController');
const Tareas = require('./models/tareas');
const { imprimirTareas, imprimirTareasSegun } = require(`./helpers/printController`); 

const main = async() =>{
  console.clear();
  let optElegida = '';
  let tareas = new Tareas();
  let tareasDB = leerDB();

  if(tareasDB) 
    tareas.cargarTareasDB(tareasDB);   
 
  const opciones = {
    '1': async() =>{
      const desc = await leerInput(`Descripcion: `);
      tareas.crearTarea(desc);
    },
    '2': () =>{
      imprimirTareas(tareas.listado);
    },
    '3': () =>{
      let completado = true;
      imprimirTareasSegun(tareas.listadoArr, completado);
    },
    '4': () =>{
      let completado = false;
      imprimirTareasSegun(tareas.listadoArr, completado);
    },
    '5': () =>{},
    '6': () =>{},
    '7': () =>{},
    '8': () =>{}
  }

  while(optElegida !== '0'){
    optElegida = await inquirerMenu();
    await opciones[optElegida]();
    await guardarDB(tareas.listado);
    if(optElegida !== '0') await inquirerPausa();
  }
}

main();
