require('colors');

const imprimirTareas = (data = {}) =>{
  let i = 0;
  Object.keys(data).forEach(key =>{
    i++;
    let fechaCompletado = (data[key].fechaCompletado === null)
      ? `Incompleto`.red
      : `${data[keys].fechaCompletado}`.blue
    console.log(`${`Tarea ${i}`.green}`);  
    console.log(`${`Descripcion:`.cyan} ${data[key].descripcion}`);
    console.log(`${`Fecha Completado:`.cyan} ${fechaCompletado}`);
    console.log(`${`Fecha Asignacion:`.cyan} ${`${data[key].fechaAsignado}`.yellow}`);
    console.log(`======================================\n`);
  })
}

module.exports = {
  imprimirTareas
}
