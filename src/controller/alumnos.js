const { query } = require('express');
const Alumno = require('../models/alumnos');
const Camada = require('../models/camada');

const createAlmuno = async(req, res)=>{
    let {name, email, camada, img} = req.body;
    if(!name || !email || !camada){
        return res.status(400).send('Faltan datos')
    }
    const dataCamada = await Camada.findOne({name: camada});
    if(dataCamada){
        let newAlumno = new Alumno({
            name,
            email,
            camada: dataCamada,
            img
        })  
        newAlumno.save();
        return res.json({
            msg: 'Nuevo alumno',
            newAlumno
        })
    }   
    return res.send('Camada no encontrada')
}

const getAll = async(req, res)=>{
    let {name} = req.query;
    if(!name){
        const listAlumnos = await Alumno.find();
        res.status(200).json({
            results: listAlumnos.length,
            listAlumnos
        })
    }else{
        const listNameAlumnos = await Alumno.find({name});
        if(listNameAlumnos.length === 0){
            return res.send('No existe ese nombre')
        }
        return res.status(200).json({
            listNameAlumnos
        })
    }
}

const deleteAlumno = async(req, res)=>{
    let {id} = req.params;
    const alumno = await Alumno.deleteOne({_id: id})
    if(alumno.deletedCount < 0)return res.json(alumno)
    else return res.send('id no encontrado')
}

const updateAlumno = async(req, res)=>{
    let {id} = req.params;
    let {name, email, camada, img} = req.body;
    if(!name || !email || !camada){
        return res.status(400).send('faltan datos');
    }
    let newCamada = await Camada.findOne({name: camada})
    let newData = {
        name, 
        email, 
        camada: newCamada, 
        img
    }
    let alumno = await Alumno.findByIdAndUpdate(id, newData);
    alumno = await Alumno.findById(id)
    return res.json({alumno})
}

const getAlumnoById = async(req, res)=>{
    const {id} = req.params;
    let dataAlumno = await Alumno.findOne({_id: id})
    if(dataAlumno){
        let dataCamada = await Camada.findOne({_id: dataAlumno.camada})
        if(dataCamada){
            dataAlumno.camada = dataCamada;
            return res.json(dataAlumno)
        }
        res.json({
            msg: "Alumno sin camada registrada",
            dataAlumno
        })
    }
}

module.exports = {  
    createAlmuno,
    getAll,
    deleteAlumno,
    updateAlumno,
    getAlumnoById
}