//for (let index = 1; index < 11; index++) {
//    const multiplicacion = 5*index;
//    console.log(`5 x ${index} = ${multiplicacion}`);
//}

const fs = require('fs'); 
const colors = require('colors/safe');

const crearArchivo = async( base=5, l=false, h=10 ) =>{

    try {
        console.clear();

        let salida ='';

        for (let i = 0; i <= h; i++) {
            salida += `${base} x ${i}  = ${base * i}\n`;
        }

        if (l === true) {
            console.log('==============================');
            console.log('Tabla del;', base);
            console.log('==============================');
            console.log(colors.green(salida));
        }
        

        fs.writeFileSync( `./salida/tabla-${base}.txt`, salida);    

        return `tabla-${base}.txt`;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    crearArchivo: crearArchivo
}