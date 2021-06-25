const { 
  inquirerMenu, 
  inquirerPausa,
  leerInput,  
  borrarElem,
  actualizarElem,
  confirmar,
  mostrarListadoCheckList
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
      let desc = await leerInput(`Descripcion: `);
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
    '5': async () =>{
      let ids = await mostrarListadoCheckList(tareas.listadoArr);
      tareas.completarTareas(ids);
      imprimirTareasSegun(tareas.listadoArr, true); 
    },
    '6': async() =>{
      let id = await actualizarElem(tareas.listadoArr);
      let desc = await leerInput(`Descripcion: `);
      tareas.getTareaById(id).descripcion = desc; 
    },
    '7': async() =>{
      let id = await borrarElem(tareas.listadoArr);
      let ok = await confirmar(`Estas seguro de borrar el ${`elemento`.red}?`);
      if(ok){
        console.log(`Elemento Borrado.`);
        tareas.borrarTarea(id);
      }
    },
    '0': () =>{
      console.clear();
      console.log(`Nos vemos!`.green);
    }
  }

  while(optElegida !== '0'){
    optElegida = await inquirerMenu();
    await opciones[optElegida]();
    await guardarDB(tareas.listado);
    if(optElegida !== '0') await inquirerPausa();
  }
}

main();
