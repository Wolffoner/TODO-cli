require('colors');

const imprimirTareas = (data = {}) =>{
  let i = 0;
  Object.keys(data).forEach(key =>{
    i++;
    let fechaCompletado = (data[key].fechaCompletado === null)
      ? `Incompleto`.red
      : `${data[key].fechaCompletado}`.blue
    console.log(`${`Tarea ${i}`.green}`);  
    console.log(`${`Descripcion:`.cyan} ${data[key].descripcion}`);
    console.log(`${`Fecha Completado:`.cyan} ${fechaCompletado}`);
    console.log(`${`Fecha Asignacion:`.cyan} ${`${data[key].fechaAsignado}`.yellow}`);
    console.log(`======================================\n`);
  })
}

const imprimirTareasSegun = (data = [], completado = true) =>{
  let tareasSegun = (completado)
    ? data.filter(tarea =>{ return tarea.fechaCompletado !== null})
    : data.filter(tarea =>{ return tarea.fechaCompletado === null})
  let i = 0;

  tareasSegun.forEach(tarea =>{
    i++;
    let fechaCompletado = (tarea.fechaCompletado === null)
      ? `Incompleto`.red
      : `${tarea.fechaCompletado}`.blue
    console.log(`${`Tarea ${i}`.green}`);  
    console.log(`${`Descripcion:`.cyan} ${tarea.descripcion}`);
    console.log(`${`Fecha Completado:`.cyan} ${fechaCompletado}`);
    console.log(`${`Fecha Asignacion:`.cyan} ${`${tarea.fechaAsignado}`.yellow}`);
    console.log(`======================================\n`);
  })
}

module.exports = {
  imprimirTareas,
  imprimirTareasSegun
}
