const {mostrarMenu, pausa} = require('./helpers/mensaje');

require('colors');
console.clear();

const main = async() =>{
  console.log('Hola Mundo!');
  let opt = '';
  while(opt !== '0'){
    opt = await mostrarMenu();
    if(opt !== '0') await pausa();
  }
}

main();
