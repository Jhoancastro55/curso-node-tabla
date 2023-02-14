const argv = require('yargs')
                .option('b',{
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Esla base de la multiplicacion'
                })
                .option('l',{
                    alias: 'listar',
                    type: 'boolean',
                    default: 'false',
                    demandOption: true,
                    describe : 'Comando para listar las tablas'
                })
                .option('h',{
                    alias: 'hasta',
                    type: 'number',
                    demandOption: true,
                    describe : 'Hasta donde se realiza la multiplicacion'
                })
                .check((argv, options)=>{
                    if (isNaN( argv.b)) {
                        throw 'La base tiene que ser un numero';
                    }
                    return true;
                })
                .argv;

module.exports = argv;