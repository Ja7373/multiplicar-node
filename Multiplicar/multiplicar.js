// requireds
const colors = require('colors');
const fs = require('fs');



let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido  ${base} no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += (`${ base } * ${ i } = ${base * i}\n`);
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`);
        });
    });
};


let listarTabla = (base, limite = 10) => {
    console.log('=================================='.green);
    console.log(`========== tabla del ${base} ===========`);
    console.log('==================================');

    let data = '';

    for (let i = 1; i <= limite; i++) {
        data += `${ base } * ${ i } = ${base * i}\n`;
    }
    console.log(data);
    //resolve(data);
    //return;
};


module.exports = {
    crearArchivo,
    listarTabla
}