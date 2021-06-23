const { 
  inquirerMenu, 
  inquirerPausa,
  leerInput  
} = require('./helpers/inquirer');
const { guardarDB } = require('./helpers/guardarData');
const Tareas = require('./models/tareas');
require('colors');
console.clear();

const main = async() =>{
  let optElegida = '2';
  let tareas = new Tareas();

  const opciones = {
    '1': async() =>{
      const desc = await leerInput(`Descripcion: `);
      tareas.crearTarea(desc);
    },
    '2': () =>{
      console.log(tareas.listadoArr);
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
