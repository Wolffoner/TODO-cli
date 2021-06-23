const fs = require('fs');

const ARCHIVO = './db/tareas.json';

const guardarDB = async( data ) =>{
  
  fs.writeFile(ARCHIVO, JSON.stringify(data) , (err)=>{
    if(err) throw err;
  });
} 

const leerDB = () =>{
  let info = null;
  if(fs.existsSync(ARCHIVO)){
    info = fs.readFileSync(ARCHIVO, { encoding: 'utf-8' });
    info = JSON.parse(info);
  }
  return info;
}

module.exports = {
  guardarDB,
  leerDB
}
