const fs = require('fs')


let listadoPorHacer = []

const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer)

    fs.writeFile('./db/data.json', data, (err) => {
        if (err) console.log(err)
        else console.log('se grabo el archivo');
    })

}

const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json')
    } catch (error) {
        listadoPorHacer = []
    }

}


const crear = (description) => {

    cargarDB()

    let porHacer = {
        description,
        completado: false,
    }

    listadoPorHacer.push(porHacer)


    guardarDB()

    return porHacer


}

const getListado = () => {
    cargarDB()

    return listadoPorHacer
}

const actualizar = (descripcion, completado = true) => {

    cargarDB()

    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.description === descripcion
    })

    if (index >= 0) {
        listadoPorHacer[index].completado = completado
        guardarDB()
        return true
    } else {
        return false
    }

}

const borrar = (description) => {

    cargarDB()

    let nuevoListado = listadoPorHacer.filter(tarea => {
        return tarea.description !== description
    })

    if (listadoPorHacer.length === nuevoListado) {
        return false
    } else {
        listadoPorHacer = nuevoListado
        guardarDB()
        return true
    }

}

module.exports = {
    crear,
    guardarDB,
    getListado,
    actualizar,
    borrar
}