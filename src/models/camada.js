const mongoose = require('mongoose');
const {Schema} = mongoose;

const Camada = new Schema({
    name: {type: String, required: true},
    duracion: {type: String, required: true}
})

module.exports = mongoose.model('Camada', Camada);