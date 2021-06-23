const { inquirerMenu, inquirerPausa } = require('./helpers/inquirer');
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
