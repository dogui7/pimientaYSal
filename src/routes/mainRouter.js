const express = require('express');
const router = express.Router();

// Llamada al controlador adecuado
const mainController = require('../controllers/mainController')

// Se usa el método correspondiente segun la ruta ingresada. 
// Mirar mainController.js en la carpeta controllers
router.get('/', mainController.index);
router.get('/detalleMenu/:id', mainController.detalleMenu);

module.exports = router;