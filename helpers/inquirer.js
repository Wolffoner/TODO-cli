const inquirer = require('inquirer');
require('colors');

const preguntas = [
  {
    type:`list`,
    name:`opcion`,
    message:`Que deseas hacer?`,
    choices: [
      {
        value: '1',
        name: `${`1.`.green} Crear Tarea`
      },
      {
        value: '2',
        name: `${`2.`.green} Listar Tareas`
      },
      {
        value: '3',
        name: `${`3.`.green} Listar Tareas Completadas`
      },
      {
        value: '4',
        name: `${`4.`.green} Listar Tareas Pendientes`
      },
      {
        value: '5',
        name: `${`5.`.green} Completar Tarea(s)`
      },
      {
        value: '6',
        name: `${`6.`.green} Actualizar Tarea`
      },  
      {
        value: '7',
        name: `${`7.`.green} Borrar Tarea`
      },
      {
        value: '0',
        name: `${`0.`.green} Salir`
      }
    ]
  }
];

const inquirerMenu = async () => {
  console.clear();
  console.log('====================='.green);
  console.log('Seleccione una opcion'.green);
  console.log('=====================\n'.green);
  const {opcion} = await inquirer.prompt(preguntas);
  return opcion;
}

const inquirerPausa = async () => {
  
  let pausaOpt = [
    {
      type:`input`,
      name:`pausa`,
      message:`Presione ${`ENTER`.green} para continuar`
    }
  ]
  await inquirer.prompt(pausaOpt);
}

const leerInput = async (message) => {
  let question = [
    {
      type:`input`,
      name: `desc`,
      message,
      validate(value){
        if(value.length === 0){
          return `Por favor ingrese un ${`valor`.green}.`
        } else {
          return true;
        }
      }
    }
  ];

  const { desc } = await inquirer.prompt(question);
  return desc;
}

module.exports = {
  inquirerMenu,
  inquirerPausa,
  leerInput
}
