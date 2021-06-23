const { 
  inquirerMenu, 
  inquirerPausa,
  leerInput  
} = require('./helpers/inquirer');
const { guardarDB, leerDB } = require('./helpers/fileController');
const Tareas = require('./models/tareas');
const { imprimirTareas } = require(`./helpers/printController`); 

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
      imprimirTareas(tareas.getTareas());
    },
    '3': () =>{},
    '4': () =>{},
    '5': () =>{},
    '6': () =>{},
    '7': () =>{},
    '8': () =>{}
  }

  while(optElegida !== '0'){
    optElegida = await inquirerMenu();
    await opciones[optElegida]();
    await guardarDB(tareas.getTareas());
    if(optElegida !== '0') await inquirerPausa();
  }
}

main();
