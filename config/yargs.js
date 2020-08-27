const description = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
}

const { argv } = require('yargs')
    .command('crear', 'crae una tarea', {
        description
    })
    .command('actualizar', 'Actualiza la tarea', {
        description,
        completado
    })
    .command('borrar', 'Elimina la tarea', {
        description

    })
    .help()

module.exports = {
    argv
}