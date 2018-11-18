const fs = require('fs');
const colors = require('colors/safe');

let listarTabla = (base, limite = 10) => {

    console.log('======================');
    console.log(`tabla de ${ base }`.green);
    console.log('======================');

    for (let i = 1; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${ base * i }\n`);
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido  ${ base } no  es número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i }\n`;
        }

        //const data = new Uint8Array(Buffer.from('Hola mundo'));
        fs.writeFile(`tablas/tabla-${ base }--al--${ limite }.txt`, data, (err) => {

            if (err)
                reject(err);
            else
                resolve(`tabla-${ base }--al--${ limite }.txt`);
        });

    })
}

module.exports = {
    crearArchivo,
    listarTabla
}