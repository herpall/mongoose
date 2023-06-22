const Camada = require('../models/camada');

const createCamada = async(req, res)=>{
    const {name, duracion} = req.body;
    if(!name || !duracion) return res.send('Faltan datos')
    let newCamada = await Camada.findOne({name:name})
    if(!newCamada){
        const newCamada = new Camada({
        name,
        duracion
    }) 
    await newCamada.save()
    return res.json(newCamada)
    }
    return res.send('Camada ya existente')
}

const listCamadas = async(req, res)=>{
    const camadaList = await Camada.find();
    if(camadaList.length == 0){
        return res.send('No hay camadas')
    }
    return res.json(camadaList)
}

const camadaById = async(req, res)=>{
    const {id} = req.params;
    const dataCamada = await Camada.findById(id);
    if(dataCamada){
        return res.json(dataCamada)
    }
    return res.send('Id no valido');
}

module.exports = {
    createCamada,
    listCamadas,
    camadaById
}