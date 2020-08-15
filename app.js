const argv = require('./config/yargs').argv;
const colors = require('colors');


const { crearArchivo, listarTabla } = require('./Multiplicar/multiplicar');

//let base = 'abc';

//console.log(process.argv);

let argv2 = process.argv;
// let parametro = arg[2];
// let base = parametro.split('=')[1];
// console.log(base);



let comando = argv._[0];
switch (comando) {
    case 'listar':
        console.log('Comando recibido: listar');
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        console.log('Comando recibido: crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log('Archivo Creado', colors.green(`${ archivo }`)))
            .catch(err => console.log('error: ', err));
        break;

    default:
        console.log('comando no reconocido');
        break;
}

console.log('=================================================================');
// console.log('Datos yargs: ', argv);
// console.log('base: ', argv.base);
// console.log('limite: ', argv.limite);
// console.log('Datos process: ', argv2);
console.log(argv);