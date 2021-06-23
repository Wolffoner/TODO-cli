const { inquirerMenu } = require('./helpers/inquirer');
const { pausa } = require('./helpers/mensaje');
require('colors');
console.clear();

const main = async() =>{
  let opt = '';
  while(opt !== '0'){
    opt = await inquirerMenu();
    if(opt !== '0') await pausa();
  }
}

main();
