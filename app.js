const { inquirerMenu, inquirerPausa } = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');

require('colors');
console.clear();

const main = async() =>{
  let opt = '';
  while(opt !== '0'){
    opt = await inquirerMenu();
    if(opt !== '0') await inquirerPausa();
  }
}

main();
