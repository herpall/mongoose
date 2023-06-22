const routes = require('express').Router();
const {createAlmuno, getAll, deleteAlumno, updateAlumno, getAlumnoById} = require('../controller/alumnos');
const {createCamada, listCamadas, camadaById} = require('../controller/camada')

routes.post('/newAlumno', createAlmuno)
routes.get('/Alumno', getAll)
routes.get('/AlumnoById/:id', getAlumnoById)
routes.delete('/deleteAlumno/:id', deleteAlumno)
routes.put('/updateAlumno/:id', updateAlumno)

routes.post('/newCamada', createCamada)
routes.get('/Camadas', listCamadas)
routes.get('/Camadas/:id', camadaById)

module.exports = routes;