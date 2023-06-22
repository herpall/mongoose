const mongoose = require('mongoose');
const {Schema} = mongoose;

const alumno = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    camada:{
        ref: "Camada",
        type: Schema.Types.Array,
        required: true
    },
    img: {type: String, required: false}
})

module.exports = mongoose.model('Alumnos', alumno);