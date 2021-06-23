const fs = require('fs');

const guardarDB = async( data ) =>{
  
  const archivo = './db/tareas.json'
  fs.writeFile(archivo, JSON.stringify(data) , (err)=>{
    if(err) throw err;
  });
} 

module.exports = {
  guardarDB
}
